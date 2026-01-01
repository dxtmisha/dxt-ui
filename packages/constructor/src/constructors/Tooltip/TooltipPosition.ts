import { type Ref } from 'vue'

import { TooltipClasses } from './TooltipClasses'
import { TooltipStyle } from './TooltipStyle'

import type { TooltipProps } from './props'

/**
 * A class for working with position.
 *
 * Класс для работы с позицией.
 */
export class TooltipPosition {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element instance of the element itself/ экземпляр самого элемента
   * @param classes object for working with the class/ объект для работы с классом
   * @param style object for working with styles/ объект для работы со стилями
   */
  constructor(
    protected readonly props: Readonly<TooltipProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classes: TooltipClasses,
    protected readonly style: TooltipStyle
  ) {
  }

  /**
   * Update all sizes.
   *
   * Обновить все размеры.
   */
  update() {
    const element = this.element.value
    const control = this.classes.findControl()

    if (
      element
      && control
    ) {
      const rect = control.getBoundingClientRect()
      const tooltipRect = element.getBoundingClientRect()
      const indent = this.getIndent()

      const top = this.isTop(rect, tooltipRect)
      const x = rect.left + (rect.width / 2) - (tooltipRect.width / 2)
      const y = top ? rect.top - tooltipRect.height - indent : rect.bottom + indent

      let shift = 0

      if (x < 0) {
        shift = 0 - x
      } else if (x + tooltipRect.width > window.innerWidth) {
        shift = window.innerWidth - (x + tooltipRect.width)
      }

      this.style.set(
        top,
        x,
        y,
        shift
      )
    }
  }

  /**
   * Checks whether the element should be displayed on top.
   *
   * Проверяет, надо ли отображать элемент сверху.
   * @param rect the current position of the control element/ данное положение элемента контроля
   * @param tooltipRect the current position of the element itself/ данное положение самого элемента
   */
  protected isTop(
    rect: DOMRect,
    tooltipRect: DOMRect
  ) {
    const indent = this.getIndent()

    return (this.props.top && rect.top - tooltipRect.height - indent >= 0)
      || (rect.bottom + tooltipRect.height + indent > window.innerHeight)
  }

  /**
   * Returns the margins for the element.
   *
   * Возвращает отступы для элемента.
   */
  protected getIndent(): number {
    return this.props.indent ?? 0
  }
}
