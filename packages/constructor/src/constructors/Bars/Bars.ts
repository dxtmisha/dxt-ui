import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import { LabelInclude } from '../../classes/LabelInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { WindowClassesInclude } from '../Window'

import type { BarsComponents, BarsEmits, BarsSlots } from './types'
import type { BarsPropsBasic } from './props'

/**
 * Bars
 */
export class Bars {
  readonly label: LabelInclude
  readonly description: DescriptionInclude

  readonly event: EventClickInclude

  readonly windowClasses: WindowClassesInclude

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
    protected readonly props: BarsPropsBasic,
    protected readonly refs: ToRefs<BarsPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<BarsComponents, BarsPropsBasic>,
    protected readonly slots?: BarsSlots,
    protected readonly emits?: ConstrEmit<BarsEmits>
  ) {
    this.label = new LabelInclude({ label: this.props.actionLabel }, className, undefined, slots)
    this.description = new DescriptionInclude({ description: this.props.actionDescription }, className, slots)

    this.event = new EventClickInclude({}, undefined, emits)

    this.windowClasses = new WindowClassesInclude(classDesign)
  }
}
