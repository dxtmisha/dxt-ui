import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import type { SliderFieldComponents, SliderFieldEmits, SliderFieldSlots } from './types'
import type { SliderFieldProps } from './props'

/**
 * SliderField
 */
export class SliderField {
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
    protected readonly props: SliderFieldProps,
    protected readonly refs: ToRefs<SliderFieldProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SliderFieldComponents, SliderFieldProps>,
    protected readonly slots?: SliderFieldSlots,
    protected readonly emits?: ConstrEmit<SliderFieldEmits>
  ) {
  }
}
