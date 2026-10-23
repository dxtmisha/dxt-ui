import { executeFunction } from '../functions/executeFunction'

import { type CookieOptions, CookieStorage } from './CookieStorage'
import { ServerStorage } from './ServerStorage'

/**
 * Returns a list of active Cookie instances for the current request context.
 *
 * Возвращает список активных экземпляров Cookie для контекста текущего запроса.
 * @returns active Cookie instances map / карта активных экземпляров Cookie
 */
const getItems = () => {
  return ServerStorage.get<Record<string, Cookie<unknown>>>(
    '__ui:cookie-items__',
    () => ({})
  )
}

/**
 * Class for working with cookies.
 *
 * Класс для управления Cookie.
 */
export class Cookie<T> {
  /** Cookie value / Значение cookie */
  private value?: T | string

  /** Cookie options / Параметры cookie */
  private options: CookieOptions = {}

  /**
   * Constructor
   * @param name cookie name / название cookie
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
   * Returns an instance of the class according to the specified cookie name.
   *
   * Возвращает экземпляр класса по указанному имени cookie.
   * @param name cookie name / название cookie
   * @returns Cookie instance / экземпляр Cookie
   */
  static getInstance<T>(name: string): Cookie<T> {
    return (getItems()?.[name] ?? new Cookie<T>(name)) as Cookie<T>
  }

  /**
   * Get data or update if none.
   *
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data / значение или функция для изменения данных
   * @param options additional parameters / дополнительные параметры
   * @returns cookie value / значение cookie
   */
  get(
    defaultValue?: T | string | (() => (T | string)),
    options?: CookieOptions
  ): T | string | undefined {
    if (
      this.value === undefined
      && defaultValue !== undefined
    ) {
      this.set(defaultValue, options)
    }

    return this.value
  }

  /**
   * Updates cookie data.
   *
   * Обновляет данные cookie.
   * @param value value or function to change data / значение или функция для изменения данных
   * @param options additional parameters / дополнительные параметры
   * @returns void / ничего не возвращает
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
   * @returns void / ничего не возвращает
   */
  remove(): void {
    this.set(undefined)
  }

  /**
   * Update cookie data.
   *
   * Обновление данных cookie.
   * @returns void / ничего не возвращает
   */
  private update(): void {
    CookieStorage.set(
      this.name,
      this.value,
      this.options
    )
  }
}
