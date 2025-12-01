import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, DesignComp } from '@dxtmisha/functional'
import { getClassTegAStatic } from '../../functions/getClassTegAStatic'

import { LabelInclude } from '../../classes/LabelInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'

import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { ButtonComponents, ButtonEmits, ButtonSlots } from './types'
import type { ButtonPropsBasic } from './props'

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
    protected readonly props: ButtonPropsBasic,
    protected readonly refs: ToRefs<ButtonPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ButtonComponents, ButtonPropsBasic>,
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
    [getClassTegAStatic(this.classDesign)]: true,
    ...this.skeleton.classes.value
  }))

  /**
   * list of aria properties for the button component/
   * список aria свойств для компонента Button
   */
  readonly aria = computed<AriaList>(() => {
    const aria: AriaList = {
      ...this.progress.aria.value,
      ...AriaStaticInclude.label(this.props.ariaLabel)
    }

    if (this.props.tag !== 'button') {
      return {
        tabindex: '0',
        ...aria,
        ...AriaStaticInclude.role('button'),
        ...this.enabled.aria.value
      }
    }

    return aria
  })
}
