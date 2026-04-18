import { DataStorage } from './DataStorage'

/** Storage name for cookie block / Имя хранилища для блокировки cookie */
const STORAGE_NAME_BLOCK = '__ui:cookie-block__'

/**
 * Class for changing cookie access status.
 *
 * Класс для изменения статуса доступа к куки.
 */
export class CookieBlockInstance {
  private storage = new DataStorage<boolean>(STORAGE_NAME_BLOCK)

  /**
   * Obtaining status.
   *
   * Получение статуса.
   */
  get(): boolean {
    return this.storage.get() ?? false
  }

  /**
   * Changing status.
   *
   * Изменение статуса.
   * @param value value to be changed/ значение, на которое будет изменен
   */
  set(value: boolean): void {
    this.storage.set(value)
  }
}
