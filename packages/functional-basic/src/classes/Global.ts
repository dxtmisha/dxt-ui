import { ServerStorage } from './ServerStorage'

/**
 * Static utility class for storing and retrieving application-wide global data.
 *
 * Статический служебный класс для хранения и получения глобальных данных приложения.
 */
export class Global {
  /**
   * Returns the instance of the class.
   *
   * Возвращает инстанс класса.
   */
  static getItem() {
    return ServerStorage.get('__ui:global-instance__', () => ({} as Record<string, any>))
  }

  /**
   * Returns the value by its name.
   *
   * Возвращает значение по его имени.
   * @param name property name/ название свойства
   */
  static get<R = any>(name: string): R {
    return this.getItem()?.[name]
  }

  /**
   * Adds data, this method works only once.
   *
   * Добавляет данные, этот метод работает только 1 раз.
   * @param data global data/ глобальные данные
   */
  static add(data: Record<string, any>) {
    const dataStorage = this.getItem()

    if (Object.keys(dataStorage).length > 0) {
      return
    }

    Object.assign(dataStorage, data)
  }
}
