// ai-none

import { isDomRuntime } from '../functions/isDomRuntime'
import { ErrorCenter } from './ErrorCenter'
import { UrlInstanceAbstract } from './UrlInstanceAbstract'
import { UrlItem } from './UrlItem'

/** Write block timeout in milliseconds / Таймаут блокировки записи в миллисекундах */
const QUERY_BLOCK_TIMEOUT = 120

/**
 * Class for working with data stored in the URL query parameters.
 *
 * Класс для работы с данными, сохранёнными в query-параметрах URL.
 */
export class QueryInstance extends UrlInstanceAbstract {
  /** Popstate event listener / Слушатель события popstate */
  protected readonly listener = (): void => {
    UrlItem.getInstance().set()
    this.reload()
  }

  /**
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   * @protected
   * @returns Record<string, unknown> query data / данные query-параметров
   */
  protected getLocation(): Record<string, unknown> {
    if (isDomRuntime()) {
      UrlItem.getInstance().set()
    }

    return UrlItem.getInstance().getParams()
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
      removeEventListener('popstate', this.listener)
    }
  }

  /**
   * Updates the URL query string while preserving the current history entry state.
   *
   * Обновляет строку query-параметров в URL, сохраняя состояние текущей записи истории.
   * @protected
   * @returns this instance / текущий экземпляр
   */
  protected update(): this {
    const data = this.getData()
    const urlItem = UrlItem.getInstance()

    urlItem.setParams(data)

    if (isDomRuntime()) {
      clearTimeout(this.time)
      this.block = true

      try {
        const search = urlItem.search
        const newUrl = `${location.pathname}${search}${location.hash}`
        history.replaceState(history.state ?? null, '', newUrl)
      } catch (error) {
        ErrorCenter.on({
          group: 'storage',
          code: 'error',
          details: error
        })
      } finally {
        this.time = setTimeout(() => {
          this.block = false
        }, QUERY_BLOCK_TIMEOUT)
      }
    }

    return this
  }

  /**
   * Initializes query data and registers the popstate listener.
   *
   * Инициализирует данные query-параметров и регистрирует слушатель popstate.
   * @protected
   * @returns this instance / текущий экземпляр
   */
  protected init(): this {
    if (isDomRuntime()) {
      addEventListener('popstate', this.listener)
    }

    this.initData()
    return this
  }
}
