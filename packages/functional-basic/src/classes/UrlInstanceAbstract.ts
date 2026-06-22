import { executeFunction } from '../functions/executeFunction'
import { forEach } from '../functions/forEach'

/**
 * Base abstract class for working with URL-based states (Hash, Query).
 *
 * Базовый абстрактный класс для работы с состояниями на основе URL (Hash, Query).
 */
export abstract class UrlInstanceAbstract {
  protected data?: Record<string, any>
  protected watch: Record<string, ((value: any) => void)[]> = {}
  protected block = false
  protected time?: any

  /**
   * Get data.
   *
   * Получение данных.
   * @param name variable name / название переменной
   * @param defaultValue value or function to change data / значение или функция для изменения данных
   * @returns stored value / сохранённое значение
   */
  get<T>(
    name: string,
    defaultValue?: T | (() => T)
  ): T {
    const data = this.getData()

    if (
      !(name in data)
      && defaultValue
    ) {
      this.set(name, defaultValue)
    }

    return data[name]
  }

  /**
   * Change data.
   *
   * Изменение данных.
   * @param name variable name / название переменной
   * @param callback value or function to change data / значение или функция для изменения данных
   * @returns this instance / текущий экземпляр
   */
  set<T>(
    name: string,
    callback: T | (() => T)
  ): this {
    const value = executeFunction(callback)

    if (value !== this.data?.[name]) {
      this.getData()[name] = value
      this.update()
    }

    return this
  }

  /**
   * Adding an event when data is changed.
   *
   * Добавление события при изменении данных.
   * @param name variable name / название переменной
   * @param callback the function is called when the data is changed / функция вызывается при изменении данных
   * @returns this instance / текущий экземпляр
   */
  addWatch<T>(
    name: string,
    callback: (value: T) => void
  ): this {
    if (name in this.watch) {
      this.watch[name]?.push(callback)
    } else {
      this.watch[name] = [callback]
    }

    return this
  }

  /**
   * Removing an event when data is changed.
   *
   * Удаление события при изменении данных.
   * @param name variable name / название переменной
   * @param callback the function is called when the data is changed / функция вызывается при изменении данных
   * @returns this instance / текущий экземпляр
   */
  removeWatch<T>(
    name: string,
    callback: (value: T) => void
  ): this {
    const list = this.watch?.[name]

    if (list) {
      this.watch[name] = list.filter(item => item !== callback)
    }

    return this
  }

  /**
   * Update variables from URL string.
   *
   * Обновление переменных из строки URL.
   * @returns this instance / текущий экземпляр
   */
  reload(): this {
    if (this.block) {
      setTimeout(() => this.reload(), 32)
    } else {
      this.initData()
    }

    return this
  }

  /**
   * Returns the query/hash data object, initializing if needed.
   *
   * Возвращает объект данных, инициализируя при необходимости.
   * @returns Record<string, any> data object / объект данных
   */
  protected getData(): Record<string, any> {
    if (!this.data) {
      this.init()
    }

    return this.data!
  }

  /**
   * Reads data from the URL and triggers watchers.
   *
   * Считывает данные из URL и вызывает наблюдателей.
   * @returns this instance / текущий экземпляр
   */
  protected initData(): this {
    const location = this.getLocation()

    this.makeWatch(location)
    this.data = location

    return this
  }

  /**
   * Calling all functions whose data has changed.
   *
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data / свежие данные
   * @returns this instance / текущий экземпляр
   */
  protected makeWatch(location: Record<string, any>): this {
    forEach(this.watch, (item, name) => {
      if (this.data?.[name] !== location?.[name]) {
        item.forEach(callback => callback(location[name]))
      }
    })

    return this
  }

  /**
   * Initializes data and event listeners.
   *
   * Инициализирует данные и слушатели событий.
   */
  protected abstract init(): this

  /**
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   */
  protected abstract getLocation(): Record<string, any>

  /**
   * Update string in URL.
   *
   * Обновление строки в URL.
   */
  protected abstract update(): this
}
