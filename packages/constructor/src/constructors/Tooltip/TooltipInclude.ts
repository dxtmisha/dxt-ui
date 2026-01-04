import { computed, ref, type VNode } from 'vue'
import {
  type ConstrBind,
  DesignComponents,
  getRef,
  type RefOrNormal,
  toBinds
} from '@dxtmisha/functional'

import type { TooltipComponentInclude, TooltipPropsInclude } from './basicTypes'
import type { TooltipExpose } from './types'
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
export class TooltipInclude<
  Props extends TooltipPropsInclude = TooltipPropsInclude,
  PropsExtra extends ConstrBind<TooltipProps> = ConstrBind<TooltipProps>
> {
  readonly element = ref<TooltipExpose>()

  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<TooltipComponentInclude, Props>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /** Computed bindings for the tooltip/ Вычисляемые привязки для подсказки */
  readonly binds = computed<PropsExtra>(() => {
    return toBinds<PropsExtra>(
      getRef(this.extra),
      this.props.tooltipAttrs,
      {
        ref: this.element,
        class: `${this.className}__tooltip`
      }
    )
  })

  /**
   * Render the Tooltip component
   *
   * Рендер компонента подсказки
   */
  readonly render = (): VNode[] => {
    if (this.components) {
      return this.components.render(
        'tooltip',
        this.binds.value,
        undefined,
        this.index
      )
    }

    return []
  }

  /**
   * Get the tooltip element.
   *
   * Получить элемент подсказки.
   */
  getElement(): TooltipExpose | undefined {
    return this.element.value
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
   * @param open open status/ статус открытия
   */
  toggle(open: boolean): void {
    this.getElement()?.toggle(open)
  }
}
