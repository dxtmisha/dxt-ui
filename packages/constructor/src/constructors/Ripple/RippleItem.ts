import { type Ref } from 'vue'
import { createElement } from '@dxtmisha/functional'

import type { RippleProps } from './props'

/**
 * Class for managing the ripple effect element.
 *
 * Класс для управления элементом эффекта свечения (ripple).
 */
export class RippleItem {
  /** CSS class name for the ripple item element / CSS-класс для элемента эффекта */
  protected readonly classItem: string
  /** CSS class name for the active ending state / CSS-класс для состояния завершения эффекта */
  protected readonly classEnd: string

  /** CSS variable name for the x-coordinate / Имя CSS-переменной для координаты X */
  protected readonly styleX: string
  /** CSS variable name for the y-coordinate / Имя CSS-переменной для координаты Y */
  protected readonly styleY: string

  /**
   * Constructor for creating a ripple item instance.
   *
   * Конструктор для создания экземпляра элемента эффекта.
   * @param props input properties / входные свойства
   * @param element span element containing the ripple effects / span-элемент, содержащий эффекты свечения
   * @param className base CSS class name / базовое имя CSS-класса
   */
  constructor(
    protected readonly props: RippleProps,
    protected readonly element: Ref<HTMLSpanElement | undefined>,
    protected readonly className: string
  ) {
    this.classItem = `${this.className}__item`
    this.classEnd = `${this.className}--end`

    this.styleX = `--${this.className}-sys-x`
    this.styleY = `--${this.className}-sys-y`
  }

  /**
   * Adding a new ripple element at the specified coordinates.
   *
   * Добавление нового элемента свечения по указанным координатам.
   * @param x x-coordinate / координата по оси X
   * @param y y-coordinate / координата по оси Y
   */
  add(x: number, y: number): void {
    if (this.props?.disabled) {
      return
    }

    const element = this.element.value

    if (element) {
      createElement<HTMLSpanElement>(element, 'span', (item) => {
        item.onanimationend = () => item.classList.add(this.classEnd)
        item.ontransitionend = () => item.parentElement?.removeChild(item)

        item.style.setProperty(this.styleX, `${x}px`)
        item.style.setProperty(this.styleY, `${y}px`)
        item.classList.add(this.classItem)
      })
    }
  }
}
