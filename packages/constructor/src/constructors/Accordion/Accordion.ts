import { ref, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp } from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { MotionTransformInclude } from '../MotionTransform'
import { ModelInclude } from '../../classes/ModelInclude'

import type { AccordionComponents, AccordionEmits, AccordionSlots } from './types'
import type { AccordionProps } from './props'

/**
 * Accordion
 */
export class Accordion {
  readonly motionTransform: MotionTransformInclude

  readonly event: EventClickInclude

  readonly open = ref<boolean>(false)
  readonly model: ModelInclude<boolean>

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
    protected readonly props: AccordionProps,
    protected readonly refs: ToRefs<AccordionProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<AccordionComponents, AccordionProps>,
    protected readonly slots?: AccordionSlots,
    protected readonly emits?: ConstrEmit<AccordionEmits>
  ) {
    this.motionTransform = new MotionTransformInclude(
      this.props,
      this.className,
      this.components,
      this.emits,
      {
        section: true,
        adaptive: 'planeAlways',
        inDom: true
      }
    )

    this.event = new EventClickInclude(
      undefined,
      undefined,
      emits
    )

    this.model = new ModelInclude('open', this.emits, this.open)
  }
}
