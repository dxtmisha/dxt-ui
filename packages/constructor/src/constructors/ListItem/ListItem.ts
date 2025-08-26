import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrClassObject, type ConstrEmit, DesignComp } from '@dxt-ui/functional'

import { getClassTegAStatic } from '../../functions/getClassTegAStatic'

import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import { LabelHighlightInclude } from '../../classes/LabelHighlightInclude'
import { PrefixInclude } from '../../classes/PrefixInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { SuffixInclude } from '../../classes/SuffixInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { BadgeInclude } from '../Badge/BadgeInclude'

import { EnabledInclude } from '../../classes/EnabledInclude'

import type { ListItemComponents, ListItemEmits, ListItemSlots } from './types'
import type { ListItemPropsBasic } from './props'
import { EventClickInclude } from '../../classes/EventClickInclude'

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
    protected readonly props: ListItemPropsBasic,
    protected readonly refs: ToRefs<ListItemPropsBasic>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ListItemComponents, ListItemPropsBasic>,
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

  /** values for the class/ значения для класса */
  readonly classes = computed<ConstrClassObject>(() => ({
    [`${this.className}--description`]: this.description.is.value,
    [getClassTegAStatic(this.classDesign)]: true
  }))
}
