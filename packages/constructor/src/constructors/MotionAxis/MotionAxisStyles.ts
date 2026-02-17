import type { Ref } from 'vue'

import { MotionAxisSelected } from './MotionAxisSelected'

/**
 * Class for managing style properties.
 *
 * Класс для управления свойствами стилей.
 */
export class MotionAxisStyles {
  /**
   * Constructor
   * @param element window element / элемент окна
   * @param className class name / название класса
   * @param selected class object for managing the active element / объект класса для управления активным элементом
   */
  constructor(
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly className: string | string[],
    protected readonly selected: MotionAxisSelected
  ) {
  }

  /**
   * Adding styles for animation.
   *
   * Добавление стилей для анимации.
   * @param slide slide title / название слайда
   */
  add(
    slide?: string
  ): void {
    const element = this.element.value

    if (
      slide
      && element
    ) {
      const elementRect = element.getBoundingClientRect()

      const itemRect = element.querySelector(`[data-key="${slide}"]`)
        ?.getBoundingClientRect()

      if (
        elementRect
        && itemRect
      ) {
        element.style.setProperty(`--${this.className}-sys-top`, `${itemRect.top - elementRect.top}px`)
        element.style.setProperty(`--${this.className}-sys-left`, `${itemRect.left - elementRect.left}px`)
        element.style.setProperty(`--${this.className}-sys-width`, `${itemRect.width}px`)
        element.style.setProperty(`--${this.className}-sys-height`, `${itemRect.height}px`)
      }
    }
  }

  /**
   * Adding styles for the next element.
   *
   * Добавление стилей для следующего элемента.
   */
  addNext() {
    const element = this.element.value

    if (element) {
      const itemRect = element
        ?.querySelector(`[data-key="${this.selected.item.value}"]`)
        ?.getBoundingClientRect()

      if (itemRect) {
        element.style.setProperty(`--${this.className}-sys-next-height`, `${itemRect?.height ?? '0'}px`)
      }
    }
  }

  /**
   * Removing animation styles.
   *
   * Удаление стилей анимации.
   */
  remove() {
    const element = this.element.value

    if (element) {
      element.style.removeProperty(`--${this.className}-sys-top`)
      element.style.removeProperty(`--${this.className}-sys-left`)
      element.style.removeProperty(`--${this.className}-sys-width`)
      element.style.removeProperty(`--${this.className}-sys-height`)
      element.style.removeProperty(`--${this.className}-sys-next-height`)
    }
  }
}
