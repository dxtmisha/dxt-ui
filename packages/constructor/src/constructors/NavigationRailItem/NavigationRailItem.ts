import { type Ref, type ToRefs } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { BadgeInclude } from '../Badge'
import { IconInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import type { NavigationRailItemComponents, NavigationRailItemEmits, NavigationRailItemSlots } from './types'
import type { NavigationRailItemProps } from './props'

/**
 * Constructor class for the NavigationRailItem component, managing its child elements, attributes, classes, and accessibility.
 *
 * Класс-конструктор для компонента NavigationRailItem, управляющий его дочерними элементами, атрибутами, классами и доступностью.
 */
export class NavigationRailItem {
  /** Class for working with the icon / Класс для работы с иконкой */
  readonly icon: IconInclude
  /** Class for working with the label / Класс для работы с меткой */
  readonly label: LabelInclude
  /** Class for working with the badge / Класс для работы с бейджем */
  readonly badge: BadgeInclude

  /** Class for working with the ripple effect / Класс для работы с эффектом ряби (ripple) */
  readonly ripple: RippleInclude
  /** Class for working with the progress indicator / Класс для работы с индикатором прогресса */
  readonly progress: ProgressInclude
  /** Class for working with the skeleton / Класс для работы со скелетоном */
  readonly skeleton: SkeletonInclude

  /** Class for working with the enabled state / Класс для работы с состоянием активности */
  readonly enabled: EnabledInclude
  /** Class for working with the click events / Класс для работы с событиями клика */
  readonly event: EventClickInclude

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.BadgeIncludeConstructor class for working with badge / класс для работы с бейджем
   * @param constructors.EnabledIncludeConstructor class for working with enabled / класс для работы с активностью
   * @param constructors.EventClickIncludeConstructor class for working with event click / класс для работы с событием клика
   * @param constructors.IconIncludeConstructor class for working with icon / класс для работы с иконкой
   * @param constructors.LabelIncludeConstructor class for working with label / класс для работы с меткой
   * @param constructors.ProgressIncludeConstructor class for working with progress / класс для работы с прогрессом
   * @param constructors.RippleIncludeConstructor class for working with ripple / класс для работы с ripple
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton / класс для работы со скелетоном
   */
  constructor(
    protected readonly props: NavigationRailItemProps,
    protected readonly refs: ToRefs<NavigationRailItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<NavigationRailItemComponents, NavigationRailItemProps>,
    protected readonly slots?: NavigationRailItemSlots,
    protected readonly emits?: ConstrEmit<NavigationRailItemEmits>,
    constructors: {
      BadgeIncludeConstructor?: typeof BadgeInclude
      EnabledIncludeConstructor?: typeof EnabledInclude
      EventClickIncludeConstructor?: typeof EventClickInclude
      IconIncludeConstructor?: typeof IconInclude
      LabelIncludeConstructor?: typeof LabelInclude
      ProgressIncludeConstructor?: typeof ProgressInclude
      RippleIncludeConstructor?: typeof RippleInclude
      SkeletonIncludeConstructor?: typeof SkeletonInclude
    } = {}
  ) {
    const {
      BadgeIncludeConstructor = BadgeInclude,
      EnabledIncludeConstructor = EnabledInclude,
      EventClickIncludeConstructor = EventClickInclude,
      IconIncludeConstructor = IconInclude,
      LabelIncludeConstructor = LabelInclude,
      ProgressIncludeConstructor = ProgressInclude,
      RippleIncludeConstructor = RippleInclude,
      SkeletonIncludeConstructor = SkeletonInclude
    } = constructors

    this.skeleton = new SkeletonIncludeConstructor(
      props,
      classDesign,
      ['classTextVariant']
    )
    this.progress = new ProgressIncludeConstructor(
      className,
      props,
      components,
      {
        circular: true
      }
    )
    this.enabled = new EnabledIncludeConstructor(props, this.progress)

    this.icon = new IconIncludeConstructor(props, className, components, { isSkeleton: true })
    this.label = new LabelIncludeConstructor(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )
    this.badge = new BadgeIncludeConstructor(
      className,
      props,
      components,
      () => ({
        overlap: this.icon.isIcon() ? 'circular' : 'static'
      })
    )

    this.ripple = new RippleIncludeConstructor(className, components, this.enabled)
    this.event = new EventClickIncludeConstructor(props, this.enabled, emits)
  }

  /** Tag type / Тип тега */
  get tag(): string {
    if (this.props.tag) {
      return this.props.tag
    }

    if (this.props.href) {
      return 'a'
    }

    return 'div'
  }

  /** Values for the class / Значения для класса */
  get classes(): ConstrClassObject {
    return {
      [`${this.className}--selected`]: Boolean(this.props.selected),
      [getClassTagAStatic(this.classDesign)]: true
    }
  }

  /** Values for attributes / Значения для атрибутов */
  get binds(): Record<string, any> {
    return {
      'href': this.props.href,
      'data-value': this.props.index ?? this.props.value,
      'data-divider': this.props.divider ? 'active' : undefined,
      'data-parent': this.props.parent,
      'data-list-id': this.props.listId,
      ...this.event.binds
    }
  }

  /** Values for aria attributes / Значения для атрибутов aria */
  get aria(): Record<string, any> {
    return {
      tabindex: this.props.tabindex,
      ...AriaStaticInclude.role(this.props.role),
      ...AriaStaticInclude.selected(Boolean(this.props.selected)),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled))
    }
  }
}
