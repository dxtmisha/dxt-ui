import { Cache } from './Cache'
import { ServerStorage } from './ServerStorage'

/**
 * Class for working with fast cache during code execution.
 *
 * Класс для работы с быстрым кэшем во время выполнения кода.
 */
export class CacheStatic {
  /**
   * Returns the instance of the class.
   *
   * Возвращает инстанс класса.
   */
  protected static getItem(): Cache {
    return ServerStorage.get('__dxt_cache_static__', () => new Cache())
  }

  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache.
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша.
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  static get<T>(
    name: string,
    callback: () => T,
    comparison?: any[]
  ): T {
    return this.getItem().get(name, callback, comparison)
  }

  /**
   * Getting data for the cache, and if there is no cache, it performs a function to save the cache (Async).
   *
   * Получение данных для кэша, и если нет кэша, выполняет функцию для сохранения кэша (Async).
   * @param name cache name/ название кэша
   * @param callback function for the cache/ функция для кэша
   * @param comparison additional data for comparison/ дополнительные данные для сравнения
   */
  static async getAsync<T>(
    name: string,
    callback: () => T,
    comparison?: any[]
  ): Promise<T> {
    return await this.getItem().getAsync(name, callback, comparison)
  }
}
