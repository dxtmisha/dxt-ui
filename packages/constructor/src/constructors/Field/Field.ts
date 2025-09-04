import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import type { FieldComponents, FieldEmits, FieldSlots } from './types'
import type { FieldProps } from './props'

/**
 * Field
 */
export class Field {
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
    protected readonly props: FieldProps,
    protected readonly refs: ToRefs<FieldProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<FieldComponents, FieldProps>,
    protected readonly slots?: FieldSlots,
    protected readonly emits?: ConstrEmit<FieldEmits>
  ) {
  }
}
