import { executePromise } from '../functions/executePromise'
import { ErrorCenter } from './ErrorCenter'
import { ServerStorage } from './ServerStorage'

/**
 * Returns a list of active StorageCallback instances for the current request context.
 *
 * Возвращает список активных экземпляров StorageCallback для контекста текущего запроса.
 * @returns dictionary of active StorageCallback instances / словарь активных экземпляров StorageCallback
 */
const getItems = (): Record<string, StorageCallback> => {
  return ServerStorage.get<Record<string, StorageCallback>>(
    '__ui:storage-callback__',
    () => Object.create(null)
  )
}

/**
 * A class for working with callback lists for storage.
 *
 * Класс для работы со списками обратных вызовов для хранилища.
 */
export class StorageCallback<
  T = unknown,
  Callback = (value: T) => void | Promise<void>
> {
  /** List of registered callbacks / Список зарегистрированных колбэков */
  protected callbacks: { callback: Callback, isOnce?: boolean }[] = []

  /** Loading state / Состояние загрузки */
  protected loading: boolean = false

  /**
   * Constructor for initialization.
   *
   * Конструктор для инициализации.
   * @param name storage name / название хранилища
   * @param group storage group / группа хранилища
   */
  constructor(
    protected name: string,
    protected group: string = 'main'
  ) {
    const key = `${group}:${name}`
    const items = getItems()

    if (key in items) {
      return items[key] as unknown as StorageCallback<T, Callback>
    }

    items[key] = this as unknown as StorageCallback
  }

  /**
   * Returns the loading state.
   *
   * Возвращает состояние загрузки.
   * @returns loading state / состояние загрузки
   */
  isLoading(): boolean {
    return this.loading
  }

  /**
   * Returns an instance of the class by name.
   *
   * Возвращает экземпляр класса по названию.
   * @param name storage name / название хранилища
   * @param group storage group / группа хранилища
   * @returns StorageCallback instance / экземпляр StorageCallback
   */
  static getInstance<T>(
    name: string,
    group: string = 'main'
  ): StorageCallback<T> {
    return new StorageCallback<T>(name, group)
  }

  /**
   * Returns the loading state.
   *
   * Возвращает состояние загрузки.
   * @returns loading state / состояние загрузки
   */
  getLoading(): boolean {
    return this.loading
  }

  /**
   * Returns the storage name.
   *
   * Возвращает название хранилища.
   * @returns storage name / название хранилища
   */
  getName(): string {
    return this.name
  }

  /**
   * Adds a callback to the list.
   *
   * Добавляет обратный вызов в список.
   * @param callback function for callbacks / функция для обратных вызовов
   * @param isOnce whether this registration is consumed before its first invocation / потребляется ли регистрация перед первым вызовом
   * @returns this instance / текущий экземпляр
   */
  addCallback(
    callback: Callback,
    isOnce?: boolean
  ): this {
    this.callbacks.push({
      callback,
      isOnce
    })
    return this
  }

  /**
   * Removes a callback from the list.
   *
   * Удаляет обратный вызов из списка.
   * @param callback function for callbacks / функция для обратных вызовов
   * @returns this instance / текущий экземпляр
   */
  removeCallback(callback: Callback): this {
    this.callbacks = this.callbacks.filter(item => item.callback !== callback)
    return this
  }

  /**
   * Preparation of data before launch.
   *
   * Подготовка данных перед запуском.
   * @returns this instance / текущий экземпляр
   */
  preparation(): this {
    this.loading = true
    return this
  }

  /**
   * Execution of all callbacks.
   * One-time registrations are consumed before invocation, including across overlapping runs.
   *
   * Выполнение всех обратных вызовов.
   * Одноразовые регистрации потребляются до вызова, в том числе при пересекающихся запусках.
   * @param value storage data / данные хранилища
   * @returns this instance / текущий экземпляр
   */
  async run(value: T): Promise<this> {
    for (const item of [...this.callbacks]) {
      const { callback, isOnce } = item

      if (isOnce) {
        const index = this.callbacks.indexOf(item)

        if (index === -1) {
          continue
        }

        this.callbacks.splice(index, 1)
      }

      try {
        await executePromise(callback, value)
      } catch (error) {
        ErrorCenter.on({
          group: 'storage',
          code: 'error',
          details: error
        })
      }
    }

    this.loading = false

    return this
  }
}
