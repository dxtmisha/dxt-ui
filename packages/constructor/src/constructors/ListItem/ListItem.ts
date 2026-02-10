import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { LabelHighlightInclude } from '../../classes/LabelHighlightInclude'
import { PrefixInclude } from '../../classes/PrefixInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { SuffixInclude } from '../../classes/SuffixInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { BadgeInclude } from '../Badge/BadgeInclude'

import { EnabledInclude } from '../../classes/EnabledInclude'

import type { ListItemComponents, ListItemEmits, ListItemSlots } from './types'
import type { ListItemProps } from './props'

/**
 * ListItem
 */
export class ListItem {
  readonly icon: IconTrailingInclude
  readonly label: LabelHighlightInclude
  readonly prefix: PrefixInclude
  readonly caption: CaptionInclude
  readonly suffix: SuffixInclude
  readonly description: DescriptionInclude
  readonly badge: BadgeInclude

  readonly ripple: RippleInclude
  readonly progress: ProgressInclude
  readonly skeleton: SkeletonInclude

  readonly enabled: EnabledInclude
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
   * @param IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
   * @param LabelHighlightIncludeConstructor class for working with label/ класс для работы с меткой
   * @param PrefixIncludeConstructor class for working with prefix/ класс для работы с префиксом
   * @param CaptionIncludeConstructor class for working with caption/ класс для работы с подписью
   * @param SuffixIncludeConstructor class for working with suffix/ класс для работы с суффиксом
   * @param DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
   * @param BadgeIncludeConstructor class for working with badge/ класс для работы с бейджем
   * @param RippleIncludeConstructor class for working with ripple/ класс для работы с ripple
   * @param ProgressIncludeConstructor class for working with progress/ класс для работы с прогрессом
   * @param SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
   * @param EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
   * @param EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
   */
  constructor(
    protected readonly props: ListItemProps,
    protected readonly refs: ToRefs<ListItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ListItemComponents, ListItemProps>,
    protected readonly slots?: ListItemSlots,
    protected readonly emits?: ConstrEmit<ListItemEmits>,
    IconTrailingIncludeConstructor: typeof IconTrailingInclude = IconTrailingInclude,
    LabelHighlightIncludeConstructor: typeof LabelHighlightInclude = LabelHighlightInclude,
    PrefixIncludeConstructor: typeof PrefixInclude = PrefixInclude,
    CaptionIncludeConstructor: typeof CaptionInclude = CaptionInclude,
    SuffixIncludeConstructor: typeof SuffixInclude = SuffixInclude,
    DescriptionIncludeConstructor: typeof DescriptionInclude = DescriptionInclude,
    BadgeIncludeConstructor: typeof BadgeInclude = BadgeInclude,
    RippleIncludeConstructor: typeof RippleInclude = RippleInclude,
    ProgressIncludeConstructor: typeof ProgressInclude = ProgressInclude,
    SkeletonIncludeConstructor: typeof SkeletonInclude = SkeletonInclude,
    EnabledIncludeConstructor: typeof EnabledInclude = EnabledInclude,
    EventClickIncludeConstructor: typeof EventClickInclude = EventClickInclude
  ) {
    const progress = new ProgressIncludeConstructor(
      props,
      className,
      components,
      {
        circular: true
      }
    )
    const skeleton = new SkeletonIncludeConstructor(
      props,
      classDesign,
      ['classTextVariant']
    )
    const enabled = new EnabledIncludeConstructor(props, progress)

    this.icon = new IconTrailingIncludeConstructor(props, className, components)
    this.label = new LabelHighlightIncludeConstructor(
      props,
      className,
      undefined,
      slots,
      undefined,
      skeleton
    )
    this.prefix = new PrefixIncludeConstructor(props, className, slots, skeleton)
    this.caption = new CaptionIncludeConstructor(props, className, slots)
    this.suffix = new SuffixIncludeConstructor(props, className, slots)
    this.description = new DescriptionIncludeConstructor(props, className, slots, skeleton)
    this.badge = new BadgeIncludeConstructor(
      props,
      className,
      components,
      {
        overlap: 'static'
      }
    )

    this.ripple = new RippleIncludeConstructor(className, components, enabled)
    this.progress = progress
    this.skeleton = skeleton

    this.enabled = enabled
    this.event = new EventClickIncludeConstructor(props, enabled, emits)
  }

  /** tag type/ тип тега */
  readonly tag = computed<string>(() => {
    if (this.props.tag) {
      return this.props.tag
    }

    if (this.props.href) {
      return 'a'
    }

    return 'div'
  })

  /** values for the class/ значения для класса */
  readonly classes = computed<ConstrClassObject>(() => ({
    [`${this.className}--description`]: this.description.is.value,
    [getClassTagAStatic(this.classDesign)]: true
  }))

  /** values for attributes/ значения для атрибутов */
  readonly binds = computed(() => {
    return {
      'data-value': this.props.index ?? this.props.value,
      'data-divider': this.props.divider ? 'active' : undefined,
      'data-parent': this.props.parent,
      'data-list-id': this.props.listId,
      'onClick': this.event.onClick
    }
  })

  /** values for aria attributes/ значения для атрибутов aria */
  readonly aria = computed(() => {
    const aria = {
      tabindex: this.props.tabindex,
      ...AriaStaticInclude.role(this.props.role),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled))
    }

    switch (this.props.role) {
      case 'menuitemradio':
      case 'menuitemcheckbox':
        return {
          ...aria,
          ...AriaStaticInclude.checked(Boolean(this.props.selected))
        }
      case 'menuitem':
      case 'option':
        return {
          ...aria,
          ...AriaStaticInclude.selected(Boolean(this.props.selected))
        }
    }

    return aria
  })
}
