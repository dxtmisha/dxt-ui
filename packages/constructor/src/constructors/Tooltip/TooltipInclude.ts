import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { TooltipPropsInclude } from './basicTypes'
import type { TooltipExpose, TooltipSlots } from './types'
import type { TooltipProps } from './props'

/**
 * TooltipInclude class provides functionality for conditionally rendering tooltip components
 * within other components. It manages the logic for determining when to display tooltip
 * and configures the appropriate properties.
 *
 * Класс TooltipInclude предоставляет функциональность для условного рендеринга компонентов
 * подсказки внутри других компонентов. Он управляет логикой определения необходимости
 * отображения подсказки и настраивает соответствующие свойства.
 */
export class TooltipInclude extends ComponentIncludeAbstract<
  TooltipPropsInclude,
  TooltipProps,
  TooltipExpose,
  TooltipSlots
> {
  /** Component sub-name / Дополнительное имя компонента */
  protected readonly name = 'tooltip'
  /** Property name for attributes / Имя свойства для атрибутов */
  protected readonly propsAttrsName = 'tooltipAttrs'

  /**
   * Get the tooltip element.
   *
   * Получить элемент подсказки.
   * @returns tooltip element or undefined / элемент подсказки или undefined
   */
  getElement(): TooltipExpose | undefined {
    return this.element.value as TooltipExpose | undefined
  }

  /**
   * Open the tooltip.
   *
   * Открыть подсказку.
   */
  open() {
    this.toggle(true)
  }

  /**
   * Close the tooltip.
   *
   * Закрыть подсказку.
   */
  close() {
    this.toggle(false)
  }

  /**
   * Toggle the tooltip.
   *
   * Переключить подсказку.
   * @param open open status / статус открытия
   */
  toggle(open: boolean): void {
    this.getElement()?.toggle(open)
  }

  protected toBinds() {
    const props = this.getProps()

    return {
      ...super.toBinds(),

      label: props.tooltipLabel,
      description: props.tooltipDescription
    }
  }
}
