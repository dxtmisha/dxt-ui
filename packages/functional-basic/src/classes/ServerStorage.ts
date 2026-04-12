import { forEach } from '../functions/forEach'
import { getElementSafeScript } from '../functions/getElementSafeScript'
import { getHydrationData } from '../functions/getHydrationData'
import { isDomRuntime } from '../functions/isDomRuntime'

/** Item stored in the server storage/ Элемент, хранящийся в серверном хранилище */
type ServerStorageItem = {
  value: any
  hydration: boolean
}
type ServerStorageList = Record<string, ServerStorageItem>

const SERVER_STORAGE_KEY = '__dxt_server_storage__'
const SERVER_STORAGE_ID = '__ui:server:storage:id__'

/**
 * Class for managing data storage during server-side rendering (SSR).
 * Handles data isolation between parallel requests by using a request-specific context.
 *
 * Класс для управления хранением данных при серверном рендеринге (SSR).
 * Обеспечивает изоляцию данных между параллельными запросами, используя контекст конкретного запроса.
 */
export class ServerStorage {
  protected static storage?: ServerStorageList
  protected static listener?: () => Record<string, any>

  /**
   * Initializes the storage with a context listener.
   *
   * Инициализирует хранилище слушателем контекста.
   * @param listener function that returns the current request context / функция, возвращающая контекст текущего запроса
   */
  static init(listener: () => Record<string, any>) {
    if (!this.listener) {
      this.listener = listener
    }

    return this
  }

  /**
   * Checks if a value exists in storage.
   *
   * Проверяет наличие значения в хранилище.
   * @param key unique storage key / уникальный ключ хранилища
   */
  static has(key: string): boolean {
    const storage = this.getStorage()

    return key in storage
  }

  /**
   * Retrieves a value from storage. If it doesn't exist, creates it using the default value factory.
   *
   * Извлекает значение из хранилища. Если оно не существует, создает его с помощью фабрики значений по умолчанию.
   * @param key unique storage key / уникальный ключ хранилища
   * @param defaultValue function that returns the default value if not found / функция, возвращающая значение по умолчанию, если оно не найдено
   * @param hydration whether the value is hydrated / является ли значение гидратированным
   */
  static get<T = any>(
    key: string,
    defaultValue?: () => T,
    hydration: boolean = false
  ): T {
    const storage = this.getStorage()

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
   * @param hydration whether the value is hydrated / является ли значение гидратированным
   */
  static set<T = any>(
    key: string,
    value: () => T,
    hydration: boolean = false
  ): T {
    const storage = this.getStorage()
    const newValue = value()

    storage[key] = {
      value: newValue,
      hydration
    }
    return newValue
  }

  /**
   * Returns a string representation of the storage for hydration.
   *
   * Возвращает строковое представление хранилища для гидратации.
   */
  static toString(): string {
    return getElementSafeScript(SERVER_STORAGE_ID, this.getDataForHydration())
  }

  /**
   * Returns storage.
   *
   * Возвращает хранилище.
   */
  protected static getStorage(): ServerStorageList {
    if (isDomRuntime()) {
      return this.getStorageDom()
    }

    const context = this.listener?.()

    if (!context) {
      console.error(
        '[ServerStorage] Context is missing (is init() called?). '
        + 'Isolation failed: data will not be saved for this request.'
      )

      return {}
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
   */
  protected static getDataForHydration(): Record<string, any> {
    const storage = this.getStorage()
    const dataForHydration: Record<string, any> = {}

    forEach(storage, (item, key) => {
      if (item.hydration) {
        dataForHydration[key] = item.value
      }
    })

    return dataForHydration
  }
}
