import { CacheItem } from './CacheItem'

/**
 * Simple class for caching.
 *
 * Простой класс для кэширования.
 */
export class Cache {
  private cache: Record<string, CacheItem<any>> = {}

  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  get<T>(
    name: string,
    callback: () => T,
    comparison?: any[]
  ): T {
    return this.getCacheItem(name, callback).getCache(comparison ?? [])
  }

  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  async getAsync<T>(
    name: string,
    callback: () => T,
    comparison?: any[]
  ): Promise<T> {
    return await this.getCacheItem(name, callback).getCacheAsync(comparison ?? [])
  }

  /**
   * Returns an instance of the object for working with the cache element.
   *
   * Возвращает экземпляр объекта для работы с элементом кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   */
  private getCacheItem<T>(
    name: string,
    callback: () => T
  ): CacheItem<T> {
    if (!(name in this.cache)) {
      this.cache[name] = new CacheItem(callback)
    }

    return this.cache[name] as CacheItem<T>
  }
}
