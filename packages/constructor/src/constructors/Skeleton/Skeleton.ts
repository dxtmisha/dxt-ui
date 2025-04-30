import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import type { SkeletonComponents, SkeletonEmits, SkeletonSlots } from './types'
import type { SkeletonProps } from './props'

/**
 * Skeleton
 */
export class Skeleton {
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
    protected readonly props: SkeletonProps,
    protected readonly refs: ToRefs<SkeletonProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly components?: DesignComp<SkeletonComponents, SkeletonProps>,
    protected readonly slots?: SkeletonSlots,
    protected readonly emits?: ConstrEmit<SkeletonEmits>
  ) {
  }
}
