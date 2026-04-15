import { anyToString } from '../functions/anyToString'
import { executeFunction } from '../functions/executeFunction'
import { isDomData } from '../functions/isDomData'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isFilled } from '../functions/isFilled'
import { strSplit } from '../functions/strSplit'
import { transformation } from '../functions/transformation'

import { CookieBlock } from './CookieBlock'

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
  /** Additional arguments / Дополнительные аргументы */
  arguments?: string[]
}

/**
 * Class for managing cookie storage with support for custom listeners.
 * Useful for consistent cookie handling across different environments (DOM, SSR).
 *
 * Класс для управления хранением cookie с поддержкой пользовательских слушателей.
 * Полезен для консистентной работы с cookie в различных окружениях (DOM, SSR).
 */
export class CookieStorage {
  /** Memory storage for cookies / Хранилище cookie в памяти */
  protected static items?: Record<string, any>

  /** Storage mechanism for getting data / механизм хранения для получения данных */
  protected static getListener?: (key: string) => any | undefined

  /** Storage mechanism for setting data / механизм хранения для сохранения данных */
  protected static setListener?: (
    key: string,
    value: any,
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
    getListener: (key: string) => any | undefined,
    setListener: (key: string, value: any, options?: CookieOptions) => void
  ): void {
    this.getListener = getListener
    this.setListener = setListener
  }

  /**
   * Resets the storage by clearing all in-memory items and resetting listeners.
   *
   * Сбрасывает хранилище, очищая все элементы в памяти и сбрасывая слушатели.
   */
  static reset(): void {
    this.items = undefined
    this.getListener = undefined
    this.setListener = undefined
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @param name cookie name / имя cookie
   */
  static get<T>(
    name: string,
    defaultValue?: T | (() => T)
  ): T | undefined {
    const value = this.getListener
      ? this.getListener(name)
      : this.initItems()[name]

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
   * @param age cache age / возраст кэша
   * @param options additional parameters / дополнительные параметры
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
        options
      )
    } else {
      this.initItems()[name] = stringValue === '' ? undefined : newValue

      if (this.hasDom()) {
        document.cookie = [
          `${encodeURIComponent(name)}=${encodeURIComponent(stringValue)}`,
          `max-age=${stringValue === '' ? '-1' : options?.age ?? (7 * 24 * 60 * 60)}`,
          `SameSite=${options?.sameSite ?? 'strict'}`,
          ...(options?.arguments ?? [])
        ].join('; ')
      }
    }

    return newValue
  }

  /**
   * Removing data from storage.
   *
   * Удаление данных из хранилища.
   * @param name cookie name / имя cookie
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
    this.initItems()
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
   * Initialize storage if not initialized.
   *
   * Инициализирует хранилище, если оно не инициализировано.
   */
  protected static initItems(): Record<string, any> {
    if (this.items) {
      return this.items
    }

    this.items = {}

    if (this.hasDom()) {
      for (const item of document.cookie.split(';')) {
        const [key, value] = strSplit(item.trim(), '=', 2)

        if (
          key
          && isFilled(value)
        ) {
          this.items[key] = value
        }
      }
    }

    return this.items
  }
}
