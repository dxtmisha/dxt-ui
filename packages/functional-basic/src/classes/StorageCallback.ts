import { executePromise } from '../functions/executePromise'

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
   */
  static getInstance<T>(
    name: string,
    group: string = 'main'
  ) {
    return new StorageCallback<T>(name, group)
  }

  protected callbacks: Callback[] = []
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

    if (key in items) {
      return items[key] as StorageCallback<T, Callback>
    }

    items[key] = this as StorageCallback
  }

  /**
   * Returns the storage name.
   *
   * Возвращает название хранилища.
   */
  getName(): string {
    return this.name
  }

  /**
   * Returns the loading state.
   *
   * Возвращает состояние загрузки.
   */
  getLoading(): boolean {
    return this.loading
  }

  /**
   * Adds a callback to the list.
   *
   * Добавляет обратный вызов в список.
   * @param callback function for callbacks/ функция для обратных вызовов
   */
  addCallback(callback: Callback): this {
    this.callbacks.push(callback)
    return this
  }

  /**
   * Removes a callback from the list.
   *
   * Удаляет обратный вызов из списка.
   * @param callback function for callbacks/ функция для обратных вызовов
   */
  removeCallback(callback: Callback): this {
    this.callbacks = this.callbacks.filter(item => item !== callback)
    return this
  }

  /**
   * Preparation of data before launch.
   *
   * Подготовка данных перед запуском.
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
   */
  async run(value: T): Promise<this> {
    this.preparation()

    for (const callback of this.callbacks) {
      await executePromise(callback, value)
    }

    this.loading = false

    return this
  }
}

const items: Record<string, StorageCallback> = {}
