import type { ConstrBind } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ClockPeriodPropsInclude } from './basicTypes'
import type { ClockPeriodPropsBasic } from './props'
import type { ClockPeriodExpose, ClockPeriodSlots } from './types'

/**
 * Class for embedding the ClockPeriod component in other constructors.
 *
 * Класс для встраивания компонента ClockPeriod в другие конструкторы.
 */
export class ClockPeriodInclude extends ComponentIncludeAbstract<
  ClockPeriodPropsInclude,
  ClockPeriodPropsBasic,
  ClockPeriodExpose,
  ClockPeriodSlots
> {
  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected override readonly hasInitElement: boolean = false

  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'clockPeriod'

  /** Name of the property containing component attributes / Название свойства, содержащего атрибуты компонента */
  protected override readonly propsAttrsName = 'clockPeriodAttrs'

  /**
   * Builds and resolves bindings including the disabled prop from parent properties.
   *
   * Формирует и разрешает привязки, включая свойство disabled из свойств родителя.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<ClockPeriodPropsBasic>> {
    const props = this.getProps()
    const binds = super.toBinds()

    if (
      props.disabled !== undefined
      && binds.disabled === undefined
    ) {
      return {
        ...binds,
        disabled: props.disabled
      }
    }

    return binds
  }
}
