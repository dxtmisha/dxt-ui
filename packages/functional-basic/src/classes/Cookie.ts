import { executeFunction } from '../functions/executeFunction'
import { isDomData } from '../functions/isDomData'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isFilled } from '../functions/isFilled'
import { transformation } from '../functions/transformation'

import { CookieBlock } from './CookieBlock'
import { ServerStorage } from './ServerStorage'

type CookieSameSite = 'strict' | 'lax'

export type CookieOptions = {
  age?: number
  sameSite?: CookieSameSite
  arguments?: string[]
}

const cookie: Record<string, any> = {}

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
  value?: T | string
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

    this.value = cookie?.[name]
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
   * Returns cache time.
   *
   * Возвращает время кэширования.
   */
  private getAge(): number {
    return this.options?.age ?? (7 * 24 * 60 * 60)
  }

  /**
   * Update cookie data.
   *
   * Обновление данных cookie.
   */
  private update(): void {
    if (
      isDomRuntime()
      && !isDomData()
      && !CookieBlock.get()
    ) {
      const value = String(this.value ?? '')

      document.cookie = [
        `${encodeURIComponent(this.name)}=${encodeURIComponent(value)}`,
        `max-age=${value === '' ? '-1' : this.getAge()}`,
        `SameSite=${this.options?.sameSite ?? 'strict'}`,
        ...(this.options?.arguments ?? [])
      ].join('; ')
    }
  }

  /**
   * Update data from cookies.
   *
   * Обновляет данные из cookies.
   */
  static updateData() {
    for (const item of document.cookie.split(';')) {
      const [key, value] = item.trim().split('=')

      if (key && isFilled(value)) {
        cookie[key] = transformation(value)
      }
    }
  }

  static {
    if (
      isDomRuntime()
      && !isDomData()
    ) {
      this.updateData()
    }
  }
}
