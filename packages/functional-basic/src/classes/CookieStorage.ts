import { anyToString } from '../functions/anyToString'
import { executeFunction } from '../functions/executeFunction'
import { isArray } from '../functions/isArray'
import { isDomData } from '../functions/isDomData'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isFilled } from '../functions/isFilled'
import { strSplit } from '../functions/strSplit'
import { transformation } from '../functions/transformation'

import { CookieBlock } from './CookieBlock'
import { ServerStorage } from './ServerStorage'

/** Cookie sameSite attribute / Атрибут sameSite cookie */
export type CookieSameSite = 'strict' | 'lax' | 'none'

/** Return type of the CookieStorage.get method / Тип возвращаемого значения метода CookieStorage.get */
export type CookieStorageGet<T, D = undefined> = [D] extends [undefined]
  ? (T | undefined)
  : unknown extends T
    ? (D extends () => infer R ? R : D)
    : T

/** Cookie options / Параметры cookie */
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
  arguments?: string[] | Record<string, unknown>
}

/** Server storage key / Ключ серверного хранилища */
const SERVER_STORAGE_KEY = '__ui:cookie-storage__'

/** Default cookie max-age in seconds (7 days) / Время жизни cookie по умолчанию в секундах (7 дней) */
const DEFAULT_MAX_AGE = 7 * 24 * 60 * 60

/** Regular expression for sanitizing cookie control characters / Регулярное выражение для очистки управляющих символов cookie */
const COOKIE_SANITIZE_REGEXP = /[;\r\n]/g

/**
 * Class for managing cookie storage with support for custom listeners.
 * Useful for consistent cookie handling across different environments (DOM, SSR).
 *
 * Класс для управления хранением cookie с поддержкой пользовательских слушателей.
 * Полезен для консистентной работы с cookie в различных окружениях (DOM, SSR).
 */
export class CookieStorage {
  /** Storage mechanism for getting data / Механизм хранения для получения данных */
  protected static getListener?: (key: string) => unknown

  /** Storage mechanism for getting raw data / Механизм хранения для получения сырых данных */
  protected static getListenerRaw?: () => string

  /** Storage mechanism for setting data / Механизм хранения для сохранения данных */
  protected static setListener?: (
    key: string,
    value: string,
    cookie: string,
    options?: CookieOptions
  ) => void

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @param name cookie name / имя cookie
   * @param defaultValue default value / значение по умолчанию
   * @param options additional parameters / дополнительные параметры
   * @returns cookie value or default / значение cookie или значение по умолчанию
   */
  static get<T = unknown, D extends T | (() => T) | undefined = undefined>(
    name: string,
    defaultValue?: D,
    options?: CookieOptions
  ): CookieStorageGet<T, D> {
    const value = this.getListener?.(name) ?? this.initItems()[name]

    if (
      value === undefined
      && defaultValue !== undefined
    ) {
      return this.setItem(
        name,
        executeFunction(defaultValue),
        options,
        false
      ) as CookieStorageGet<T, D>
    }

    return transformation(value) as CookieStorageGet<T, D>
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
  static set<T = unknown>(
    name: string,
    value: T | (() => T),
    options?: CookieOptions
  ): T {
    return this.setItem(name, executeFunction(value), options)
  }

  /**
   * Removing data from storage.
   *
   * Удаление данных из хранилища.
   * @param name cookie name / имя cookie
   * @param options additional parameters / дополнительные параметры
   * @returns void / ничего не возвращает
   */
  static remove(name: string, options?: CookieOptions): void {
    this.set(name, '', { ...options, age: -1 })
  }

  /**
   * Update data from cookies.
   *
   * Обновляет данные из cookies.
   * @returns void / ничего не возвращает
   */
  static update(): void {
    if (this.hasDom()) {
      ServerStorage.remove(SERVER_STORAGE_KEY)
      this.initItems()
    }
  }

  /**
   * Resets the storage by clearing all in-memory items and resetting listeners.
   *
   * Сбрасывает хранилище, очищая все элементы в памяти и сбрасывая слушатели.
   * @returns void / ничего не возвращает
   */
  static reset(): void {
    this.getListener = undefined
    this.getListenerRaw = undefined
    this.setListener = undefined
    ServerStorage.remove(SERVER_STORAGE_KEY)
  }

  /**
   * Initializes the storage with optional listeners and hooks.
   *
   * Features when omitting parameters:
   * - `getListener`: If omitted (`undefined`), reads directly from internal parsed cookie items (`initItems()`). If provided, takes precedence over internal cache.
   * - `getListenerRaw`: If omitted in a non-DOM/SSR environment (`!isDomRuntime()`), the initial cookie dictionary starts empty (`Object.create(null)`). In browser/DOM runtime, `document.cookie` is used instead. If provided in SSR, parses the returned raw cookie string.
   * - `setListener`: If omitted in the browser/DOM runtime, changes are written directly to `document.cookie`. In a non-DOM/SSR environment without `setListener`, mutations are stored solely in memory for the duration of the current request without external persistence.
   *
   * Инициализирует хранилище опциональными слушателями и хуками.
   *
   * Особенности работы при неполной передаче параметров:
   * - `getListener`: Если не передан (`undefined`), чтение происходит напрямую из внутреннего кэша разобранных cookie (`initItems()`). Если передан, имеет приоритет над внутренним кэшем.
   * - `getListenerRaw`: Если не передан в non-DOM/SSR окружении (`!isDomRuntime()`), начальное хранилище cookie создаётся пустым (`Object.create(null)`). В браузере (DOM) вместо него используется `document.cookie`. Если передан в SSR, разбирает возвращённую сырую строку cookie.
   * - `setListener`: Если не передан в браузере (DOM), запись выполняется напрямую в `document.cookie`. В non-DOM/SSR окружении без `setListener` изменения сохраняются исключительно в оперативной памяти в рамках текущего запроса без внешней фиксации.
   * @param getListener storage mechanism for getting data / механизм хранения для получения данных
   * @param getListenerRaw storage mechanism for getting raw cookie string / механизм хранения для получения сырой строки cookie
   * @param setListener storage mechanism for setting data / механизм хранения для сохранения данных
   * @returns void / ничего не возвращает
   */
  static init(
    getListener?: (key: string) => unknown,
    getListenerRaw?: () => string,
    setListener?: (
      key: string,
      value: string,
      cookie: string,
      options?: CookieOptions
    ) => void
  ): void {
    this.getListener = getListener
    this.getListenerRaw = getListenerRaw
    this.setListener = setListener
  }

  /**
   * Check if the current environment is a DOM environment.
   *
   * Проверяет, является ли текущее окружение DOM-окружением.
   * @returns true if the current environment is a DOM environment, false otherwise / true, если текущее окружение является DOM-окружением, иначе false
   */
  protected static hasDom(): boolean {
    return isDomRuntime()
      && !isDomData()
  }

  /**
   * Sets an item in storage and notifies listeners or DOM.
   *
   * Устанавливает элемент в хранилище и уведомляет слушателей или DOM.
   * @param name cookie name / имя cookie
   * @param value data to be stored / данные для хранения
   * @param options additional parameters / дополнительные параметры
   * @param isWriteEmpty whether to write and update storage if value is empty / записывать ли и обновлять хранилище, если значение пустое
   * @returns stored value / сохраненное значение
   */
  protected static setItem<T = unknown>(
    name: string,
    value: T,
    options?: CookieOptions,
    isWriteEmpty: boolean = true
  ): T {
    if (CookieBlock.get()) {
      return value
    }

    const stringValue = anyToString(value, {
      isArrayString: false,
      isBooleanString: true
    })

    if (!isWriteEmpty && stringValue === '') {
      return value
    }

    this.initItems()[name] = stringValue === '' ? undefined : value

    if (this.setListener) {
      this.setListener(
        name,
        stringValue,
        this.format(name, stringValue, options),
        options
      )
    } else if (this.hasDom()) {
      try {
        document.cookie = this.format(name, stringValue, options)
      } catch {
        // Ignored if document.cookie is blocked in strict iframe sandbox
      }
    }

    return value
  }

  /**
   * Safely decodes a URI-encoded cookie component.
   *
   * Безопасно декодирует URI-кодированный компонент cookie.
   * @param value string to decode / строка для декодирования
   * @returns decoded string or original value on error / декодированная строка или исходное значение при ошибке
   */
  protected static decode(value: string): string {
    try {
      return decodeURIComponent(value)
    } catch {
      return value
    }
  }

  /**
   * Formats the cookie string for storage.
   *
   * Форматирует строку cookie для хранения.
   * @param name cookie name / имя cookie
   * @param value cookie value / значение cookie
   * @param options additional parameters / дополнительные параметры
   * @returns formatted cookie string / отформатированная строка cookie
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
      this.toSecure(
        options?.secure,
        options?.sameSite,
        options?.partitioned
      ),
      this.toHttpOnly(options?.httpOnly),
      this.toPartitioned(options?.partitioned),
      ...this.toArguments(options?.arguments)
    ]
      .filter(Boolean)
      .join('; ')
  }

  /**
   * Initialize storage if not initialized.
   *
   * Инициализирует хранилище, если оно не инициализировано.
   * @returns record of cookie values / запись значений cookie
   */
  protected static initItems(): Record<string, unknown> {
    return ServerStorage.get(SERVER_STORAGE_KEY, () => {
      if (this.hasDom()) {
        try {
          return this.parse(document.cookie)
        } catch {
          return Object.create(null)
        }
      }

      const rawCookie = this.getListenerRaw?.()

      if (isFilled(rawCookie)) {
        return this.parse(rawCookie)
      }

      return Object.create(null)
    })
  }

  /**
   * Parses the cookie string into a key-value pair object.
   *
   * Разбирает строку cookie в объект пар ключ-значение.
   * @param cookie cookie string / строка cookie
   * @returns parsed items / разобранные элементы
   */
  protected static parse(cookie: string): Record<string, unknown> {
    const items: Record<string, unknown> = Object.create(null)

    if (!isFilled(cookie)) {
      return items
    }

    const segments = strSplit(cookie, ';')
    const length = segments.length

    for (let index = 0; index < length; index++) {
      const item = segments[index]
      const [key, value] = strSplit(item.trim(), '=', 2)

      if (
        key
        && value
      ) {
        items[this.decode(key)] = this.decode(value)
      }
    }

    return items
  }

  /**
   * Converts additional arguments to an array of strings.
   *
   * Преобразует дополнительные аргументы в массив строк.
   * @param argumentList additional arguments / дополнительные аргументы
   * @returns array of formatted arguments / массив отформатированных аргументов
   */
  protected static toArguments(
    argumentList?: CookieOptions['arguments']
  ): string[] {
    if (argumentList === undefined) {
      return []
    }

    if (isArray(argumentList)) {
      return argumentList.map(item => item.replace(COOKIE_SANITIZE_REGEXP, ''))
    }

    return Object.entries(argumentList)
      .map(([key, value]) => `${key}=${anyToString(value)}`.replace(COOKIE_SANITIZE_REGEXP, ''))
  }

  /**
   * Converts the value to a string for the domain attribute.
   *
   * Преобразует значение в строку для атрибута domain.
   * @param domain domain / домен
   * @returns formatted domain string or undefined / отформатированная строка domain или undefined
   */
  protected static toDomain(
    domain?: CookieOptions['domain']
  ): string | undefined {
    const sanitizedDomain = domain?.replace(COOKIE_SANITIZE_REGEXP, '')

    return sanitizedDomain ? `Domain=${encodeURIComponent(sanitizedDomain)}` : undefined
  }

  /**
   * Converts the value to a string for the HttpOnly attribute.
   *
   * Преобразует значение в строку для атрибута HttpOnly.
   * @param httpOnly HttpOnly attribute / атрибут HttpOnly
   * @returns formatted HttpOnly string or undefined / отформатированная строка HttpOnly или undefined
   */
  protected static toHttpOnly(
    httpOnly?: CookieOptions['httpOnly']
  ): string | undefined {
    return httpOnly ? 'HttpOnly' : undefined
  }

  /**
   * Converts the value to a string for the max-age attribute.
   *
   * Преобразует значение в строку для атрибута max-age.
   * @param stringValue cookie value / значение cookie
   * @param age cache age (default: 7 days) / возраст кэша (по умолчанию: 7 дней)
   * @returns formatted Max-Age string / отформатированная строка Max-Age
   */
  protected static toMaxAge(
    stringValue: string,
    age?: CookieOptions['age']
  ): string {
    const ageValue = stringValue === ''
      ? -1
      : age ?? DEFAULT_MAX_AGE

    return `Max-Age=${encodeURIComponent(ageValue)}`
  }

  /**
   * Converts the value to a string for the partitioned attribute.
   *
   * Преобразует значение в строку для атрибута partitioned.
   * @param partitioned partitioned attribute / атрибут partitioned
   * @returns formatted Partitioned string or undefined / отформатированная строка Partitioned или undefined
   */
  protected static toPartitioned(
    partitioned?: CookieOptions['partitioned']
  ): string | undefined {
    return partitioned ? 'Partitioned' : undefined
  }

  /**
   * Converts the value to a string for the path attribute.
   *
   * Преобразует значение в строку для атрибута path.
   * @param path path / путь
   * @returns formatted Path string / отформатированная строка Path
   */
  protected static toPath(
    path?: CookieOptions['path']
  ): string {
    const sanitizedPath = path?.replace(COOKIE_SANITIZE_REGEXP, '')

    return `Path=${sanitizedPath || '/'}`
  }

  /**
   * Converts the value to a string for the SameSite attribute.
   *
   * Преобразует значение в строку для атрибута SameSite.
   * @param sameSite SameSite attribute / атрибут SameSite
   * @returns formatted SameSite string / отформатированная строка SameSite
   */
  protected static toSameSite(
    sameSite?: CookieOptions['sameSite']
  ): string {
    return `SameSite=${encodeURIComponent(sameSite ?? 'Strict')}`
  }

  /**
   * Converts the value to a string for the secure attribute.
   * Automatically enables Secure when SameSite is 'none' or partitioned is true per RFC 6265bis.
   *
   * Преобразует значение в строку для атрибута secure.
   * Автоматически включает Secure при SameSite 'none' или partitioned true согласно RFC 6265bis.
   * @param secure secure attribute / атрибут secure
   * @param sameSite SameSite attribute / атрибут SameSite
   * @param partitioned partitioned attribute / атрибут partitioned
   * @returns formatted Secure string or undefined / отформатированная строка Secure или undefined
   */
  protected static toSecure(
    secure?: CookieOptions['secure'],
    sameSite?: CookieOptions['sameSite'],
    partitioned?: CookieOptions['partitioned']
  ): string | undefined {
    return secure || sameSite?.toLowerCase() === 'none' || partitioned
      ? 'Secure'
      : undefined
  }
}
