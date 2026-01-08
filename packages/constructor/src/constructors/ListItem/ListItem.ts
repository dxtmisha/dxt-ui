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
   */
  constructor(
    protected readonly props: ListItemProps,
    protected readonly refs: ToRefs<ListItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ListItemComponents, ListItemProps>,
    protected readonly slots?: ListItemSlots,
    protected readonly emits?: ConstrEmit<ListItemEmits>
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
    const skeleton = new SkeletonInclude(
      props,
      classDesign,
      ['classTextVariant']
    )
    const enabled = new EnabledInclude(props, progress)

    this.icon = new IconTrailingInclude(props, className, components)
    this.label = new LabelHighlightInclude(
      props,
      className,
      undefined,
      slots,
      undefined,
      skeleton
    )
    this.prefix = new PrefixInclude(props, className, slots, skeleton)
    this.caption = new CaptionInclude(props, className, slots)
    this.suffix = new SuffixInclude(props, className, slots)
    this.description = new DescriptionInclude(props, className, slots, skeleton)
    this.badge = new BadgeInclude(
      props,
      className,
      components,
      {
        overlap: 'static'
      }
    )

    this.ripple = new RippleInclude(className, components, enabled)
    this.progress = progress
    this.skeleton = skeleton

    this.enabled = enabled
    this.event = new EventClickInclude(props, enabled, emits)
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
    const data = {
      'data-value': this.props.index ?? this.props.value,
      'data-divider': this.props.divider ? 'active' : undefined,
      'data-parent': this.props.parent,
      'data-list-id': this.props.listId,
      'tabindex': this.props.tabindex,
      'role': this.props.role,
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled)),
      'onClick': this.event.onClick
    }

    if (this.props.isMenu) {
      Object.assign(
        data,
        AriaStaticInclude.haspopup('menu')
      )
    }

    return data
  })

  /** values for attributes with open state/ значения для атрибутов с состоянием open */
  readonly bindsAndOpen = computed(() => {
    const data = {
      ...this.binds.value
    }

    if (this.props.isMenu) {
      Object.assign(
        data,
        AriaStaticInclude.expanded(Boolean(this.props.open))
      )
    }

    if (this.props.isItemMenu) {
      Object.assign(
        data,
        AriaStaticInclude.checked(Boolean(this.props.selected))
      )
    }

    return data
  })
}
