import { executeFunction } from '../functions/executeFunction'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isNull } from '../functions/isNull'

type DataStorageValue<T> = {
  value: T
  age: number
}

const items: Record<string, DataStorage<any>> = {}
let prefix: string = 'ui-storage'

/**
 * Class for working with localStorage.
 *
 * Класс для работы с localStorage.
 */
export class DataStorage<T> {
  /**
   * Changing the prefix in key names. Should be called at the beginning of the code.
   *
   * Изменение префикса в названиях ключей. Вызывать нужно в начале кода.
   * @param newPrefix new prefix/ новый префикс
   */
  static setPrefix(newPrefix: string): void {
    prefix = newPrefix
  }

  private value?: T
  private age?: number

  /**
   * Constructor
   * @param name value name/ название значения
   * @param isSession should we use a session/ использовать ли сессию
   */
  constructor(
    private name: string,
    private isSession = false
  ) {
    const nameCache = `${isSession ? 'session' : 'storage'}#${name}`

    if (nameCache in items) {
      return items[nameCache] as DataStorage<T>
    }

    this.make()

    items[nameCache] = this
  }

  /**
   * Getting data from local storage.
   *
   * Получение данных из локального хранилища.
   * @param defaultValue default value/ значение по умолчанию
   * @param cache cache time/ время кэширования
   */
  get(
    defaultValue?: T | (() => T),
    cache?: number
  ): T | undefined {
    if (
      this.value !== null
      && this.value !== undefined
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
   * @param value new values/ новые значения
   */
  set(value?: T | (() => T)): T | undefined {
    this.value = executeFunction(value)
    this.age = new Date().getTime()

    if (this.value === undefined) {
      this.remove()
    } else {
      this.getMethod()?.setItem(this.getIndex(), JSON.stringify({
        value: this.value,
        age: this.age
      } as DataStorageValue<T>))
    }

    return this.value
  }

  /**
   * Removing data from storage.
   *
   * Удаление данных из хранилища.
   */
  remove(): this {
    this.getMethod()?.removeItem(this.getIndex())
    return this
  }

  /**
   * Clearing all data from storage.
   *
   * Очистка всех данных из хранилища.
   */
  update(): this {
    this.make()
    return this
  }

  /**
   * Checks for storage time limit.
   *
   * Проверяет на лимит времени хранения.
   * @param cache cache time/ время кэширования
   */
  private isCache(cache?: number) {
    return isNull(cache) || (
      this.age
      && this.age + (cache * 1000) >= new Date().getTime()
    )
  }

  /**
   * Returns an object for working with storage.
   *
   * Возвращает объект для работы с хранилищем.
   */
  private getMethod(): Storage | undefined {
    if (isDomRuntime()) {
      return this.isSession
        ? window?.sessionStorage
        : window?.localStorage
    }

    return undefined
  }

  /**
   * Getting the storage key name.
   *
   * Получение имени ключа в хранилище.
   */
  private getIndex(): string {
    return `${prefix}__${this.name}`
  }

  /**
   * Getting data from storage.
   *
   * Получение данных из хранилища.
   */
  private getValue(): DataStorageValue<T> | undefined {
    const value = this.getMethod()?.getItem(this.getIndex())

    if (value) {
      try {
        return JSON.parse(value)
      } catch (e) {
        console.error('DataStorage', e)
      }
    }

    return undefined
  }

  /**
   * Filling in the data from storage.
   *
   * Заполнение данными из хранилища.
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
