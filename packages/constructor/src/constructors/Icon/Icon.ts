import type { ComputedRef, Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import type { IconComponents, IconEmits, IconSlots } from './types'
import type { IconProps } from './props'
import type { IconEventLoad } from './iconTypes.ts'

/**
 * Base class for working with icons.
 *
 * Базовый класс для работы с иконками.
 */
export class Icon {
  /**
   * Returns the property for the base icon/ Возвращает свойство для базовой иконки
   */
  readonly iconBind: ComputedRef<IconEventLoad['iconBind']>

  /**
   * Returns the property for the additional icon/ Возвращает свойство для дополнительной иконки
   */
  readonly iconActiveBind: ComputedRef<IconEventLoad['iconActiveBind']>

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: IconProps,
    protected readonly refs: ToRefs<IconProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly components?: DesignComp<IconComponents, IconProps>,
    protected readonly slots?: IconSlots,
    protected readonly emits?: ConstrEmit<IconEmits>
  ) {
  }
}
