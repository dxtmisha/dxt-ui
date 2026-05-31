import { type Ref, type ToRefs } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelHighlightInclude } from '../../classes/LabelHighlightInclude'
import { PrefixInclude } from '../../classes/PrefixInclude'
import { SuffixInclude } from '../../classes/SuffixInclude'

import { BadgeInclude } from '../Badge'
import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import type { ListItemComponents, ListItemEmits, ListItemSlots } from './types'
import type { ListItemProps } from './props'

/**
 * Constructor class for the ListItem component, managing its child elements, attributes, classes, and accessibility.
 *
 * Класс-конструктор для компонента ListItem, управляющий его дочерними элементами, атрибутами, классами и доступностью.
 */
export class ListItem {
  /** Class for working with the icon / Класс для работы с иконкой */
  readonly icon: IconTrailingInclude
  /** Class for working with the label / Класс для работы с меткой */
  readonly label: LabelHighlightInclude
  /** Class for working with the prefix / Класс для работы с префиксом */
  readonly prefix: PrefixInclude
  /** Class for working with the caption / Класс для работы с подписью */
  readonly caption: CaptionInclude
  /** Class for working with the suffix / Класс для работы с суффиксом */
  readonly suffix: SuffixInclude
  /** Class for working with the description / Класс для работы с описанием */
  readonly description: DescriptionInclude
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
   * @param constructors.CaptionIncludeConstructor class for working with caption / класс для работы с подписью
   * @param constructors.DescriptionIncludeConstructor class for working with description / класс для работы с описанием
   * @param constructors.EnabledIncludeConstructor class for working with enabled / класс для работы с активностью
   * @param constructors.EventClickIncludeConstructor class for working with event click / класс для работы с событием клика
   * @param constructors.IconTrailingIncludeConstructor class for working with icon / класс для работы с иконкой
   * @param constructors.LabelHighlightIncludeConstructor class for working with label / класс для работы с меткой
   * @param constructors.PrefixIncludeConstructor class for working with prefix / класс для работы с префиксом
   * @param constructors.ProgressIncludeConstructor class for working with progress / класс для работы с прогрессом
   * @param constructors.RippleIncludeConstructor class for working with ripple / класс для работы с ripple
   * @param constructors.SkeletonIncludeConstructor class for working with skeleton / класс для работы со скелетоном
   * @param constructors.SuffixIncludeConstructor class for working with suffix / класс для работы с суффиксом
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
    constructors: {
      BadgeIncludeConstructor?: typeof BadgeInclude
      CaptionIncludeConstructor?: typeof CaptionInclude
      DescriptionIncludeConstructor?: typeof DescriptionInclude
      EnabledIncludeConstructor?: typeof EnabledInclude
      EventClickIncludeConstructor?: typeof EventClickInclude
      IconTrailingIncludeConstructor?: typeof IconTrailingInclude
      LabelHighlightIncludeConstructor?: typeof LabelHighlightInclude
      PrefixIncludeConstructor?: typeof PrefixInclude
      ProgressIncludeConstructor?: typeof ProgressInclude
      RippleIncludeConstructor?: typeof RippleInclude
      SkeletonIncludeConstructor?: typeof SkeletonInclude
      SuffixIncludeConstructor?: typeof SuffixInclude
    } = {}
  ) {
    const {
      BadgeIncludeConstructor = BadgeInclude,
      CaptionIncludeConstructor = CaptionInclude,
      DescriptionIncludeConstructor = DescriptionInclude,
      EnabledIncludeConstructor = EnabledInclude,
      EventClickIncludeConstructor = EventClickInclude,
      IconTrailingIncludeConstructor = IconTrailingInclude,
      LabelHighlightIncludeConstructor = LabelHighlightInclude,
      PrefixIncludeConstructor = PrefixInclude,
      ProgressIncludeConstructor = ProgressInclude,
      RippleIncludeConstructor = RippleInclude,
      SkeletonIncludeConstructor = SkeletonInclude,
      SuffixIncludeConstructor = SuffixInclude
    } = constructors

    const progress = new ProgressIncludeConstructor(
      className,
      props,
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
      className,
      props,
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
      [`${this.className}--selected`]: this.props.selected && this.props.selectionStyle === 'none',
      [`${this.className}--selectionStyle`]: this.props.selectionStyle !== 'none',
      [`${this.className}--selectionStyle--${this.props.selectionStyle}`]: Boolean(this.props.selectionStyle),
      [`${this.className}--description`]: this.description.is,
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
      'data-highlight': this.label.isHighlight() ? this.props.highlight : undefined,
      'data-list-id': this.props.listId,
      ...this.event.binds
    }
  }

  /** Values for aria attributes / Значения для атрибутов aria */
  get aria(): Record<string, any> {
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
  }
}
