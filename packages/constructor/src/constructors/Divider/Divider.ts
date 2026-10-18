import type { Ref } from 'vue'
import { type ConstrEmit, type DesignComp, type DesignName } from '@dxtmisha/functional'

import type { DividerComponents, DividerEmits, DividerSlots } from './types'
import type { DividerProps } from './props'

/**
 * Divider
 */
export class Divider {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param element input element/ элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: DividerProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComp<DividerComponents, DividerProps>,
    protected readonly slots?: DividerSlots,
    protected readonly emits?: ConstrEmit<DividerEmits>
  ) {
  }
}
