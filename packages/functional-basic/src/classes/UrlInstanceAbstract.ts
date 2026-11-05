// ai-none

import { executeFunction } from '../functions/executeFunction'
import { forEach } from '../functions/forEach'
import { getObjectNull } from '../functions/getObjectNull'
import { hasKey } from '../functions/hasKey'

/**
 * Base abstract class for working with URL-based states (Hash, Query).
 *
 * Базовый абстрактный класс для работы с состояниями на основе URL (Hash, Query).
 */
export abstract class UrlInstanceAbstract {
  /** URL state data record / Запись данных состояния URL */
  protected data?: Record<string, unknown>
  /** Watchers map for URL state variables / Карта слушателей для переменных состояния URL */
  protected watch: Record<string, ((value: unknown) => void)[]> = getObjectNull()
  /** Update block flag / Флаг блокировки обновления */
  protected block = false
  /** Debounce timer instance / Экземпляр таймера задержки */
  protected time?: ReturnType<typeof setTimeout>
  /** Reload debounce timer instance / Экземпляр таймера перезагрузки */
  protected reloadTimer?: ReturnType<typeof setTimeout>

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
      !hasKey(data, name)
      && defaultValue !== undefined
    ) {
      this.set(name, defaultValue)
    }

    return (
      hasKey(data, name)
        ? data[name]
        : undefined
    ) as T
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
    const data = this.getData()
    const value = executeFunction(callback)
    const currentValue = hasKey(data, name)
      ? data[name]
      : undefined

    if (value !== currentValue) {
      data[name] = value
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
    const list = this.watch[name]

    if (list) {
      list.push(callback as (value: unknown) => void)
    } else {
      this.watch[name] = [callback as (value: unknown) => void]
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
    const list = this.watch[name]

    if (list) {
      this.watch[name] = list.filter(item => item !== callback)
    }

    return this
  }

  /**
   * Destroys instance, clears timers and listeners.
   *
   * Уничтожает экземпляр, очищает таймеры и слушатели.
   * @returns this instance / текущий экземпляр
   */
  destroy(): this {
    clearTimeout(this.time)
    clearTimeout(this.reloadTimer)
    this.reloadTimer = undefined
    this.removeListener()

    return this
  }

  /**
   * Initializes the instance on first reload, then refreshes data from the URL.
   *
   * Инициализирует экземпляр при первой перезагрузке, затем обновляет данные из URL.
   * @returns this instance / текущий экземпляр
   */
  reload(): this {
    if (this.block) {
      clearTimeout(this.reloadTimer)
      this.reloadTimer = setTimeout(() => {
        this.reloadTimer = undefined
        this.reload()
      }, 32)
    } else {
      clearTimeout(this.reloadTimer)
      this.reloadTimer = undefined

      if (this.data) {
        this.initData()
      } else {
        this.init()
      }
    }

    return this
  }

  /**
   * Returns the query/hash data object, initializing if needed.
   *
   * Возвращает объект данных, инициализируя при необходимости.
   * @protected
   * @returns Record<string, unknown> data object / объект данных
   */
  protected getData(): Record<string, unknown> {
    if (!this.data) {
      this.init()
    }

    return this.data!
  }

  /**
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   * @protected
   * @returns parsed URL data object / разобранный объект данных URL
   */
  protected abstract getLocation(): Record<string, unknown>

  /**
   * Removes window event listeners.
   *
   * Удаляет слушатели событий окна.
   * @protected
   * @returns void / ничего не возвращает
   */
  protected abstract removeListener(): void

  /**
   * Update string in URL.
   *
   * Обновление строки в URL.
   * @protected
   * @returns this instance / текущий экземпляр
   */
  protected abstract update(): this

  /**
   * Initializes data and event listeners.
   *
   * Инициализирует данные и слушатели событий.
   * @protected
   * @returns this instance / текущий экземпляр
   */
  protected abstract init(): this

  /**
   * Publishes data read from the URL before notifying watchers.
   *
   * Публикует считанные из URL данные перед уведомлением наблюдателей.
   * @protected
   * @returns this instance / текущий экземпляр
   */
  protected initData(): this {
    const location = this.getLocation()
    const previousData = this.data

    this.data = location
    this.makeWatch(location, previousData)

    return this
  }

  /**
   * Calling all functions whose data has changed.
   *
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data / свежие данные
   * @param previousData state before publication / состояние до публикации
   * @protected
   * @returns this instance / текущий экземпляр
   */
  protected makeWatch(
    location: Record<string, unknown>,
    previousData: Record<string, unknown> | undefined
  ): this {
    forEach(this.watch, (item, name) => {
      const previousValue = previousData && hasKey(previousData, name)
        ? previousData[name]
        : undefined
      const nextValue = hasKey(location, name)
        ? location[name]
        : undefined

      if (previousValue !== nextValue) {
        item.forEach(callback => callback(nextValue))
      }
    })

    return this
  }
}
