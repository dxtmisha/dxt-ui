import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { ClockPeriodPropsInclude } from './basicTypes'
import type { ClockPeriodPropsBasic } from './props'
import type { ClockPeriodExpose } from './types'

/**
 * Class for embedding the ClockPeriod component in other constructors.
 *
 * Класс для встраивания компонента ClockPeriod в другие конструкторы.
 */
export class ClockPeriodInclude extends ComponentIncludeAbstract<
  ClockPeriodPropsInclude,
  ClockPeriodPropsBasic,
  ClockPeriodExpose,
  any
> {
  protected override readonly name = 'clockPeriod'
  protected override readonly propsAttrsName = 'clockPeriodAttrs'
  protected readonly hasInitElement: boolean = false
}
