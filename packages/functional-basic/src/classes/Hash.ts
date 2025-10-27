import { executeFunction } from '../functions/executeFunction'
import { forEach } from '../functions/forEach'
import { getRequestString } from '../functions/getRequestString'
import { isDomRuntime } from '../functions/isDomRuntime'
import { transformation } from '../functions/transformation'

/**
 * Working with data stored in hash.
 *
 * Работа с данными сохраненными в хеш.
 */
export class Hash {
  private static hash: Record<string, any> = {}
  private static watch: Record<string, ((value: any) => void)[]> = {}
  private static block = false

  /**
   * Get data from hash.
   *
   * Получение данных из хэша.
   * @param name variable names/ названия переменных
   * @param defaultValue value or function to change data/ значение или функция для изменения данных
   */
  static get<T>(
    name: string,
    defaultValue?: T | (() => T)
  ): T {
    if (
      !(name in this.hash)
      && defaultValue
    ) {
      this.set(name, defaultValue)
    }

    return this.hash[name]
  }

  /**
   * Change data in hash.
   *
   * Изменение данных в хэше.
   * @param name variable names/ названия переменных
   * @param callback value or function to change data/ значение или функция для изменения данных
   */
  static set<T>(
    name: string,
    callback: T | (() => T)
  ): void {
    const value = executeFunction(callback)

    if (value !== this.hash?.[name]) {
      this.hash[name] = value
      this.update()
    }
  }

  /**
   * Adding an event when data is changed.
   *
   * Добавление события при изменении данных.
   * @param name variable names/ названия переменных
   * @param callback the function is called when the data is changed/ функция вызывается при изменении данных
   */
  static addWatch<T>(
    name: string,
    callback: (value: T) => void
  ): void {
    if (name in this.watch) {
      this.watch[name]?.push(callback)
    } else {
      this.watch[name] = [callback]
    }
  }

  /**
   * Update hash variable from URL string.
   *
   * Обновление переменной хэша из строки URL.
   */
  static reload(): void {
    if (!this.block) {
      const location = this.getLocation()

      this.makeWatch(location)
      this.hash = location
    }
  }

  /**
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   */
  private static getLocation(): Record<string, any> {
    const hash: Record<string, any> = {}

    location.hash.replace(
      /([\w-]+)[:=]([^;]+)/ig,
      (...item: string[]) => {
        hash[String(item[1])] = transformation(item[2])
        return ''
      }
    )

    return hash
  }

  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   */
  private static update(): void {
    this.block = true
    history.replaceState(null, '', `#${getRequestString(this.hash, '=', ';')}`)

    requestAnimationFrame(() => {
      this.block = false
    })
  }

  /**
   * Calling all functions whose data has changed.
   *
   * Вызов всех функций, у которых были изменены данные.
   * @param location fresh data/ свежий данные
   */
  private static makeWatch(location: Record<string, any>): void {
    forEach(this.watch, (item, name) => {
      if (this.hash?.[name] !== location?.[name]) {
        item.forEach(callback => callback(location[name]))
      }
    })
  }

  static {
    if (isDomRuntime()) {
      this.reload()
      addEventListener('hashchange', () => this.reload())
    }
  }
}
