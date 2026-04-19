import { HashInstance } from './HashInstance'
import { ServerStorage } from './ServerStorage'

/**
 * Static class for working with data stored in the URL hash.
 * Provides a centralized interface delegating to HashInstance.
 *
 * Статический класс для работы с данными, сохранёнными в хеше URL.
 * Предоставляет централизованный интерфейс, делегируя вызовы HashInstance.
 */
export class Hash {
  /**
   * Returns a request-isolated instance of HashInstance.
   *
   * Возвращает изолированный в рамках запроса экземпляр HashInstance.
   * @returns HashInstance instance / экземпляр HashInstance
   */
  static getItem(): HashInstance {
    return ServerStorage.get('__ui:hash-instance__', () => new HashInstance())
  }

  /**
   * Get data from hash.
   *
   * Получение данных из хэша.
   * @param name variable name / название переменной
   * @param defaultValue value or function to change data / значение или функция для изменения данных
   * @returns stored value / сохранённое значение
   */
  static get<T>(
    name: string,
    defaultValue?: T | (() => T)
  ): T {
    return this.getItem().get(name, defaultValue)
  }

  /**
   * Change data in hash.
   *
   * Изменение данных в хэше.
   * @param name variable name / название переменной
   * @param callback value or function to change data / значение или функция для изменения данных
   */
  static set<T>(
    name: string,
    callback: T | (() => T)
  ): void {
    this.getItem().set(name, callback)
  }

  /**
   * Adding an event when data is changed.
   *
   * Добавление события при изменении данных.
   * @param name variable name / название переменной
   * @param callback the function is called when the data is changed / функция вызывается при изменении данных
   */
  static addWatch<T>(
    name: string,
    callback: (value: T) => void
  ): void {
    this.getItem().addWatch(name, callback)
  }

  /**
   * Removing an event when data is changed.
   *
   * Удаление события при изменении данных.
   * @param name variable name / название переменной
   * @param callback the function is called when the data is changed / функция вызывается при изменении данных
   */
  static removeWatch<T>(
    name: string,
    callback: (value: T) => void
  ): void {
    this.getItem().removeWatch(name, callback)
  }

  /**
   * Update hash variable from URL string.
   *
   * Обновление переменной хэша из строки URL.
   * @returns void
   */
  static reload(): void {
    this.getItem().reload()
  }
}
