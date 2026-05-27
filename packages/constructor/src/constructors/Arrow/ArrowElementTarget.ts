import { ref } from 'vue'
import { isFilled, isString } from '@dxtmisha/functional'

import type { ArrowProps } from './props'

/**
 * Class for working with the target element of the arrow.
 * It manages searching for and obtaining coordinates of the element the arrow points to.
 *
 * Класс для работы с целевым элементом стрелки.
 * Управляет поиском и получением координат элемента, на который указывает стрелка.
 */
export class ArrowElementTarget {
  /** Target element / Целевой элемент */
  readonly element = ref<HTMLElement | undefined>()

  /**
   * Constructor
   * @param props input properties / входящие свойства
   */
  constructor(
    protected readonly props: ArrowProps
  ) {
  }

  /**
   * Checks that the element exists.
   *
   * Проверяет, что элемент существует.
   * @returns element existence status / статус существования элемента
   */
  is(): boolean {
    return this.element.value !== undefined
  }

  /**
   * Gets the element's bounding rectangle.
   *
   * Получает ограничивающий прямоугольник элемента.
   * @returns bounding rectangle or undefined / ограничивающий прямоугольник или undefined
   */
  getRect(): DOMRect | undefined {
    return this.element.value?.getBoundingClientRect()
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
   * @returns target element or undefined / целевой элемент или undefined
   */
  protected initElement(): HTMLElement | undefined {
    const elementTarget = this.props.elementTarget

    if (
      this.props.position === 'auto'
      && isFilled(elementTarget)
    ) {
      if (isString(elementTarget)) {
        return document.querySelector<HTMLElement>(elementTarget) ?? undefined
      }

      return elementTarget
    }

    return undefined
  }
}
