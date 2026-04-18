import { CacheItem } from './CacheItem'

/**
 * Simple in-memory cache class that stores computed values by key.
 *
 * Простой класс для in-memory кэширования, который хранит вычисленные значения по ключу.
 * @deprecated This class is obsolete and should not be used / Этот класс устарел и не рекомендуется к использованию
 */
export class Cache {
  private cache: Record<string, CacheItem<any>> = {}

  /**
   * Returns a cached value for the given name. If not cached, executes the callback and stores the result.
   *
   * Возвращает кэшированное значение для указанного имени. Если нет кэша, выполняет callback и сохраняет результат.
   * @param name - Unique cache key / Уникальный ключ кэша
   * @param callback - Function to compute the value if not cached / Функция для вычисления значения, если его нет в кэше
   * @param comparison - Optional array for cache invalidation. If provided, the cache is invalidated when any element changes / Опциональный массив для инвалидации кэша. Если предоставлен, кэш сбрасывается при изменении любого элемента
   * @returns The cached or newly computed value / Кэшированное или новое вычисленное значение
   */
  get<T>(
    name: string,
    callback: () => T,
    comparison?: any[]
  ): T {
    return this.getCacheItem(name, callback).getCache(comparison ?? [])
  }

  /**
   * Asynchronously returns a cached value for the given name. If not cached, executes the callback and stores the result.
   *
   * Асинхронно возвращает кэшированное значение для указанного имени. Если нет кэша, выполняет callback и сохраняет результат.
   * @param name - Unique cache key / Уникальный ключ кэша
   * @param callback - Async function to compute the value if not cached / Асинхронная функция для вычисления значения, если его нет в кэше
   * @param comparison - Optional array for cache invalidation. If provided, the cache is invalidated when any element changes / Опциональный массив для инвалидации кэша. Если предоставлен, кэш сбрасывается при изменении любого элемента
   * @returns Promise resolving to the cached or newly computed value / Promise, разрешающийся в кэшированное или новое вычисленное значение
   */
  async getAsync<T>(
    name: string,
    callback: () => T,
    comparison?: any[]
  ): Promise<T> {
    return await this.getCacheItem(name, callback).getCacheAsync(comparison ?? [])
  }

  /**
   * Gets or creates a CacheItem instance for the given name.
   *
   * Получает или создает экземпляр CacheItem для указанного имени.
   * @param name - Unique cache key / Уникальный ключ кэша
   * @param callback - Function to compute the value / Функция для вычисления значения
   * @returns CacheItem instance for the cache key / Экземпляр CacheItem для ключа кэша
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
