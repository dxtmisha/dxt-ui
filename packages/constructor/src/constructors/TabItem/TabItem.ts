import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { BadgeInclude } from '../Badge/BadgeInclude'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'
import { IconTrailingInclude } from '../Icon'
import { LabelInclude } from '../../classes/LabelInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'

import type { TabItemComponents, TabItemEmits, TabItemSlots } from './types'
import type { TabItemProps } from './props'

/**
 * TabItem
 */
export class TabItem {
  readonly icon: IconTrailingInclude
  readonly label: LabelInclude
  readonly badge: BadgeInclude
  readonly skeleton: SkeletonInclude
  readonly enabled: EnabledInclude
  readonly ripple: RippleInclude
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
   * @param constructors.BadgeIncludeConstructor class for working with badge/ класс для работы с бейджем
   * @param constructors.EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
   * @param constructors.EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   * @param constructors.IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
   * @param constructors.RippleIncludeConstructor class for working with ripple/ класс для работы с ripple
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
   */
  constructor(
    protected readonly props: TabItemProps,
    protected readonly refs: ToRefs<TabItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TabItemComponents, TabItemProps>,
    protected readonly slots?: TabItemSlots,
    protected readonly emits?: ConstrEmit<TabItemEmits>,
    constructors?: {
      BadgeIncludeConstructor?: typeof BadgeInclude
      EnabledIncludeConstructor?: typeof EnabledInclude
      EventClickIncludeConstructor?: typeof EventClickInclude
      IconTrailingIncludeConstructor?: typeof IconTrailingInclude
      LabelIncludeConstructor?: typeof LabelInclude
      RippleIncludeConstructor?: typeof RippleInclude
      SkeletonIncludeConstructor?: typeof SkeletonInclude
    }
  ) {
    const {
      BadgeIncludeConstructor = BadgeInclude,
      EnabledIncludeConstructor = EnabledInclude,
      EventClickIncludeConstructor = EventClickInclude,
      IconTrailingIncludeConstructor = IconTrailingInclude,
      LabelIncludeConstructor = LabelInclude,
      RippleIncludeConstructor = RippleInclude,
      SkeletonIncludeConstructor = SkeletonInclude
    } = constructors ?? {}

    this.skeleton = new SkeletonIncludeConstructor(this.props, this.classDesign, ['classTextVariant'])
    this.enabled = new EnabledIncludeConstructor(this.props)

    this.icon = new IconTrailingIncludeConstructor(this.props, this.className, this.components)
    this.label = new LabelIncludeConstructor(
      this.props,
      this.className,
      undefined,
      this.slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )
    this.badge = new BadgeIncludeConstructor(
      this.props,
      this.className,
      this.components,
      {
        overlap: 'static'
      }
    )

    this.ripple = new RippleIncludeConstructor(this.className, this.components, this.enabled)
    this.event = new EventClickIncludeConstructor(
      this.props,
      this.enabled,
      this.emits
    )
  }

  /** tag type/ тип тега */
  readonly tag = computed<string>(() => {
    if (this.props.tag) {
      return this.props.tag
    }

    if (this.props.href) {
      return 'a'
    }

    return 'button'
  })

  /** values for attributes/ значения для атрибутов */
  readonly binds = computed(() => {
    return {
      'href': this.props.href,
      'data-value': this.props.index ?? this.props.value,
      'tabindex': -1,
      ...this.event.binds,
      ...AriaStaticInclude.role(this.props.role),
      ...AriaStaticInclude.selected(Boolean(this.props.selected)),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled))
    }
  })
}
