import { getCurrentTime } from '../functions/getCurrentTime'
import { isDomRuntime } from '../functions/isDomRuntime'

import { ErrorCenter } from './ErrorCenter'

import type { ApiCacheItem, ApiCacheList, ApiFetch } from '../types/apiTypes'

/**
 * Default cache age in seconds (24 hours)/
 * Значение кэша по умолчанию в секундах (24 часа)
 */
const API_CACHE_DEFAULT_AGE = 24 * 60 * 60

/**
 * Step age for clearing old cache in seconds (1 minute)/
 * Шаг возраста для очистки старого кэша в секундах (1 минута)
 */
const API_CACHE_STEP_AGE_CLEAR_OLD = 16_384

/**
 * Class for caching API responses.
 *
 * Класс для кэширования ответов API.
 */
export class ApiCache {
  /** Cache storage / Кэш хранилища */
  protected static items?: ApiCacheList
  /** Cache storage info / Кэш хранилища информации */
  protected static itemsInfo?: ApiCacheList

  /** Storage mechanism for getting data / механизм хранения для получения данных */
  protected static getListener?: (key: string) => Promise<ApiCacheItem | undefined>

  /** Storage mechanism for setting data / механизм хранения для сохранения данных */
  protected static setListener?: (
    key: string,
    value: ApiCacheItem
  ) => Promise<void>

  /** Storage mechanism for removing data / механизм хранения для удаления данных */
  protected static removeListener?: (key: string) => Promise<void>

  /** Step age for clearing old cache in seconds (1 minute)/ Шаг возраста для очистки старого кэша в секундах (1 минута) */
  protected static stepAgeClearOld: number = API_CACHE_STEP_AGE_CLEAR_OLD

  /**
   * Initializes the storage with listeners.
   *
   * Инициализирует хранилище слушателями.
   * @param getListener Storage mechanism for getting data / механизм хранения для получения данных
   * @param setListener Storage mechanism for setting data / механизм хранения для сохранения данных
   * @param removeListener Storage mechanism for removing data / механизм хранения для удаления данных
   */
  static init(
    getListener: (key: string) => Promise<ApiCacheItem | undefined>,
    setListener: (key: string, value: ApiCacheItem) => Promise<void>,
    removeListener: (key: string) => Promise<void>
  ): void {
    this.getListener = getListener
    this.setListener = setListener
    this.removeListener = removeListener
  }

  /**
   * Resets the cache by clearing all in-memory items and resetting listeners.
   *
   * Сбрасывает кэш, очищая все элементы в памяти и сбрасывая слушатели.
   */
  static reset(): typeof ApiCache {
    this.items = undefined
    this.itemsInfo = undefined

    this.getListener = undefined
    this.setListener = undefined
    this.removeListener = undefined

    this.stepAgeClearOld = API_CACHE_STEP_AGE_CLEAR_OLD

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
  ): Promise<typeof ApiCache> {
    const item: ApiCacheItem<T> = {
      value,
      age,
      cacheAge: getCurrentTime()
    }

    await this.setItemOrListener(key, item)

    return this
  }

  /**
   * Saving data to cache using fetch options.
   *
   * Сохранение данных в кэш с использованием опций fetch.
   * @param fetch fetch options / опции fetch
   * @param value data to be stored / данные для хранения
   */
  static async setByFetch<T>(fetch: ApiFetch, value: T): Promise<typeof ApiCache> {
    if (this.isCache(fetch)) {
      const key = this.generateKey(fetch)
      await this.set(key, value, fetch.cache)
    }

    return this
  }

  /**
   * Removing data from cache.
   *
   * Удаление данных из кэша.
   * @param key cache key / ключ кэша
   */
  static async remove(key: string): Promise<typeof ApiCache> {
    await this.removeItemOrListener(key)
    return this
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

    return (item.age * 1000) + item.cacheAge >= getCurrentTime()
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
   * Checks if the key exists in the cache info.
   *
   * Проверяет, существует ли ключ в информации о кэше.
   * @param key cache key / ключ кэша
   */
  protected static isItemInfo(key: string): boolean {
    return key in this.getListInfo()
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
   * Getting list of cache items info.
   *
   * Получение списка информации об элементах кэша.
   * @returns list of cache items info / список информации об элементах кэша
   */
  protected static getListInfo(): ApiCacheList {
    if (!this.itemsInfo) {
      this.itemsInfo = {}
    }

    return this.itemsInfo
  }

  /**
   * Saving data to cache using listener.
   *
   * Сохранение данных в кэш с использованием слушателя.
   * @param key cache key / ключ кэша
   * @param value data to be stored / данные для хранения
   */
  protected static async setItemOrListener(key: string, value: ApiCacheItem): Promise<typeof ApiCache> {
    if (this.setListener) {
      await this.setListener(key, value)
      this.getListInfo()[key] = {
        value: undefined,
        age: value.age,
        cacheAge: value.cacheAge
      }
    } else {
      this.getList()[key] = value
    }

    return this
  }

  /**
   * Removing data from cache using listener.
   *
   * Удаление данных из кэша с использованием слушателя.
   * @param key cache key / ключ кэша
   */
  protected static async removeItemOrListener(key: string): Promise<typeof ApiCache> {
    if (this.removeListener) {
      await this.removeListener(key)

      if (this.isItemInfo(key)) {
        delete this.getListInfo()[key]
      }
    } else if (this.isItem(key)) {
      delete this.getList()[key]
    }

    return this
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

    const list = [
      this.items,
      this.itemsInfo
    ]

    this.stepAgeClearOld = API_CACHE_STEP_AGE_CLEAR_OLD

    for (const items of list) {
      if (items) {
        for (const key in items) {
          const item = items[key]

          if (!this.isAge(item)) {
            await this.removeItemOrListener(key)
          }
        }
      }
    }

    return this
  }
}
