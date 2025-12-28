import { ref } from 'vue'
import { isDomRuntime, isFilled, isString } from '@dxtmisha/functional'

import type { ArrowCenter } from './basicTypes'
import type { ArrowProps } from './props'

/**
 * Class for working with the target element.
 *
 * Класс для работы с целевым элементом.
 */
export class ArrowElementTarget {
  readonly element = ref<HTMLElement | undefined>()

  /**
   * Constructor
   * @param props input properties/ входящие свойства
   */
  constructor(
    protected readonly props: ArrowProps
  ) {
  }

  /**
   * Checks that the element exists.
   *
   * Проверяет, что элемент существует.
   */
  is(): boolean {
    return this.element.value !== undefined
  }

  /**
   * Gets the element's bounding rectangle.
   *
   * Получает ограничивающий прямоугольник элемента.
   */
  getRect(): DOMRect | undefined {
    return this.element.value?.getBoundingClientRect()
  }

  /**
   * Gets the center coordinates of the element.
   *
   * Получает координаты центра элемента.
   */
  getCenter(): ArrowCenter | undefined {
    const rect = this.getRect()

    if (rect) {
      return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      }
    }

    return undefined
  }

  /**
   * Updates the target element.
   *
   * Обновляет целевой элемент.
   */
  update(): void {
    this.element.value = this.initElement()
  }

  /**
   * Initializes the target element.
   *
   * Инициализирует целевой элемент.
   */
  protected initElement(): HTMLElement | undefined {
    const elementTarget = this.props.elementTarget

    if (
      this.props.position === 'auto'
      && isFilled(elementTarget)
      && isDomRuntime()
    ) {
      if (isString(elementTarget)) {
        return document.querySelector<HTMLElement>(elementTarget) ?? undefined
      }

      return elementTarget
    }

    return undefined
  }
}
