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
  /**
   * Initializes hash data and registers the hashchange listener.
   *
   * Инициализирует данные хэша и регистрирует слушатель hashchange.
   * @returns this instance / текущий экземпляр
   */
  protected init(): this {
    this.initData()

    if (isDomRuntime()) {
      addEventListener('hashchange', () => this.reload())
    }

    return this
  }

  /**
   * Obtaining data from the URL string.
   *
   * Получение данных из строки URL.
   * @returns Record<string, any> hash data / данные хэша
   */
  protected getLocation(): Record<string, any> {
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
