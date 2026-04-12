import { getCurrentTime } from '../functions/getCurrentTime'

import type { ApiCacheItem, ApiCacheList, ApiFetch } from '../types/apiTypes'

/**
 * Class for caching API responses.
 *
 * Класс для кэширования ответов API.
 */
export class ApiCache {
  /** Cache storage / Кэш хранилища */
  protected items?: ApiCacheList
  /** Cache storage info / Кэш хранилища информации */
  protected itemsInfo?: ApiCacheList

  /** Storage mechanism for getting data / механизм хранения для получения данных */
  protected getListener?: (key: string) => any

  /** Storage mechanism for setting data / механизм хранения для сохранения данных */
  protected setListener?: (
    key: string,
    value: ApiCacheItem
  ) => void

  /** Storage mechanism for removing data / механизм хранения для удаления данных */
  protected removeListener?: (key: string) => void

  /**
   * Initializes the storage with listeners.
   *
   * Инициализирует хранилище слушателями.
   * @param getListener Storage mechanism for getting data / механизм хранения для получения данных
   * @param setListener Storage mechanism for setting data / механизм хранения для сохранения данных
   * @param removeListener Storage mechanism for removing data / механизм хранения для удаления данных
   */
  init(
    getListener?: (key: string) => any,
    setListener?: (key: string, value: any) => void,
    removeListener?: (key: string) => void
  ): this {
    this.getListener = getListener
    this.setListener = setListener
    this.removeListener = removeListener

    return this
  }

  /**
   * Getting data from cache.
   *
   * Получение данных из кэша.
   * @param key cache key / ключ кэша
   */
  get<T>(key: string): T | undefined {
    const item: ApiCacheItem<T> | undefined = this.getItemOrListener(key)

    return item?.value
  }

  getByFetch<T>(fetch: ApiFetch): T | undefined {
    const key = this.generateKey(fetch)
    return this.get<T>(key)
  }

  /**
   * Saving data to cache.
   *
   * Сохранение данных в кэш.
   * @param key cache key / ключ кэша
   * @param value data to be stored / данные для хранения
   * @param age cache age / возраст кэша
   */
  set<T>(
    key: string,
    value: T,
    age?: number
  ): this {
    const item: ApiCacheItem<T> = {
      value,
      age,
      cacheAge: getCurrentTime()
    }

    this.setItemOrListener(key, item)

    return this
  }

  /**
   * Removing data from cache.
   *
   * Удаление данных из кэша.
   * @param key cache key / ключ кэша
   */
  remove(key: string): this {
    this.removeItemOrListener(key)
    return this
  }

  /**
   * Checks for storage time limit.
   *
   * Проверяет на лимит времени хранения.
   * @param item cache item / элемент кэша
   * @param cacheAge time in seconds / время в секундах
   */
  protected isCache(item: ApiCacheItem): boolean {
    if (!item) {
      return false
    }

    if (!item.age) {
      return true
    }

    return item.age + (item.cacheAge * 1000) >= getCurrentTime()
  }

  /**
   * Checks if the key exists in the cache.
   *
   * Проверяет, существует ли ключ в кэше.
   * @param key cache key / ключ кэша
   */
  protected isItem(key: string): boolean {
    return key in this.getList()
  }

  /**
   * Generate cache key from fetch options.
   *
   * Генерация ключа кэша из опций fetch.
   * @param fetch fetch options / опции fetch
   */
  protected generateKey(fetch: ApiFetch): string {
    return JSON.stringify({
      api: fetch.api,
      auth: fetch.auth,
      globalEnd: fetch.globalEnd,
      globalPreparation: fetch.globalPreparation,
      init: fetch.init,
      method: fetch.method,
      path: fetch.path,
      pathFull: fetch.pathFull,
      request: fetch.request,
      toData: fetch.toData
    })
  }

  /**
   * Getting data from cache using listener.
   *
   * Получение данных из кэша с использованием слушателя.
   * @param key cache key / ключ кэша
   */
  protected getItemOrListener(key: string): ApiCacheItem | undefined {
    if (this.getListener) {
      return this.getListener(key)
    }

    const item = this.getList()[key]

    if (this.isCache(item)) {
      return item
    }

    return undefined
  }

  protected getList(): ApiCacheList {
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
  protected setItemOrListener(key: string, value: ApiCacheItem): this {
    if (this.setListener) {
      this.setListener(key, value)
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
  protected removeItemOrListener(key: string): this {
    if (this.removeListener) {
      this.removeListener(key)
    } else if (this.isItem(key)) {
      delete this.getList()[key]
    }

    return this
  }

  /**
   * Clear in-memory cache data.
   *
   * Очистить кэш в памяти.
   */
  protected clear(): this {
    this.items = {}
    return this
  }
}
