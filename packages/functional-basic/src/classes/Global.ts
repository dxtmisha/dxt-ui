import { copyObjectLite } from '../functions/copyObjectLite'

let global: Record<string, any>

/**
 * Class for obtaining global data.
 *
 * Класс для получения глобальных данных.
 */
export class Global {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get<R = any>(name: string): R {
    return global && global?.[name]
  }

  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(data: Record<string, any>) {
    if (global !== undefined) {
      return
    }

    global = copyObjectLite(data)
  }
}
