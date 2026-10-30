import { executeFunction } from '../functions/executeFunction'

import { type CookieOptions, CookieStorage } from './CookieStorage'
import { ServerStorage } from './ServerStorage'

/** Return type of the Cookie.get method / Тип возвращаемого значения метода Cookie.get */
export type CookieGet<T, D = undefined> = [D] extends [undefined]
  ? (T | undefined)
  : unknown extends T
    ? (D extends () => infer R ? R : D)
    : (T | (D extends () => infer R ? R : D))

/**
 * Returns a list of active Cookie instances for the current request context.
 *
 * Возвращает список активных экземпляров Cookie для контекста текущего запроса.
 * @returns active Cookie instances map / карта активных экземпляров Cookie
 */
const getItems = (): Record<string, Cookie<unknown>> => {
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
export class Cookie<T = unknown> {
  /** Cookie value / Значение cookie */
  private value?: T | string

  /** Cookie options / Параметры cookie */
  private options: CookieOptions = {}

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name cookie name / название cookie
   */
  constructor(private readonly name: string) {
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
  static getInstance<T = unknown>(name: string): Cookie<T> {
    return (getItems()[name] ?? new Cookie<T>(name)) as Cookie<T>
  }

  /**
   * Get data or update if none.
   *
   * Получает данные или обновляет, если их нет.
   * @param defaultValue value or function to change data / значение или функция для изменения данных
   * @param options additional parameters / дополнительные параметры
   * @returns cookie value / значение cookie
   */
  get<D extends T | string | (() => (T | string)) | undefined = undefined>(
    defaultValue?: D,
    options?: CookieOptions
  ): CookieGet<T, D> {
    if (
      this.value === undefined
      && defaultValue !== undefined
    ) {
      this.set(defaultValue, options)
    }

    return this.value as CookieGet<T, D>
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
