import { executeFunction } from '../functions/executeFunction'
import { forEach } from '../functions/forEach'
import { getRequestString } from '../functions/getRequestString'
import { isDomRuntime } from '../functions/isDomRuntime'
import { transformation } from '../functions/transformation'

/**
 * Class for working with data stored in the URL hash.
 *
 * Класс для работы с данными, сохранёнными в хеше URL.
 */
export class HashInstance {
  private hash?: Record<string, any>
  private watch: Record<string, ((value: any) => void)[]> = {}
  private block = false
  private time?: any

  /**
   * Get data from hash.
   *
   * Получение данных из хэша.
   * @param name variable name / название переменной
   * @param defaultValue value or function to change data / значение или функция для изменения данных
   * @returns stored value / сохранённое значение
   */
  get<T>(
    name: string,
    defaultValue?: T | (() => T)
  ): T {
    const hash = this.getHash()

    if (
      !(name in hash)
      && defaultValue
    ) {
      this.set(name, defaultValue)
    }

    return hash[name]
  }

  /**
   * Change data in hash.
   *
   * Изменение данных в хэше.
   * @param name variable name / название переменной
   * @param callback value or function to change data / значение или функция для изменения данных
   * @returns this instance / текущий экземпляр
   */
  set<T>(
    name: string,
    callback: T | (() => T)
  ): this {
    const value = executeFunction(callback)

    if (value !== this.hash?.[name]) {
      this.getHash()[name] = value
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
   * Update hash variable from URL string.
   *
   * Обновление переменной хэша из строки URL.
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
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   * @returns Record<string, any> hash data / данные хэша
   */
  private getLocation(): Record<string, any> {
    const hash: Record<string, any> = {}

    if (isDomRuntime()) {
      const matches = location.hash.matchAll(/([\w-]+)[:=]([^;]+)/ig)

      for (const match of matches) {
        hash[match[1]] = transformation(match[2])
      }
    }

    return hash
  }

  /**
   * Returns the hash object, initializing if needed.
   *
   * Возвращает объект хэша, инициализируя при необходимости.
   * @returns Record<string, any> hash object / объект хэша
   */
  private getHash(): Record<string, any> {
    if (!this.hash) {
      this.init()
    }

    return this.hash!
  }

  /**
   * Initializes hash data and registers the hashchange listener.
   *
   * Инициализирует данные хэша и регистрирует слушатель hashchange.
   * @returns this instance / текущий экземпляр
   */
  private init(): this {
    this.initData()

    if (isDomRuntime()) {
      addEventListener('hashchange', () => this.reload())
    }

    return this
  }

  /**
   * Reads hash data from the URL and triggers watchers.
   *
   * Считывает данные хэша из URL и вызывает наблюдателей.
   * @returns this instance / текущий экземпляр
   */
  private initData(): this {
    const location = this.getLocation()

    this.makeWatch(location)
    this.hash = location

    return this
  }

  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  private update(): this {
    if (isDomRuntime()) {
      clearTimeout(this.time)
      this.block = true

      try {
        const hash = this.getHash()
        history.replaceState(null, '', `#${getRequestString(hash, '=', ';')}`)
      } finally {
        this.time = setTimeout(() => {
          this.block = false
        }, 120)
      }
    }

    return this
  }

  /**
   * Calling all functions whose data has changed.
   *
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data / свежие данные
   */
  private makeWatch(location: Record<string, any>): this {
    forEach(this.watch, (item, name) => {
      if (this.hash?.[name] !== location?.[name]) {
        item.forEach(callback => callback(location[name]))
      }
    })

    return this
  }
}
