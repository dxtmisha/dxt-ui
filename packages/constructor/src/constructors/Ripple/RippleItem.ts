import { type Ref } from 'vue'
import { createElement } from '@dxtmisha/functional'

import type { RippleProps } from './props'

/**
 * Class for managing the effect element.
 *
 * Класс для управления элементом эффекта.
 */
export class RippleItem {
  protected readonly classItem: string
  protected readonly classEnd: string

  protected readonly styleX: string
  protected readonly styleY: string

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element image element for scaling/ элемент изображения для масштабирования
   * @param className list of available classes/ список доступных классов
   */

  constructor(
    protected readonly props: RippleProps,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly className: string
  ) {
    this.classItem = `${this.className}__item`
    this.classEnd = `${this.className}--end`

    this.styleX = `--${this.className}-sys-x`
    this.styleY = `--${this.className}-sys-y`
  }

  /**
   * Adding a new light element.
   *
   * Добавление нового элемента свечения.
   * @param x x-coordinate/ x-координата
   * @param y y-coordinate/ y-координата
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
