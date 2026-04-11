import { isDomRuntime } from '../functions/isDomRuntime'

const SERVER_STORAGE_KEY = '__dxt_server_storage__'

/**
 * Class for managing data storage during server-side rendering (SSR).
 * Handles data isolation between parallel requests by using a request-specific context.
 *
 * Класс для управления хранением данных при серверном рендеринге (SSR).
 * Обеспечивает изоляцию данных между параллельными запросами, используя контекст конкретного запроса.
 */
export class ServerStorage {
  protected static storage: Record<string, any> = {}
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
   * Retrieves a value from storage. If it doesn't exist, creates it using the default value factory.
   *
   * Извлекает значение из хранилища. Если оно не существует, создает его с помощью фабрики значений по умолчанию.
   * @param key unique storage key / уникальный ключ хранилища
   * @param defaultValue function that returns the default value if not found / функция, возвращающая значение по умолчанию, если оно не найдено
   */
  static get<T = any>(
    key: string,
    defaultValue: () => T
  ): T {
    const storage = this.getStorage()

    if (key in storage) {
      return storage[key] as T
    }

    return this.set<T>(key, defaultValue)
  }

  /**
   * Saves a value to storage.
   *
   * Сохраняет значение в хранилище.
   * @param key unique storage key / уникальный ключ хранилища
   * @param value function that returns the value to save / функция, возвращающая значение для сохранения
   */
  static set<T = any>(
    key: string,
    value: () => T
  ): T {
    const storage = this.getStorage()
    const newValue = value()

    storage[key] = newValue
    return newValue
  }

  protected static getStorage(): Record<string, any> {
    if (isDomRuntime()) {
      return this.storage
    }

    if (!this.listener) {
      console.error(
        '[ServerStorage] Not initialized. '
        + 'Falling back to global static storage '
        + '(Warning: Possible memory leak in SSR).'
      )

      return this.storage
    }

    const context = this.listener()

    if (!context) {
      console.error(
        '[ServerStorage] Context is undefined. Called outside of HTTP request? '
        + 'Falling back to global static storage '
        + '(Warning: Possible memory leak in SSR).'
      )

      return this.storage
    }

    if (!(SERVER_STORAGE_KEY in context)) {
      context[SERVER_STORAGE_KEY] = {}
    }

    return context[SERVER_STORAGE_KEY]
  }
}
