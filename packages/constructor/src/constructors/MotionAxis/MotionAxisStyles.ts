import type { Ref } from 'vue'

import { MotionAxisSelected } from './MotionAxisSelected'

/**
 * Class for managing dynamic CSS variables and layout coordinates for transition slides.
 * It measures slide rectangles and sets custom properties for animations on the component container.
 *
 * Класс для управления динамическими CSS-переменными и координатами макета переходных слайдов.
 * Измеряет прямоугольники слайдов и устанавливает пользовательские свойства для анимации на контейнере компонента.
 */
export class MotionAxisStyles {
  /**
   * Constructor for initializing style coordinators.
   *
   * Конструктор для инициализации координаторов стилей.
   * @param element window element / элемент окна
   * @param className class name / название класса
   * @param selected class object for managing the active element / объект класса для управления активным элементом
   */
  constructor(
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly className: string,
    protected readonly selected: MotionAxisSelected
  ) {
  }

  /**
   * Calculates boundaries of the outgoing slide and sets absolute offset variables.
   *
   * Вычисляет границы уходящего слайда и устанавливает переменные абсолютного смещения.
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
   * Calculates boundaries of the incoming slide and sets next element transition height variable.
   *
   * Вычисляет границы входящего слайда и устанавливает переменную высоты перехода следующего элемента.
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
   * Cleans up and removes all dynamic transition CSS variables from component style sheet.
   *
   * Очищает и удаляет все динамические CSS-переменные переходов из таблицы стилей компонента.
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
