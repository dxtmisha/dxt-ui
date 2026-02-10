import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'
import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

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
   * @param constructors object with classes/ объект с классами
   * @param constructors.EnabledConstructor class for creating the enabled state/ класс для создания состояния активности
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.IconConstructor class for creating an icon/ класс для создания иконки
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.ProgressConstructor class for creating a progress indicator/ класс для создания индикатора прогресса
   * @param constructors.RippleConstructor class for creating a ripple effect/ класс для создания эффекта волны
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   */
  constructor(
    protected readonly props: ButtonPropsBasic,
    protected readonly refs: ToRefs<ButtonPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ButtonComponents, ButtonPropsBasic>,
    protected readonly slots?: ButtonSlots,
    protected readonly emits?: ConstrEmit<ButtonEmits>,
    constructors?: {
      EnabledConstructor?: typeof EnabledInclude
      EventConstructor?: typeof EventClickInclude
      IconConstructor?: typeof IconTrailingInclude
      LabelConstructor?: typeof LabelInclude
      ProgressConstructor?: typeof ProgressInclude
      RippleConstructor?: typeof RippleInclude
      SkeletonConstructor?: typeof SkeletonInclude
    }
  ) {
    const {
      EnabledConstructor = EnabledInclude,
      EventConstructor = EventClickInclude,
      IconConstructor = IconTrailingInclude,
      LabelConstructor = LabelInclude,
      ProgressConstructor = ProgressInclude,
      RippleConstructor = RippleInclude,
      SkeletonConstructor = SkeletonInclude
    } = constructors ?? {}

    const progress = new ProgressConstructor(
      props,
      className,
      components,
      {
        circular: true,
        inverse: true
      }
    )

    this.label = new LabelConstructor(props, className, undefined, slots)
    this.enabled = new EnabledConstructor(props, progress)

    this.icon = new IconConstructor(props, className, components)
    this.progress = progress
    this.ripple = new RippleConstructor(className, components, this.enabled)
    this.skeleton = new SkeletonConstructor(
      props,
      classDesign,
      ['classBackground']
    )

    this.event = new EventConstructor(
      props,
      this.enabled,
      emits
    )
  }

  /** tag name/ название тега */
  readonly tag = computed<string>(() => {
    if (this.props.tag) {
      return this.props.tag
    }

    if (this.props.href) {
      return 'a'
    }

    return 'button'
  })

  /** values for the class/ значения для класса */
  readonly classes = computed<ConstrClass>(() => ({
    [`${this.className}--icon`]: this.icon.isIcon.value,
    [getClassTagAStatic(this.classDesign)]: true,
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

    if (this.isTagNotButton()) {
      return {
        tabindex: '0',
        ...aria,
        ...AriaStaticInclude.role('button'),
        ...AriaStaticInclude.disabled(this.progress.is.value || !this.enabled.isEnabled.value)
      }
    }

    return aria
  })

  /**
   * Events for the button component.
   *
   * События для компонента кнопки.
   */
  readonly eventList = computed(() => {
    const events: Record<string, any> = {
      onClick: this.event.onClick
    }

    if (this.isTagNotButton()) {
      events.onKeydown = this.event.onKeydown
    }

    return events
  })

  /**
   * Checks if the tag is not a button or link.
   *
   * Проверяет, не является ли тег кнопкой или ссылкой.
   */
  protected isTagNotButton(): boolean {
    return Boolean(
      this.props.tag
      && ['a', 'button'].indexOf(this.props.tag) === -1
    )
  }
}
