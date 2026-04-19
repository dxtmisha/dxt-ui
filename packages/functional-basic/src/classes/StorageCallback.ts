import { executePromise } from '../functions/executePromise'
import { ServerStorage } from './ServerStorage'

/**
 * Returns a list of active StorageCallback instances for the current request context.
 *
 * Возвращает список активных экземпляров StorageCallback для контекста текущего запроса.
 */
const getItems = () => {
  return ServerStorage.get<Record<string, StorageCallback>>(
    '__ui:storage-callback__',
    () => ({})
  )
}

/**
 * A class for working with callback lists for storage.
 *
 * Класс для работы со списками обратных вызовов для хранилища.
 */
export class StorageCallback<
  T = any,
  Callback = (value: T) => void | Promise<void>
> {
  /**
   * Returns an instance of the class by name.
   *
   * Возвращает экземпляр класса по названию.
   * @param name storage name/ название хранилища
   * @param group storage group/ группа хранилища
   * @returns StorageCallback instance / экземпляр StorageCallback
   */
  static getInstance<T>(
    name: string,
    group: string = 'main'
  ) {
    return new StorageCallback<T>(name, group)
  }

  protected callbacks: { callback: Callback, isOnce?: boolean }[] = []
  protected loading: boolean = false

  /**
   * Constructor for initialization.
   *
   * Конструктор для инициализации.
   * @param name storage name/ название хранилища
   * @param group storage group/ группа хранилища
   */
  constructor(
    protected name: string,
    protected group: string = 'main'
  ) {
    const key = `${group}:${name}`
    const items = getItems()

    if (key in items) {
      return items[key] as StorageCallback<T, Callback>
    }

    items[key] = this as StorageCallback
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
   * Returns the storage name.
   *
   * Возвращает название хранилища.
   * @returns storage name / название хранилища
   */
  getName(): string {
    return this.name
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
   * Adds a callback to the list.
   *
   * Добавляет обратный вызов в список.
   * @param callback function for callbacks/ функция для обратных вызовов
   * @param isOnce whether the callback should only be called once/ является ли колбэк одноразовым
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
   * @param callback function for callbacks/ функция для обратных вызовов
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
   *
   * Выполнение всех обратных вызовов.
   * @param value storage data/ данные хранилища
   * @returns this instance / текущий экземпляр
   */
  async run(value: T): Promise<this> {
    this.loading = false

    for (const { callback, isOnce } of this.callbacks) {
      await executePromise(callback, value)

      if (isOnce) {
        this.removeCallback(callback)
      }
    }

    return this
  }
}
