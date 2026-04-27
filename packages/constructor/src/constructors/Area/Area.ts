import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'
import { getAreaValue } from '../../functions/getAreaValue'

import type { AreaComponents, AreaEmits, AreaSlots } from './types'
import type { AreaProps } from './props'

/**
 * Area
 */
export class Area {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: AreaProps,
    protected readonly refs: ToRefs<AreaProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<AreaComponents, AreaProps>,
    protected readonly slots?: AreaSlots,
    protected readonly emits?: ConstrEmit<AreaEmits>
  ) {
  }

  /** The property of the current area value/ Свойство текущего значения области */
  readonly area = computed<string | undefined>(() => getAreaValue() ?? this.props.areaDefault)
}
