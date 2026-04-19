import { createElement } from '../functions/createElement'
import { isDomRuntime } from '../functions/isDomRuntime'

import { DataStorage } from './DataStorage'

/**
 * Class for getting the scroll width.
 *
 * Класс для получения ширины скролла.
 */
export class ScrollbarWidth {
  private static calculate: boolean = false

  /**
   * Checks whether to enable scroll hiding.
   *
   * Проверяет, надо ли включить скрытие скролла.
   * @returns boolean indicating if scroll hiding is enabled/ логическое значение, указывающее, включено ли скрытие скролла
   */
  static async is(): Promise<boolean> {
    const width = await this.get()

    return width !== -1 && width <= 8
  }

  /**
   * Returns the width of the scroll.
   *
   * Возвращает ширину скролла.
   * @returns scrollbar width in pixels/ ширина скролла в пикселях
   */
  static async get(): Promise<number> {
    if (!isDomRuntime()) {
      return 0
    }

    const width = this.getStorage().get() ?? -1

    if (
      !this.calculate
      && width === -1
    ) {
      const newWidth = await this.init()

      this.getStorage().set(newWidth)
      return newWidth
    }

    return width
  }

  /**
   * Returns the storage for scroll width.
   *
   * Возвращает хранилище для ширины скролла.
   * @returns DataStorage instance/ экземпляр DataStorage
   */
  static getStorage(): DataStorage<number> {
    return new DataStorage<number>('__ui:scrollbar__', true)
  }

  /**
   * Returns the calculate flag, indicating if width calculation is in progress.
   *
   * Возвращает флаг вычисления, указывающий, идет ли расчет ширины.
   * @returns calculation flag/ флаг вычисления
   */
  static getCalculate(): boolean {
    return this.calculate
  }

  /**
   * Creates elements to check the width of the scroll.
   *
   * Создает элементы для проверки ширины скролла.
   * @returns created element / созданный элемент
   */
  private static createElement(): HTMLDivElement | undefined {
    return createElement<HTMLDivElement>(document.body, 'div', (element) => {
      element.style.height = '24px'
      element.style.overflowY = 'scroll'
      element.style.position = 'fixed'
      element.style.width = '100%'

      createElement(element, 'div', (element) => {
        element.style.height = '100px'
      })
    })
  }

  /**
   * Initialization of data to check the width of the scroll.
   *
   * Инициализация данных для проверки ширины скролла.
   * @returns a promise that resolves with the scrollbar width / промис, который разрешается шириной скролла
   */
  private static init(): Promise<number> {
    return new Promise((resolve) => {
      this.calculate = true
      const element = this.createElement()

      if (element) {
        requestAnimationFrame(() => {
          resolve(element.offsetWidth - element.clientWidth)

          element.remove()
          this.calculate = false
        })
      } else {
        resolve(0)
      }
    })
  }
}
