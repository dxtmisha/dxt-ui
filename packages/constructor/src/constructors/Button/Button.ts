import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import { LabelInclude } from '../../classes/LabelInclude.ts'
import { EnabledInclude } from '../../classes/EnabledInclude.ts'

import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import { EventClickInclude } from '../../classes/EventClickInclude.ts'

import type { ButtonComponents, ButtonEmits, ButtonSlots } from './types'
import type { ButtonProps } from './props'

/**
 * Button
 */
export class Button {
  readonly label: LabelInclude
  readonly enabled: EnabledInclude

  readonly icon: IconTrailingInclude
  readonly progress: ProgressInclude
  readonly ripple: RippleInclude
  readonly skeleton: SkeletonInclude

  readonly event: EventClickInclude

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
    protected readonly props: ButtonProps,
    protected readonly refs: ToRefs<ButtonProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ButtonComponents, ButtonProps>,
    protected readonly slots?: ButtonSlots,
    protected readonly emits?: ConstrEmit<ButtonEmits>
  ) {
    const progress = new ProgressInclude(
      props,
      className,
      components,
      {
        circular: true,
        inverse: true
      }
    )

    this.label = new LabelInclude(props, className, undefined, slots)
    this.enabled = new EnabledInclude(props, progress)

    this.icon = new IconTrailingInclude(props, className, components)
    this.progress = progress
    this.ripple = new RippleInclude(className, components, this.enabled)
    this.skeleton = new SkeletonInclude(
      props,
      classDesign,
      ['classBackground']
    )

    this.event = new EventClickInclude(
      props,
      this.enabled,
      emits
    )
  }

  /** values for the class/ значения для класса */
  readonly classes = computed<ConstrClass>(() => ({
    [`${this.className}--icon`]: this.icon.isIcon.value,
    [`${this.classDesign}-a--static`]: true,
    ...this.skeleton.classes.value
  }))
}
