import { executeFunction } from '../functions/executeFunction'
import { getElementSafeScript } from '../functions/getElementSafeScript'
import { getHydrationData } from '../functions/getHydrationData'
import { getObjectNull } from '../functions/getObjectNull'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isObjectNotArray } from '../functions/isObjectNotArray'

import { ErrorCenter } from './ErrorCenter'

/** Item stored in the server storage / Элемент, хранящийся в серверном хранилище */
export type ServerStorageItem = {
  /** Stored value / Сохраненное значение */
  value: unknown
  /** Whether the value is included in client hydration / Включено ли значение в клиентскую гидратацию */
  hydration: boolean
}
/** Map of server storage items / Карта элементов серверного хранилища */
export type ServerStorageList = Record<string, ServerStorageItem>

/** Server storage key / Ключ серверного хранилища */
const SERVER_STORAGE_KEY = '__ui:server-storage__'

/** Server storage script id / Идентификатор скрипта серверного хранилища */
const SERVER_STORAGE_ID = '__ui:server:storage:id__'

/**
 * Class for managing data storage during server-side rendering (SSR).
 * Handles data isolation between parallel requests by using a request-specific context.
 *
 * Класс для управления хранением данных при серверном рендеринге (SSR).
 * Обеспечивает изоляцию данных между параллельными запросами, используя контекст конкретного запроса.
 */
export class ServerStorage {
  /** In-memory storage fallback / Резервное хранилище в памяти */
  protected static storage?: ServerStorageList
  /** Request context listener / Слушатель контекста запроса */
  protected static listener?: () => Record<string, unknown> | undefined
  /** Flag to hide missing storage error / Флаг скрытия ошибки отсутствия хранилища */
  protected static hideError?: boolean

  /**
   * Checks if a value exists in storage.
   *
   * Проверяет наличие значения в хранилище.
   * @param key unique storage key / уникальный ключ хранилища
   * @returns true if key exists, false otherwise / true, если ключ существует, иначе false
   */
  static has(key: string): boolean {
    const storage = this.getStorage(false, `has:${key}`)

    return key in storage
  }

  /**
   * Retrieves a value from storage. If it doesn't exist, creates it using the default value factory or value.
   *
   * Извлекает значение из хранилища. Если оно не существует, создает его с помощью фабрики значений по умолчанию или значения.
   * @param key unique storage key / уникальный ключ хранилища
   * @param defaultValue default value or function that returns the default value if not found / значение по умолчанию или функция, возвращающая значение по умолчанию, если оно не найдено
   * @param hydration whether the value should be included in hydration / должно ли значение быть включено в гидратацию
   * @returns stored value / сохраненное значение
   */
  static get<T = unknown>(
    key: string,
    defaultValue?: (() => T) | T,
    hydration: boolean = false
  ): T {
    const storage = this.getStorage(defaultValue !== undefined, `get:${key}`)

    if (key in storage) {
      return storage[key].value as T
    }

    if (defaultValue !== undefined) {
      return this.set<T>(key, defaultValue, hydration, storage)
    }

    return undefined as T
  }

  /**
   * Saves a value to storage.
   *
   * Сохраняет значение в хранилище.
   * @param key unique storage key / уникальный ключ хранилища
   * @param value value or function that returns the value to save / значение или функция, возвращающая значение для сохранения
   * @param hydration whether the value should be included in hydration / должно ли значение быть включено в гидратацию
   * @param storageList optional storage list / необязательный список хранилища
   * @returns saved value / сохраненное значение
   */
  static set<T = unknown>(
    key: string,
    value: (() => T) | T,
    hydration: boolean = false,
    storageList?: ServerStorageList
  ): T {
    const storage = storageList ?? this.getStorage(true, `set:${key}`)
    const newValue = executeFunction(value)

    storage[key] = {
      value: newValue,
      hydration
    }
    return newValue
  }

  /**
   * Sets the visibility of error messages.
   *
   * Устанавливает видимость сообщений об ошибках.
   * @param hide boolean value to hide or show errors / логическое значение для скрытия или отображения ошибок
   */
  static setErrorStatus(hide: boolean): void {
    this.hideError = hide
  }

  /**
   * Removes a value from storage.
   *
   * Удаляет значение из хранилища.
   * @param key unique storage key / уникальный ключ хранилища
   */
  static remove(key: string): void {
    const storage = this.getStorage(false, `remove:${key}`)

    if (key in storage) {
      delete storage[key]
    }
  }

  /**
   * Resets the storage.
   *
   * Сбрасывает хранилище.
   */
  static reset(): void {
    this.storage = undefined
    this.listener = undefined
  }

  /**
   * Initializes the storage with a context listener.
   *
   * Инициализирует хранилище слушателем контекста.
   * @param listener function that returns the current request context / функция, возвращающая контекст текущего запроса
   * @returns ServerStorage class / класс ServerStorage
   */
  static init(listener: () => Record<string, unknown> | undefined): typeof ServerStorage {
    if (!this.listener) {
      this.listener = listener
    }

    return this
  }

  /**
   * Returns a string representation of the storage for hydration.
   *
   * Возвращает строковое представление хранилища для гидратации.
   * @returns script tag string / строка тега скрипта
   */
  static toString(): string {
    return getElementSafeScript(SERVER_STORAGE_ID, this.getDataForHydration())
  }

  /**
   * Returns data for hydration.
   *
   * Возвращает данные для гидратации.
   * @returns record of hydration data / запись данных гидратации
   */
  protected static getDataForHydration(): Record<string, unknown> {
    const storage = this.getStorage(false, 'hydration')
    const dataForHydration: Record<string, unknown> = getObjectNull()

    for (const key in storage) {
      if (storage[key].hydration) {
        dataForHydration[key] = storage[key].value
      }
    }

    return dataForHydration
  }

  /**
   * Returns storage.
   *
   * Возвращает хранилище.
   * @param isInit whether to initialize the storage if it does not exist / инициализировать ли хранилище, если оно не существует
   * @param status optional status for error reporting / необязательный статус для отчета об ошибках
   * @returns storage list / список хранилища
   */
  protected static getStorage(
    isInit: boolean = true,
    status?: string
  ): ServerStorageList {
    if (isDomRuntime()) {
      return this.getStorageDom()
    }

    let context: Record<string, unknown> | undefined
    let contextError: unknown

    if (this.listener) {
      try {
        context = this.listener()
      } catch (error) {
        contextError = error
      }
    }

    if (!context) {
      if (!this.hideError) {
        ErrorCenter.on({
          group: 'storage',
          code: 'context',
          details: {
            status,
            error: contextError
          }
        })
      }

      if (
        isInit
        && !this.storage
      ) {
        this.storage = getObjectNull()
      }

      return this.storage ?? getObjectNull()
    }

    if (!(SERVER_STORAGE_KEY in context)) {
      if (!isInit) {
        return getObjectNull()
      }

      context[SERVER_STORAGE_KEY] = getObjectNull()
    }

    return context[SERVER_STORAGE_KEY] as ServerStorageList
  }

  /**
   * Returns storage from DOM.
   *
   * Возвращает хранилище из DOM.
   * @returns storage list from DOM / список хранилища из DOM
   */
  protected static getStorageDom(): ServerStorageList {
    if (!this.storage) {
      const data = getHydrationData<Record<string, unknown>>(SERVER_STORAGE_ID, {})
      const storage: ServerStorageList = getObjectNull()

      if (isObjectNotArray(data)) {
        for (const name in data) {
          if (Object.hasOwn(data, name)) {
            storage[name] = {
              value: data[name],
              hydration: true
            }
          }
        }
      }

      this.storage = storage
    }

    return this.storage
  }
}
