// ai-none

import { isDomRuntime } from '../functions/isDomRuntime'
import { UrlInstanceAbstract } from './UrlInstanceAbstract'
import { UrlItem } from './UrlItem'

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
   * Initializes query data and registers the popstate listener.
   *
   * Инициализирует данные query-параметров и регистрирует слушатель popstate.
   * @returns this instance / текущий экземпляр
   */
  protected init(): this {
    if (isDomRuntime()) {
      addEventListener('popstate', this.listener)
    }

    this.initData()
    return this
  }

  /**
   * Removes window event listeners.
   *
   * Удаляет слушатели событий окна.
   */
  protected removeListener(): void {
    if (isDomRuntime()) {
      removeEventListener('popstate', this.listener)
    }
  }

  /**
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   * @returns Record<string, unknown> query data / данные query-параметров
   */
  protected getLocation(): Record<string, unknown> {
    if (isDomRuntime()) {
      UrlItem.getInstance().set()
    }

    return UrlItem.getInstance().getParams()
  }

  /**
   * Update query string in URL.
   *
   * Обновление строки query-параметров в URL.
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
        history.replaceState(null, '', newUrl)
      } finally {
        this.time = setTimeout(() => {
          this.block = false
        }, 120)
      }
    }

    return this
  }
}
