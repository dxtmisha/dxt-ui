import { Cache } from './Cache'
import { ServerStorage } from './ServerStorage'

/**
 * Static cache class that uses ServerStorage for persistent caching across the application.
 *
 * Статический класс кэша, использующий ServerStorage для постоянного кэширования в приложении.
 * @deprecated This class is obsolete and should not be used / Этот класс устарел и не рекомендуется к использованию
 */
export class CacheStatic {
  /**
   * Retrieves the Cache instance from ServerStorage.
   *
   * Получает экземпляр Cache из ServerStorage.
   * @returns Cache instance for static caching / Экземпляр Cache для статического кэширования
   */
  protected static getItem(): Cache {
    return ServerStorage.get('__ui:cache-static__', () => new Cache())
  }

  /**
   * Returns a cached value for the given name. If not cached, executes the callback and stores the result.
   *
   * Возвращает кэшированное значение для указанного имени. Если нет кэша, выполняет callback и сохраняет результат.
   * @param name - Unique cache key / Уникальный ключ кэша
   * @param callback - Function to compute the value if not cached / Функция для вычисления значения, если его нет в кэше
   * @param comparison - Optional array for cache invalidation / Опциональный массив для инвалидации кэша
   * @returns The cached or newly computed value / Кэшированное или новое вычисленное значение
   */
  static get<T>(
    name: string,
    callback: () => T,
    comparison?: any[]
  ): T {
    return this.getItem().get(name, callback, comparison)
  }

  /**
   * Asynchronously returns a cached value for the given name. If not cached, executes the callback and stores the result.
   *
   * Асинхронно возвращает кэшированное значение для указанного имени. Если нет кэша, выполняет callback и сохраняет результат.
   * @param name - Unique cache key / Уникальный ключ кэша
   * @param callback - Async function to compute the value if not cached / Асинхронная функция для вычисления значения
   * @param comparison - Optional array for cache invalidation / Опциональный массив для инвалидации кэша
   * @returns Promise resolving to the cached or newly computed value / Promise, разрешающийся в кэшированное или новое вычисленное значение
   */
  static async getAsync<T>(
    name: string,
    callback: () => T,
    comparison?: any[]
  ): Promise<T> {
    return await this.getItem().getAsync(name, callback, comparison)
  }
}
