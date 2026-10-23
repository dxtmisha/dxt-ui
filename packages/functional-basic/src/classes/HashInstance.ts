// ai-none

import { isDomRuntime } from '../functions/isDomRuntime'
import { transformation } from '../functions/transformation'
import { getRequestString } from '../functions/getRequestString'
import { UrlInstanceAbstract } from './UrlInstanceAbstract'

/**
 * Class for working with data stored in the URL hash.
 *
 * Класс для работы с данными, сохранёнными в хеше URL.
 */
export class HashInstance extends UrlInstanceAbstract {
  /** Hash change listener / Слушатель изменения хэша */
  protected readonly listener = (): this => this.reload()

  /**
   * Initializes hash data and registers the hashchange listener.
   *
   * Инициализирует данные хэша и регистрирует слушатель hashchange.
   * @returns this instance / текущий экземпляр
   */
  protected init(): this {
    this.initData()

    if (isDomRuntime()) {
      addEventListener('hashchange', this.listener)
    }

    return this
  }

  /**
   * Removes window event listeners.
   *
   * Удаляет слушатели событий окна.
   */
  protected removeListener(): void {
    if (isDomRuntime()) {
      removeEventListener('hashchange', this.listener)
    }
  }

  /**
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   * @returns Record<string, unknown> hash data / данные хэша
   */
  protected getLocation(): Record<string, unknown> {
    const hash: Record<string, unknown> = {}

    if (isDomRuntime()) {
      const matches = location.hash.matchAll(/([^#;:=]+)[:=]([^;]+)/ig)

      for (const match of matches) {
        try {
          hash[decodeURIComponent(match[1])] = transformation(decodeURIComponent(match[2]))
        } catch {
          hash[match[1]] = transformation(match[2])
        }
      }
    }

    return hash
  }

  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   * @returns this instance / текущий экземпляр
   */
  protected update(): this {
    if (isDomRuntime()) {
      clearTimeout(this.time)
      this.block = true

      try {
        const data = this.getData()
        history.replaceState(null, '', `#${getRequestString(data, '=', ';')}`)
      } finally {
        this.time = setTimeout(() => {
          this.block = false
        }, 120)
      }
    }

    return this
  }
}
