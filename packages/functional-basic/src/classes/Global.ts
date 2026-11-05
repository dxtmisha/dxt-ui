import { forOwn } from '../functions/forOwn'
import { getObjectNull } from '../functions/getObjectNull'

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
   * @returns property value or undefined / значение свойства или undefined
   */
  static get<R = unknown>(name: string): R | undefined {
    const item = Global.#getItem()

    return Object.hasOwn(item, name) ? item[name] as R : undefined
  }

  /**
   * Stores the first non-empty set of own, safe properties.
   *
   * Сохраняет первый непустой набор собственных безопасных свойств.
   * @param data global data / глобальные данные
   * @returns void / ничего не возвращает
   */
  static add(data: Record<string, unknown>): void {
    const dataStorage = Global.#getItem()

    if (Object.keys(dataStorage).length > 0) {
      return
    }

    const initialData = getObjectNull()

    forOwn(data, (value, name) => {
      initialData[name] = value
    })

    // A getter may initialize storage while the data is copied. / Геттер может инициализировать хранилище во время копирования данных.
    if (Object.keys(dataStorage).length === 0) {
      Object.assign(dataStorage, initialData)
    }
  }

  /**
   * Returns the global data storage for the current context.
   *
   * Возвращает хранилище глобальных данных текущего контекста.
   * @returns global data storage / хранилище глобальных данных
   */
  static #getItem(): Record<string, unknown> {
    return ServerStorage.get('__ui:global-instance__', getObjectNull)
  }
}
