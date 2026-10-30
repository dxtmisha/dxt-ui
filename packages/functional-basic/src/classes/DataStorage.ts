import { executeFunction } from '../functions/executeFunction'
import { isDomData } from '../functions/isDomData'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isNull } from '../functions/isNull'
import { isObjectNotArray } from '../functions/isObjectNotArray'

import { ErrorCenter } from './ErrorCenter'
import { type ErrorCenterInstance } from './ErrorCenterInstance'
import { ServerStorage } from './ServerStorage'

/** Storage item wrapper value structure / Структура обёртки хранимого значения в хранилище */
type DataStorageValue<T> = {
  /** Stored value / Хранимое значение */
  value: T
  /** Timestamp of when the value was saved / Временная метка сохранения значения */
  age: number
}

/** Return type of the get method / Тип возвращаемого значения метода get */
export type DataStorageGet<T, D = undefined> = [D] extends [undefined]
  ? (T | undefined)
  : unknown extends T
    ? (D extends () => infer R ? R : D)
    : T

/**
 * Default prefix for storage keys. Intentionally stored at module level as an application-wide setting /
 * Префикс по умолчанию для ключей хранилища. Намеренно хранится на уровне модуля как глобальная настройка приложения
 */
let prefix: string = 'ui-storage'

/**
 * Returns a list of active DataStorage instances for the current request context.
 *
 * Возвращает список активных экземпляров DataStorage для контекста текущего запроса.
 * @returns dictionary of active DataStorage instances / словарь активных экземпляров DataStorage
 */
const getItems = (): Record<string, DataStorage<unknown>> => {
  return ServerStorage.get<Record<string, DataStorage<unknown>>>(
    '__ui:data-storage__',
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
export class DataStorage<T = unknown> {
  /**
   * The current value stored in memory /
   * Текущее значение, хранящееся в памяти
   */
  private value?: T

  /**
   * The timestamp of when the value was last saved /
   * Временная метка последнего сохранения значения
   */
  private age?: number

  /**
   * Constructor.
   *
   * Конструктор.
   * @param name value name / название значения
   * @param isSession should we use a session / использовать ли сессию
   * @param errorCenter error center instance / экземпляр центра ошибок
   */
  constructor(
    private readonly name: string,
    private readonly isSession: boolean = false,
    private readonly errorCenter: ErrorCenterInstance = ErrorCenter.getItem()
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
  get<D extends T | (() => T) | undefined = undefined>(
    defaultValue?: D,
    cache?: number
  ): DataStorageGet<T, D> {
    if (
      !isNull(this.value)
      && this.isCache(cache)
    ) {
      return this.value as DataStorageGet<T, D>
    }

    if (defaultValue !== undefined) {
      return this.set(defaultValue) as DataStorageGet<T, D>
    }

    return undefined as DataStorageGet<T, D>
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

    if (isNull(this.value)) {
      this.remove()
    } else {
      try {
        this.getMethod()
          ?.setItem(
            this.getIndex(),
            JSON
              .stringify({
                value: this.value,
                age: this.age
              } as DataStorageValue<T>)
          )
      } catch (error) {
        this.errorCenter.on({
          group: 'storage',
          code: 'error',
          details: error
        })
      }
    }

    return this.value
  }

  /**
   * Getting the storage key name with prefix.
   *
   * Получение имени ключа в хранилище с учетом префикса.
   * @returns key name / имя ключа
   */
  getIndex(): string {
    return `${prefix}__${this.name}`
  }

  /**
   * Changing the prefix in key names. Should be called once during application bootstrap.
   * Note: The prefix is intentionally stored at module scope as a shared process-wide setting,
   * so in SSR environments it applies globally to the entire runtime process rather than per-request.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно один раз при инициализации приложения.
   * Примечание: Префикс намеренно хранится на уровне модуля как общая настройка для всего процесса,
   * поэтому в SSR-окружении он применяется глобально ко всему процессу рантайма, а не изолированно для каждого запроса.
   * @param newPrefix new prefix / новый префикс
   */
  static setPrefix(newPrefix: string): void {
    prefix = newPrefix
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

    try {
      this.getMethod()?.removeItem(this.getIndex())
    } catch (error) {
      this.errorCenter.on({
        group: 'storage',
        code: 'error',
        details: error
      })
    }

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
  private isCache(cache?: number): boolean {
    return isNull(cache) || (
      this.age !== undefined
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
      try {
        const storage = this.isSession
          ? window.sessionStorage
          : window.localStorage

        if (storage) {
          return storage
        }
      } catch (error) {
        this.errorCenter.on({
          group: 'storage',
          code: 'error',
          details: error
        })
      }
    }

    return undefined
  }

  /**
   * Getting raw data from storage.
   *
   * Получение "сырых" данных из хранилища.
   * @returns parsed data or undefined / распарсенные данные или undefined
   */
  private getValue(): DataStorageValue<T> | undefined {
    try {
      const value = this.getMethod()
        ?.getItem(this.getIndex())

      if (value) {
        const parsed: unknown = JSON.parse(value)

        if (isObjectNotArray(parsed)) {
          return parsed as DataStorageValue<T>
        }
      }
    } catch (error) {
      this.errorCenter.on({
        group: 'storage',
        code: 'error',
        details: error
      })
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
