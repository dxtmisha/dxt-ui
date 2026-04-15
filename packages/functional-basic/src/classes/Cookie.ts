import { executeFunction } from '../functions/executeFunction'

import { type CookieOptions, CookieStorage } from './CookieStorage'
import { ServerStorage } from './ServerStorage'

/**
 * Returns a list of active Cookie instances for the current request context.
 *
 * Возвращает список активных экземпляров Cookie для контекста текущего запроса.
 */
const getItems = () => {
  return ServerStorage.get<Record<string, Cookie<unknown>>>(
    '__dxt_cookie_items__',
    () => ({})
  )
}

/**
 * Class for working with cookies.
 *
 * Класс для управления Cookie.
 */
export class Cookie<T> {
  /**
   * Returns an instance of the class according to the specified cookie name.
   *
   * Возвращает экземпляр класса по указанному имени cookie.
   * @param name cookie name/ название cookie
   */
  static getInstance<T>(name: string) {
    const items = getItems()

    if (name in items) {
      return items[name] as Cookie<T>
    }

    return new Cookie<T>(name)
  }

  /** Cookie value / Значение cookie */
  value?: T | string
  /** Cookie options / Параметры cookie */
  private options: CookieOptions = {}

  /**
   * Constructor
   * @param name cookie name/ название cookie
   */
  constructor(private name: string) {
    const items = getItems()

    if (name in items) {
      return items[name] as Cookie<T>
    }

    this.value = CookieStorage.get<T>(this.name)
    items[name] = this
  }

  /**
   * Get data or update if none.
   *
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data/ значение или функция для изменения данных
   * @param options additional parameters/ дополнительные параметры
   */
  get(
    defaultValue?: T | string | (() => (T | string)),
    options?: CookieOptions
  ) {
    if (
      this.value === undefined
      && defaultValue
    ) {
      this.set(defaultValue, options)
    }

    return this.value
  }

  /**
   * Updates cookie data.
   *
   * Обновляет данные cookie.
   * @param value value or function to change data/ значение или функция для изменения данных
   * @param options additional parameters/ дополнительные параметры
   */
  set(
    value?: T | string | (() => (T | string)),
    options?: CookieOptions
  ): void {
    this.value = executeFunction(value)

    Object.assign(this.options, options)
    this.update()
  }

  /**
   * Delete cookie data.
   *
   * Удаление данных из cookie.
   */
  remove() {
    this.set('')
  }

  /**
   * Update cookie data.
   *
   * Обновление данных cookie.
   */
  private update(): void {
    CookieStorage.set(
      this.name,
      this.value,
      this.options
    )
  }
}
