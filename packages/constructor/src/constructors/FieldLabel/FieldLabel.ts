import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import { LabelInclude } from '../../classes/LabelInclude'
import { FieldCounterInclude } from '../FieldCounter'
import { ProgressInclude } from '../Progress'

import type { FieldLabelComponents, FieldLabelEmits, FieldLabelSlots } from './types'
import type { FieldLabelProps } from './props'

/**
 * FieldLabel
 */
export class FieldLabel {
  /** Label include/ Подключение метки */
  readonly label: LabelInclude

  /** Field counter include/ Подключение счетчика поля */
  readonly fieldCounter: FieldCounterInclude<FieldLabelProps>

  /** Progress include/ Подключение прогресса */
  readonly progress: ProgressInclude

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
    protected readonly props: FieldLabelProps,
    protected readonly refs: ToRefs<FieldLabelProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<FieldLabelComponents, FieldLabelProps>,
    protected readonly slots?: FieldLabelSlots,
    protected readonly emits?: ConstrEmit<FieldLabelEmits>
  ) {
    this.label = new LabelInclude(
      this.props,
      this.className,
      undefined,
      this.slots
    )

    this.fieldCounter = new FieldCounterInclude(
      this.props,
      this.className,
      this.components
    )

    this.progress = new ProgressInclude(
      this.props,
      this.className,
      this.components,
      {
        circular: true,
        position: 'static',
        dense: true
      }
    )
  }
}
