import { anyToString } from '../functions/anyToString'
import { executeFunction } from '../functions/executeFunction'
import { isDomData } from '../functions/isDomData'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isFilled } from '../functions/isFilled'
import { strSplit } from '../functions/strSplit'
import { transformation } from '../functions/transformation'

import { CookieBlock } from './CookieBlock'
import { ServerStorage } from './ServerStorage'

/**
 * Cookie sameSite attribute / Атрибут sameSite cookie
 */
export type CookieSameSite = 'strict' | 'lax'

/**
 * Cookie options / Параметры cookie
 */
export type CookieOptions = {
  /** Cache age / Время кэширования */
  age?: number
  /** SameSite attribute / Атрибут SameSite */
  sameSite?: CookieSameSite
  /** Path / Путь */
  path?: string
  /** Domain / Домен */
  domain?: string
  /** Secure attribute / Атрибут Secure */
  secure?: boolean
  /** HttpOnly attribute / Атрибут HttpOnly */
  httpOnly?: boolean
  /** Partitioned attribute / Атрибут Partitioned */
  partitioned?: boolean
  /** Additional arguments / Дополнительные аргументы */
  arguments?: string[] | Record<string, string | number | boolean>
}

/** Server storage key / Ключ серверного хранилища */
const SERVER_STORAGE_KEY = '__ui:cookie-storage__'

/**
 * Class for managing cookie storage with support for custom listeners.
 * Useful for consistent cookie handling across different environments (DOM, SSR).
 *
 * Класс для управления хранением cookie с поддержкой пользовательских слушателей.
 * Полезен для консистентной работы с cookie в различных окружениях (DOM, SSR).
 */
export class CookieStorage {
  /** Storage mechanism for getting data / механизм хранения для получения данных */
  protected static getListener?: (key: string) => any | undefined

  /** Storage mechanism for getting raw data / механизм хранения для получения сырых данных */
  protected static getListenerRaw?: () => string

  /** Storage mechanism for setting data / механизм хранения для сохранения данных */
  protected static setListener?: (
    key: string,
    value: any,
    cookie: string,
    options?: CookieOptions
  ) => void

  /**
   * Initializes the storage with listeners.
   *
   * Инициализирует хранилище слушателями.
   * @param getListener Storage mechanism for getting data / механизм хранения для получения данных
   * @param setListener Storage mechanism for setting data / механизм хранения для сохранения данных
   */
  static init(
    getListener?: (key: string) => any | undefined,
    getListenerRaw?: () => string,
    setListener?: (
      key: string,
      value: any,
      cookie: string,
      options?: CookieOptions
    ) => void
  ): void {
    this.getListener = getListener
    this.getListenerRaw = getListenerRaw
    this.setListener = setListener
  }

  /**
   * Resets the storage by clearing all in-memory items and resetting listeners.
   *
   * Сбрасывает хранилище, очищая все элементы в памяти и сбрасывая слушатели.
   */
  static reset(): void {
    this.getListener = undefined
    this.getListenerRaw = undefined
    this.setListener = undefined
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @param name cookie name / имя cookie
   * @param defaultValue default value / значение по умолчанию
   * @returns T | undefined cookie value or default/ значение cookie или значение по умолчанию
   */
  static get<T>(
    name: string,
    defaultValue?: T | (() => T)
  ): T | undefined {
    const value = this.getListener?.(name) ?? this.initItems()[name]

    if (
      value === undefined
      && defaultValue !== undefined
    ) {
      return this.set(name, defaultValue)
    }

    return transformation(value)
  }

  /**
   * Saving data to storage.
   *
   * Сохранение данных в хранилище.
   * @param name cookie name / имя cookie
   * @param value data to be stored / данные для хранения
   * @param options additional parameters / дополнительные параметры
   * @returns stored value / сохраненное значение
   */
  static set<T>(
    name: string,
    value: T | (() => T),
    options?: CookieOptions
  ): T {
    const newValue = executeFunction(value)

    if (CookieBlock.get()) {
      return newValue
    }

    const stringValue = anyToString(newValue, false)

    if (this.setListener) {
      this.setListener(
        name,
        stringValue,
        this.format(name, stringValue, options),
        options
      )
    } else {
      this.initItems()[name] = stringValue === '' ? undefined : newValue

      if (this.hasDom()) {
        document.cookie = this.format(name, stringValue, options)
      }
    }

    return newValue
  }

  /**
   * Removing data from storage.
   *
   * Удаление данных из хранилища.
   * @param name cookie name / имя cookie
   * @returns void
   */
  static remove(name: string): void {
    this.set(name, '', { age: -1 })
  }

  /**
   * Update data from cookies.
   *
   * Обновляет данные из cookies.
   */
  static update(): void {
    if (isDomRuntime()) {
      ServerStorage.remove(SERVER_STORAGE_KEY)
      this.initItems()
    }
  }

  /**
   * Formats the cookie string for storage.
   *
   * Форматирует строку cookie для хранения.
   * @param name cookie name / имя cookie
   * @param value cookie value / значение cookie
   * @param options additional parameters / дополнительные параметры
   */
  protected static format(
    name: string,
    value: string,
    options?: CookieOptions
  ): string {
    return [
      `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
      this.toMaxAge(value, options?.age),
      this.toSameSite(options?.sameSite),
      this.toPath(options?.path),
      this.toDomain(options?.domain),
      this.toSecure(options?.secure),
      this.toHttpOnly(options?.httpOnly),
      this.toPartitioned(options?.partitioned),
      ...this.toArguments(options?.arguments)
    ]
      .filter(Boolean)
      .join('; ')
  }

  /**
   * Check if the current environment is a DOM environment.
   *
   * Проверяет, является ли текущее окружение DOM-окружением.
   * @returns True if the current environment is a DOM environment, false otherwise / Возвращает true, если текущее окружение является DOM-окружением, иначе false
   */
  protected static hasDom(): boolean {
    return isDomRuntime()
      && !isDomData()
  }

  /**
   * Parses the cookie string into a key-value pair object.
   *
   * Разбирает строку cookie в объект пар ключ-значение.
   * @param cookie cookie string / строка cookie
   * @returns Record<string, any> parsed items / разобранные элементы
   */
  protected static parse(cookie: string): Record<string, any> {
    const items: Record<string, any> = {}

    for (const item of cookie.split(';')) {
      const [key, value] = strSplit(item.trim(), '=', 2)

      if (
        key
        && isFilled(value)
      ) {
        items[key] = value
      }
    }

    return items
  }

  /**
   * Initialize storage if not initialized.
   *
   * Инициализирует хранилище, если оно не инициализировано.
   */
  protected static initItems(): Record<string, any> {
    return ServerStorage.get(SERVER_STORAGE_KEY, () => {
      if (this.hasDom()) {
        return this.parse(document.cookie)
      }

      const raw = this.getListenerRaw?.()

      if (isFilled(raw)) {
        return this.parse(raw)
      }

      return {}
    })
  }

  /**
   * Converts the value to a string for the max-age attribute.
   *
   * Преобразует значение в строку для атрибута max-age.
   * @param stringValue cookie value / значение cookie
   * @param age cache age (default: 7 days) / возраст кэша (по умолчанию: 7 дней)
   */
  protected static toMaxAge(
    stringValue: string,
    age?: CookieOptions['age']
  ): string {
    const ageValue = stringValue === ''
      ? -1
      : age ?? (7 * 24 * 60 * 60)

    return `Max-Age=${encodeURIComponent(ageValue)}`
  }

  /**
   * Converts the value to a string for the SameSite attribute.
   *
   * Преобразует значение в строку для атрибута SameSite.
   * @param sameSite SameSite attribute / атрибут SameSite
   */
  protected static toSameSite(
    sameSite?: CookieOptions['sameSite']
  ): string {
    return `SameSite=${encodeURIComponent(sameSite ?? 'Strict')}`
  }

  /**
   * Converts the value to a string for the path attribute.
   *
   * Преобразует значение в строку для атрибута path.
   * @param path Path / путь
   */
  protected static toPath(
    path?: CookieOptions['path']
  ): string {
    return `Path=${encodeURIComponent(path ?? '/')}`
  }

  /**
   * Converts the value to a string for the domain attribute.
   *
   * Преобразует значение в строку для атрибута domain.
   * @param domain Domain / домен
   */
  protected static toDomain(
    domain?: CookieOptions['domain']
  ): string | undefined {
    return domain ? `Domain=${encodeURIComponent(domain)}` : undefined
  }

  /**
   * Converts the value to a string for the secure attribute.
   *
   * Преобразует значение в строку для атрибута secure.
   * @param secure Secure attribute / атрибут secure
   */
  protected static toSecure(
    secure?: CookieOptions['secure']
  ): string | undefined {
    return secure ? 'Secure' : undefined
  }

  /**
   * Converts the value to a string for the HttpOnly attribute.
   *
   * Преобразует значение в строку для атрибута HttpOnly.
   * @param httpOnly HttpOnly attribute / атрибут HttpOnly
   */
  protected static toHttpOnly(
    httpOnly?: CookieOptions['httpOnly']
  ): string | undefined {
    return httpOnly ? 'HttpOnly' : undefined
  }

  /**
   * Converts the value to a string for the partitioned attribute.
   *
   * Преобразует значение в строку для атрибута partitioned.
   * @param partitioned Partitioned attribute / атрибут partitioned
   */
  protected static toPartitioned(
    partitioned?: CookieOptions['partitioned']
  ): string | undefined {
    return partitioned ? 'Partitioned' : undefined
  }

  /**
   * Converts additional arguments to an array of strings.
   *
   * Преобразует дополнительные аргументы в массив строк.
   * @param args additional arguments / дополнительные аргументы
   */
  protected static toArguments(
    args?: CookieOptions['arguments']
  ): string[] {
    if (args === undefined) {
      return []
    }

    if (Array.isArray(args)) {
      return args
    }

    return Object.entries(args)
      .map(([key, value]) => `${key}=${anyToString(value)}`)
  }
}
