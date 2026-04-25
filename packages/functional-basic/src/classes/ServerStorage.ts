import { forEach } from '../functions/forEach'
import { getElementSafeScript } from '../functions/getElementSafeScript'
import { getHydrationData } from '../functions/getHydrationData'
import { isDomRuntime } from '../functions/isDomRuntime'

import { ErrorCenter } from './ErrorCenter'

/** Item stored in the server storage/ Элемент, хранящийся в серверном хранилище */
type ServerStorageItem = {
  value: any
  hydration: boolean
}
type ServerStorageList = Record<string, ServerStorageItem>

/** Server storage key / Ключ серверного хранилища */
const SERVER_STORAGE_KEY = '__ui:server-storage__'

/** Server storage script id / Идентификатор скрипта серверного хранилища */
const SERVER_STORAGE_ID = '__ui:server:storage:id__'

console.log('ServerStorage')

/**
 * Class for managing data storage during server-side rendering (SSR).
 * Handles data isolation between parallel requests by using a request-specific context.
 *
 * Класс для управления хранением данных при серверном рендеринге (SSR).
 * Обеспечивает изоляцию данных между параллельными запросами, используя контекст конкретного запроса.
 */
export class ServerStorage {
  protected static storage?: ServerStorageList
  protected static listener?: () => Record<string, any> | undefined
  protected static hideError?: boolean

  /**
   * Initializes the storage with a context listener.
   *
   * Инициализирует хранилище слушателем контекста.
   * @param listener function that returns the current request context / функция, возвращающая контекст текущего запроса
   * @returns this instance / текущий класс
   */
  static init(listener: () => Record<string, any> | undefined) {
    if (!this.listener) {
      this.listener = listener
    }

    return this
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
   * Checks if a value exists in storage.
   *
   * Проверяет наличие значения в хранилище.
   * @param key unique storage key / уникальный ключ хранилища
   * @returns boolean / логическое значение
   */
  static has(key: string): boolean {
    const storage = this.getStorage(false, `has:${key}`)

    return key in storage
  }

  /**
   * Retrieves a value from storage. If it doesn't exist, creates it using the default value factory.
   *
   * Извлекает значение из хранилища. Если оно не существует, создает его с помощью фабрики значений по умолчанию.
   * @param key unique storage key / уникальный ключ хранилища
   * @param defaultValue function that returns the default value if not found / функция, возвращающая значение по умолчанию, если оно не найдено
   * @param hydration whether the value should be included in hydration / должно ли значение быть включено в гидратацию
   * @returns stored value / сохраненное значение
   */
  static get<T = any>(
    key: string,
    defaultValue?: () => T,
    hydration: boolean = false
  ): T {
    const storage = this.getStorage(undefined, `get:${key}`)

    if (key in storage) {
      return storage[key].value as T
    }

    if (defaultValue) {
      return this.set<T>(key, defaultValue, hydration)
    }

    return undefined as T
  }

  /**
   * Saves a value to storage.
   *
   * Сохраняет значение в хранилище.
   * @param key unique storage key / уникальный ключ хранилища
   * @param value function that returns the value to save / функция, возвращающая значение для сохранения
   * @param hydration whether the value should be included in hydration / должно ли значение быть включено в гидратацию
   * @returns saved value / сохраненное значение
   */
  static set<T = any>(
    key: string,
    value: () => T,
    hydration: boolean = false
  ): T {
    const storage = this.getStorage(undefined, `set:${key}`)
    const newValue = value()

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
    const storage = this.getStorage()

    if (key in storage) {
      delete storage[key]
    }
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
   * Returns storage.
   *
   * Возвращает хранилище.
   * @param isInit whether to initialize the storage if it does not exist /
   * инициализировать ли хранилище, если оно не существует
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

    const context = this.listener?.()

    if (!context) {
      if (!this.hideError) {
        ErrorCenter.on({
          group: 'storage',
          code: 'context',
          details: { status }
        })
      }

      if (
        isInit
        && !this.storage
      ) {
        this.storage = {}
      }

      return this.storage ?? {}
    }

    if (!(SERVER_STORAGE_KEY in context)) {
      context[SERVER_STORAGE_KEY] = {}
    }

    return context[SERVER_STORAGE_KEY]
  }

  /**
   * Returns storage from DOM.
   *
   * Возвращает хранилище из DOM.
   * @returns storage list from DOM / список хранилища из DOM
   */
  protected static getStorageDom(): ServerStorageList {
    if (!this.storage) {
      const data = getHydrationData<Record<string, any>>(SERVER_STORAGE_ID, {})

      this.storage = {}

      forEach(data, (value, name) => {
        this.storage![name] = {
          value,
          hydration: true
        }
      })
    }

    return this.storage
  }

  /**
   * Returns data for hydration.
   *
   * Возвращает данные для гидратации.
   * @returns record of hydration data / запись данных гидратации
   */
  protected static getDataForHydration(): Record<string, any> {
    const storage = this.getStorage(undefined, 'hydration')
    const dataForHydration: Record<string, any> = {}

    forEach(storage, (item, key) => {
      if (item.hydration) {
        dataForHydration[key] = item.value
      }
    })

    return dataForHydration
  }
}
