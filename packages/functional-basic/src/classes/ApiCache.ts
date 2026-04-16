import { isDomRuntime } from '../functions/isDomRuntime'
import { ErrorCenter } from './ErrorCenter'

import type { ApiCacheItem, ApiCacheList, ApiFetch } from '../types/apiTypes'

/**
 * Default cache age in seconds (24 hours)/
 * Значение возраста кэша по умолчанию в секундах (24 часа)
 */
const API_CACHE_DEFAULT_AGE = 24 * 60 * 60

/**
 * Class for caching API responses.
 *
 * Класс для кэширования ответов API.
 */
export class ApiCache {
  /** Cache storage / Кэш хранилища */
  protected static items?: ApiCacheList

  /** Storage mechanism for getting data / механизм хранения для получения данных */
  protected static getListener?: (key: string) => Promise<ApiCacheItem | undefined>

  /** Storage mechanism for setting data / механизм хранения для сохранения данных */
  protected static setListener?: (
    key: string,
    value: ApiCacheItem
  ) => Promise<boolean>

  /** Storage mechanism for removing data / механизм хранения для удаления данных */
  protected static removeListener?: (key: string) => Promise<boolean>

  /**
   * Number of data retrieval requests before starting the cleaning of old cache/
   * Количество запросов получения данных перед началом очистки старого кэша
   */
  protected static cacheStepAgeClearOld = 16_384

  /** Number of data retrieval requests before starting the cleaning of old cache/ Количество запросов получения данных перед началом очистки старого кэша */
  protected static stepAgeClearOld: number = this.cacheStepAgeClearOld

  /**
   * Initializes the storage with listeners.
   *
   * Инициализирует хранилище слушателями.
   * @param getListener Storage mechanism for getting data / механизм хранения для получения данных
   * @param setListener Storage mechanism for setting data / механизм хранения для сохранения данных
   * @param removeListener Storage mechanism for removing data / механизм хранения для удаления данных
   * @param cacheStepAgeClearOld Number of data retrieval requests before starting the cleaning of old cache / количество запросов получения данных перед началом очистки старого кэша
   */
  static init(
    getListener: (key: string) => Promise<ApiCacheItem | undefined>,
    setListener: (key: string, value: ApiCacheItem) => Promise<boolean>,
    removeListener: (key: string) => Promise<boolean>,
    cacheStepAgeClearOld?: number
  ): void {
    this.getListener = getListener
    this.setListener = setListener
    this.removeListener = removeListener

    if (cacheStepAgeClearOld) {
      this.cacheStepAgeClearOld = cacheStepAgeClearOld
      this.stepAgeClearOld = cacheStepAgeClearOld
    }
  }

  /**
   * Resets the cache by clearing all in-memory items and resetting listeners.
   *
   * Сбрасывает кэш, очищая все элементы в памяти и сбрасывая слушатели.
   */
  static reset(): typeof ApiCache {
    this.items = undefined

    this.getListener = undefined
    this.setListener = undefined
    this.removeListener = undefined

    this.stepAgeClearOld = this.cacheStepAgeClearOld

    return this
  }

  /**
   * Getting data from cache.
   *
   * Получение данных из кэша.
   * @param key cache key / ключ кэша
   */
  static async get<T>(key: string): Promise<T | undefined> {
    const item: ApiCacheItem<T> | undefined = await this.getItemOrListener(key)

    this.clearOld()
      .catch((error) => {
        ErrorCenter.on({
          group: 'api',
          code: 'cacheClear',
          details: error
        })
      })

    return item?.value
  }

  /**
   * Getting data from cache using fetch options.
   *
   * Получение данных из кэша с использованием опций fetch.
   * @param fetch fetch options / опции fetch
   */
  static async getByFetch<T>(fetch: ApiFetch): Promise<T | undefined> {
    if (!this.isCache(fetch)) {
      return undefined
    }

    const key = this.generateKey(fetch)
    return await this.get<T>(key)
  }

  /**
   * Saving data to cache.
   *
   * Сохранение данных в кэш.
   * @param key cache key / ключ кэша
   * @param value data to be stored / данные для хранения
   * @param age cache age / возраст кэша
   */
  static async set<T>(
    key: string,
    value: T,
    age: number = API_CACHE_DEFAULT_AGE
  ): Promise<void> {
    const item: ApiCacheItem<T> = {
      value,
      age,
      cacheAge: Date.now()
    }

    await this.setItemOrListener(key, item)
  }

  /**
   * Saving data to cache using fetch options.
   *
   * Сохранение данных в кэш с использованием опций fetch.
   * @param fetch fetch options / опции fetch
   * @param value data to be stored / данные для хранения
   */
  static async setByFetch<T>(fetch: ApiFetch, value: T): Promise<void> {
    if (this.isCache(fetch)) {
      const key = this.generateKey(fetch)
      await this.set(key, value, fetch.cache)
    }
  }

  /**
   * Removing data from cache.
   *
   * Удаление данных из кэша.
   * @param key cache key / ключ кэша
   */
  static async remove(key: string): Promise<void> {
    await this.removeItemOrListener(key)
  }

  /**
   * Checks if the cache is enabled.
   *
   * Проверяет, включен ли кэш.
   * @param fetch fetch options / опции fetch
   */
  protected static isCache(fetch: ApiFetch): boolean {
    if (isDomRuntime()) {
      return false
    }

    const { cache } = fetch

    return Boolean(cache)
  }

  /**
   * Checks for storage time limit.
   *
   * Проверяет на лимит времени хранения.
   * @param item cache item / элемент кэша
   */
  protected static isAge(item?: ApiCacheItem): boolean {
    if (!item) {
      return false
    }

    if (!item.age) {
      return true
    }

    return (item.age * 1000) + item.cacheAge >= Date.now()
  }

  /**
   * Checks if the key exists in the cache.
   *
   * Проверяет, существует ли ключ в кэше.
   * @param key cache key / ключ кэша
   */
  protected static isItem(key: string): boolean {
    return key in this.getList()
  }

  /**
   * Generate cache key from fetch options.
   *
   * Генерация ключа кэша из опций fetch.
   * @param fetch fetch options / опции fetch
   */
  protected static generateKey(fetch: ApiFetch): string {
    return JSON.stringify({
      api: fetch.api,
      auth: fetch.auth,
      init: fetch.init,
      method: fetch.method,
      path: fetch.path,
      pathFull: fetch.pathFull,
      request: fetch.request,
      toData: fetch.toData,
      cacheId: fetch.cacheId
    })
  }

  /**
   * Getting data from cache using listener.
   *
   * Получение данных из кэша с использованием слушателя.
   * @param key cache key / ключ кэша
   */
  protected static async getItemOrListener(key: string): Promise<ApiCacheItem | undefined> {
    const item = this.getListener
      ? await this.getListener(key)
      : this.getList()[key]

    if (this.isAge(item)) {
      return item
    }

    return undefined
  }

  /**
   * Getting list of cache items.
   *
   * Получение списка элементов кэша.
   * @returns list of cache items / список элементов кэша
   */
  protected static getList(): ApiCacheList {
    if (!this.items) {
      this.items = {}
    }

    return this.items
  }

  /**
   * Saving data to cache using listener.
   *
   * Сохранение данных в кэш с использованием слушателя.
   * @param key cache key / ключ кэша
   * @param value data to be stored / данные для хранения
   */
  protected static async setItemOrListener(key: string, value: ApiCacheItem): Promise<void> {
    const status = this.setListener
      ? await this.setListener(key, value)
      : false

    this.getList()[key] = {
      ...value,
      value: status ? undefined : value.value
    }
  }

  /**
   * Removing data from cache using listener.
   *
   * Удаление данных из кэша с использованием слушателя.
   * @param key cache key / ключ кэша
   */
  protected static async removeItemOrListener(key: string): Promise<void> {
    if (this.removeListener) {
      await this.removeListener(key)
    }

    if (this.isItem(key)) {
      delete this.getList()[key]
    }
  }

  /**
   * Clear old in-memory cache data.
   *
   * Очистить старый кэш в памяти.
   */
  protected static async clearOld(): Promise<typeof ApiCache> {
    if (this.stepAgeClearOld-- > 0) {
      return this
    }

    this.stepAgeClearOld = this.cacheStepAgeClearOld

    if (this.items) {
      for (const key in this.items) {
        const item = this.items[key]

        if (!this.isAge(item)) {
          await this.removeItemOrListener(key)
        }
      }
    }

    return this
  }
}
