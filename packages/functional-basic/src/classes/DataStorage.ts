import { encodeLiteAttribute } from '../functions/encodeLiteAttribute'
import { executeFunction } from '../functions/executeFunction'
import { isDomData } from '../functions/isDomData'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isNull } from '../functions/isNull'

import { ErrorCenter } from './ErrorCenter'
import { type ErrorCenterInstance } from './ErrorCenterInstance'
import { ServerStorage } from './ServerStorage'

type DataStorageValue<T> = {
  value: T
  age: number
}

/**
 * Default prefix for storage keys/
 * Префикс по умолчанию для ключей хранилища
 */
let prefix: string = 'ui-storage'

/**
 * Returns a list of active DataStorage instances for the current request context.
 *
 * Возвращает список активных экземпляров DataStorage для контекста текущего запроса.
 */
const getItems = () => {
  return ServerStorage.get<Record<string, DataStorage<unknown>>>(
    '__dxt_data_storage__',
    () => ({})
  )
}

/**
 * Class for working with localStorage and sessionStorage.
 * Includes support for prefixes, expiration time, and request isolation in SSR.
 *
 * Класс для работы с localStorage и sessionStorage.
 * Включает поддержку префиксов, времени жизни данных и изоляцию запросов в SSR.
 */
export class DataStorage<T> {
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   * @returns void
   */
  static setPrefix(newPrefix: string): void {
    prefix = newPrefix
  }

  /**
   * The current value stored in memory/
   * Текущее значение, хранящееся в памяти
   */
  private value?: T

  /**
   * The timestamp of when the value was last saved/
   * Временная метка последнего сохранения значения
   */
  private age?: number

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name value name / название значения
   * @param isSession should we use a session/ использовать ли сессию
   * @param errorCenter error center instance/ экземпляр центра ошибок
   */
  constructor(
    private name: string,
    private isSession = false,
    private errorCenter: ErrorCenterInstance = ErrorCenter.getItem()
  ) {
    const nameCache = `${isSession ? 'session' : 'storage'}#${name}`
    const items = getItems()

    if (nameCache in items) {
      return items[nameCache] as DataStorage<T>
    }

    this.make()

    items[nameCache] = this
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   * @param defaultValue default value / значение по умолчанию
   * @param cache cache time in seconds / время кэширования в секундах
   * @returns stored value or default value / сохраненное значение или значение по умолчанию
   */
  get(
    defaultValue?: T | (() => T),
    cache?: number
  ): T | undefined {
    if (
      !isNull(this.value)
      && this.isCache(cache)
    ) {
      return this.value
    }

    if (defaultValue !== undefined) {
      return this.set(defaultValue)
    }

    return undefined
  }

  /**
   * Changing data in storage.
   *
   * Изменение данных в хранилище.
   * @param value new values / новые значения
   * @returns the set value / установленное значение
   */
  set(value?: T | (() => T)): T | undefined {
    this.value = executeFunction(value)
    this.age = Date.now()

    if (this.value === undefined) {
      this.remove()
    } else {
      this.getMethod()
        ?.setItem(
          this.getIndex(),
          encodeLiteAttribute(
            JSON
              .stringify({
                value: this.value,
                age: this.age
              } as DataStorageValue<T>)
          )
        )
    }

    return this.value
  }

  /**
   * Removing data from storage.
   *
   * Удаление данных из хранилища.
   * @returns this instance for chaining / текущий экземпляр для цепочки вызовов
   */
  remove(): this {
    this.value = undefined
    this.age = undefined

    this.getMethod()?.removeItem(this.getIndex())

    return this
  }

  /**
   * Syncing data from storage.
   *
   * Синхронизация данных из хранилища.
   * @returns this instance / текущий экземпляр
   */
  update(): this {
    this.make()
    return this
  }

  /**
   * Checks for storage time limit.
   *
   * Проверяет данные на истечение срока хранения (кэша).
   * @param cache cache time in seconds / время кэширования в секундах
   * @returns true if data is valid / true, если данные актуальны
   */
  private isCache(cache?: number) {
    return isNull(cache) || (
      this.age
      && this.age + (cache * 1000) >= Date.now()
    )
  }

  /**
   * Returns an object for working with storage (localStorage or sessionStorage).
   *
   * Возвращает объект для работы с хранилищем (localStorage или sessionStorage).
   * @returns Storage object or undefined / объект Storage или undefined
   */
  private getMethod(): Storage | undefined {
    if (
      isDomRuntime()
      && !isDomData()
    ) {
      const storage = this.isSession
        ? window?.sessionStorage
        : window?.localStorage

      if (storage) {
        return storage
      }
    }

    return undefined
  }

  /**
   * Getting the storage key name with prefix.
   *
   * Получение имени ключа в хранилище с учетом префикса.
   * @returns key name / имя ключа
   */
  private getIndex(): string {
    return `${prefix}__${this.name}`
  }

  /**
   * Getting raw data from storage.
   *
   * Получение "сырых" данных из хранилища.
   * @returns parsed data or undefined / распарсенные данные или undefined
   */
  private getValue(): DataStorageValue<T> | undefined {
    const value = this.getMethod()
      ?.getItem(this.getIndex())

    if (value) {
      try {
        return JSON.parse(value)
      } catch (e) {
        this.errorCenter.on({
          group: 'storage',
          code: 'error',
          details: e
        })
      }
    }

    return undefined
  }

  /**
   * Filling in the data from storage into memory.
   *
   * Заполнение данных из хранилища в память.
   * @returns this instance / текущий экземпляр
   */
  private make(): this {
    const value = this.getValue()

    if (value) {
      this.value = value.value
      this.age = value.age
    } else {
      this.value = undefined
      this.age = undefined
    }

    return this
  }
}
