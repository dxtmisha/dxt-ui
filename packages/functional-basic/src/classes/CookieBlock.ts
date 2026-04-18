import { CookieBlockInstance } from './CookieBlockInstance'
import { ServerStorage } from './ServerStorage'

/**
 * Class for changing cookie access status.
 *
 * Класс для изменения статуса доступа к куки.
 */
export class CookieBlock {
  /**
   * Returns a request-isolated instance of CookieBlockInstance.
   *
   * Возвращает изолированный в рамках запроса экземпляр CookieBlockInstance.
   * @returns CookieBlockInstance instance / экземпляр CookieBlockInstance
   */
  static getItem(): CookieBlockInstance {
    return ServerStorage.get('__ui:cookie-block__', () => new CookieBlockInstance())
  }

  /**
   * Obtaining status.
   *
   * Получение статуса.
   */
  static get(): boolean {
    return this.getItem().get()
  }

  /**
   * Changing status.
   *
   * Изменение статуса.
   * @param value value to be changed/ значение, на которое будет изменен
   */
  static set(value: boolean): void {
    this.getItem().set(value)
  }
}
