import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import type { ConstructorsComponents, ConstructorsEmits, ConstructorsSlots } from './types'
import type { ConstructorsProps } from './props'

/**
 * Constructors
 */
export class Constructors {
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
    protected readonly props: ConstructorsProps,
    protected readonly refs: ToRefs<ConstructorsProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly components?: DesignComp<ConstructorsComponents, ConstructorsProps>,
    protected readonly slots?: ConstructorsSlots,
    protected readonly emits?: ConstrEmit<ConstructorsEmits>
  ) {
  }
}
