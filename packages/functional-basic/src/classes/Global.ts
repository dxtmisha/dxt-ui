import { ServerStorage } from './ServerStorage'

/**
 * Static utility class for storing and retrieving application-wide global data.
 *
 * Статический служебный класс для хранения и получения глобальных данных приложения.
 */
export class Global {
  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name / название свойства
   */
  static get<R = unknown>(name: string): R {
    return this.getItem()?.[name] as R
  }

  /**
   * Returns the instance of the class.
   *
   * Возвращает инстанс класса.
   * @returns global data storage / хранилище глобальных данных
   */
  static getItem(): Record<string, unknown> {
    return ServerStorage.get('__ui:global-instance__', () => ({} as Record<string, unknown>))
  }

  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data / глобальные данные
   * @returns void / ничего не возвращает
   */
  static add(data: Record<string, unknown>): void {
    const dataStorage = this.getItem()

    if (Object.keys(dataStorage).length > 0) {
      return
    }

    Object.assign(dataStorage, data)
  }
}
