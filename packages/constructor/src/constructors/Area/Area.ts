import { type Ref } from 'vue'
import { type ConstrEmit, type DesignComp, type DesignName } from '@dxtmisha/functional'
import { getAreaValue } from '../../functions/getAreaValue'

import type { AreaComponents, AreaEmits, AreaSlots } from './types'
import type { AreaProps } from './props'

/**
 * Area
 */
export class Area {
  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: AreaProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComp<AreaComponents, AreaProps>,
    protected readonly slots?: AreaSlots,
    protected readonly emits?: ConstrEmit<AreaEmits>
  ) {
  }

  /** The property of the current area value / Свойство текущего значения области */
  get area(): string | undefined {
    return getAreaValue() ?? this.props.areaDefault
  }
}
