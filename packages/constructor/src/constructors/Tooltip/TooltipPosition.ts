// ai-none

import type { Ref } from 'vue'
import { isDomRuntime } from '@dxtmisha/functional'

import type { TooltipClassesData } from './TooltipClassesData'
import type { TooltipStyle } from './TooltipStyle'

import type { TooltipProps } from './props'

/**
 * A class for working with position.
 *
 * Класс для работы с позицией.
 */
export class TooltipPosition {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param element instance of the element itself / экземпляр самого элемента
   * @param classesData function returning class names manager / функция, возвращающая менеджер имен классов
   * @param style function returning style manager / функция, возвращающая менеджер стилей
   */
  constructor(
    protected readonly props: Readonly<TooltipProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classesData: () => TooltipClassesData,
    protected readonly style: () => TooltipStyle
  ) {
  }

  /**
   * Update all sizes.
   *
   * Обновить все размеры.
   */
  update(): void {
    if (!isDomRuntime()) {
      return
    }

    const element = this.element.value
    const control = this.classesData().findControl()

    if (
      element
      && control
    ) {
      const controlRect = control.getBoundingClientRect()
      const tooltipRect = element.getBoundingClientRect()
      const indent = this.getIndent()

      const top = this.isTop(controlRect, tooltipRect)
      const x = controlRect.left + (controlRect.width / 2) - (tooltipRect.width / 2)
      const y = top ? controlRect.top - tooltipRect.height - indent : controlRect.bottom + indent

      let shift = 0

      if (x < 0) {
        shift = 0 - x
      } else if (x + tooltipRect.width > window.innerWidth) {
        shift = window.innerWidth - (x + tooltipRect.width)
      }

      this.style().set(
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
   * @param controlRect the current position of the control element / данное положение элемента контроля
   * @param tooltipRect the current position of the element itself / данное положение самого элемента
   * @returns true if displayed on top / true, если отображается сверху
   */
  protected isTop(
    controlRect: DOMRect,
    tooltipRect: DOMRect
  ): boolean {
    const indent = this.getIndent()

    return Boolean(
      (this.props.top && controlRect.top - tooltipRect.height - indent >= 0)
      || (controlRect.bottom + tooltipRect.height + indent > window.innerHeight)
    )
  }

  /**
   * Returns the margins for the element.
   *
   * Возвращает отступы для элемента.
   * @returns indent value in pixels / значение отступа в пикселях
   */
  protected getIndent(): number {
    return this.props.indent ?? 0
  }
}
