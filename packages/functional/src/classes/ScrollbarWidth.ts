import { computed, ref } from 'vue'
import { createElement } from '../functions/createElement'

import { DataStorage } from './DataStorage'

/**
 * Class for getting the scroll width.
 *
 * Класс для получения ширины скролла.
 */
export class ScrollbarWidth {
  private static storage = new DataStorage<number>('scrollbar', true)
  private static calculate = false

  readonly item = ref<boolean>()

  /**
   * Constructor
   */
  constructor() {
    ScrollbarWidth.is().then((is) => {
      this.item.value = is
    })
  }

  readonly is = computed<boolean>(() => this.item.value !== undefined)

  /**
   * Checks whether to enable scroll hiding.
   *
   * Проверяет, надо ли включить скрытие скролла.
   */
  static async is(): Promise<boolean> {
    const width = await this.get()

    return width !== -1 && width <= 8
  }

  /**
   * Returns the width of the scroll.
   *
   * Возвращает ширину скролла.
   */
  static async get(): Promise<number> {
    const width = this.storage.get() ?? -1

    if (
      !this.calculate
      && width === -1
    ) {
      const newWidth = await this.init()

      this.storage.set(newWidth)
      return newWidth
    }

    return width
  }

  /**
   * Creates elements to check the width of the scroll.
   *
   * Создает элементы для проверки ширины скролла.
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
