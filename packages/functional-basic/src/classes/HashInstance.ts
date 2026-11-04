// ai-none

import { getRequestString } from '../functions/getRequestString'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isPrototypeKey } from '../functions/isPrototypeKey'
import { transformation } from '../functions/transformation'
import { UrlInstanceAbstract } from './UrlInstanceAbstract'

/** Regular expression for parsing key-value pairs in URL hash / Регулярное выражение для разбора пар ключ-значение в хеше URL */
const REGEXP_HASH_ITEM = /([^#;:=]+)[:=]([^;]+)/gi

/**
 * Class for working with data stored in the URL hash.
 *
 * Класс для работы с данными, сохранёнными в хеше URL.
 */
export class HashInstance extends UrlInstanceAbstract {
  /** Hash change listener / Слушатель изменения хэша */
  protected readonly listener = (): this => this.reload()

  /**
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   * @protected
   * @returns Record<string, unknown> hash data / данные хэша
   */
  protected getLocation(): Record<string, unknown> {
    const hash: Record<string, unknown> = {}

    if (isDomRuntime()) {
      const matches = location.hash.matchAll(REGEXP_HASH_ITEM)

      for (const match of matches) {
        let key = match[1]
        let value = match[2]

        try {
          key = decodeURIComponent(key)
        } catch {
          // Keep raw key if URI sequence is malformed
        }

        if (isPrototypeKey(key)) {
          continue
        }

        try {
          value = decodeURIComponent(value)
        } catch {
          // Keep raw value if URI sequence is malformed
        }

        hash[key] = transformation(value)
      }
    }

    return hash
  }

  /**
   * Removes window event listeners.
   *
   * Удаляет слушатели событий окна.
   * @protected
   * @returns void / ничего не возвращает
   */
  protected removeListener(): void {
    if (isDomRuntime()) {
      removeEventListener('hashchange', this.listener)
    }
  }

  /**
   * Update hash string in URL.
   *
   * Обновление строки хэша в URL.
   * @protected
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

  /**
   * Initializes hash data and registers the hashchange listener.
   *
   * Инициализирует данные хэша и регистрирует слушатель hashchange.
   * @protected
   * @returns this instance / текущий экземпляр
   */
  protected init(): this {
    this.initData()

    if (isDomRuntime()) {
      addEventListener('hashchange', this.listener)
    }

    return this
  }
}
