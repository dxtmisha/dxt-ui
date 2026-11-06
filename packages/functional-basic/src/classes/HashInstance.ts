// ai-none

import { getRequestString } from '../functions/getRequestString'
import { isDomRuntime } from '../functions/isDomRuntime'
import { isPrototypeKey } from '../functions/isPrototypeKey'
import { transformation } from '../functions/transformation'
import { ErrorCenter } from './ErrorCenter'
import { UrlInstanceAbstract } from './UrlInstanceAbstract'

/** Regular expression for parsing key-value pairs in URL hash / Регулярное выражение для разбора пар ключ-значение в хеше URL */
const REGEXP_HASH_ITEM = /([^#;:=]+)[:=]([^;]+)/gi

/** Write block timeout in milliseconds / Таймаут блокировки записи в миллисекундах */
const HASH_BLOCK_TIMEOUT = 120

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
        } catch (error) {
          ErrorCenter.on({
            group: 'transformation',
            code: 'error',
            details: error
          })
        }

        if (isPrototypeKey(key)) {
          continue
        }

        try {
          value = decodeURIComponent(value)
        } catch (error) {
          ErrorCenter.on({
            group: 'transformation',
            code: 'error',
            details: error
          })
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
   * Updates the URL hash while preserving the current history entry state.
   *
   * Обновляет хэш URL, сохраняя состояние текущей записи истории.
   * @protected
   * @returns this instance / текущий экземпляр
   */
  protected update(): this {
    if (isDomRuntime()) {
      clearTimeout(this.time)
      this.block = true

      try {
        const data = this.getData()
        history.replaceState(history.state, '', `#${getRequestString(data, '=', ';')}`)
      } catch (error) {
        ErrorCenter.on({
          group: 'storage',
          code: 'error',
          details: error
        })
      } finally {
        this.time = setTimeout(() => {
          this.block = false
        }, HASH_BLOCK_TIMEOUT)
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
