import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  type ConstrStyles,
  DesignLogicAbstract
} from '@dxtmisha/functional'

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

import type { AriaList } from '../../types/ariaTypes'
import { ListItemLazy } from './ListItemLazy'
import { ListItemLazyHeight } from './ListItemLazyHeight'
import type { ListItemProps } from './props'
import type { ListItemComponents, ListItemEmits, ListItemSlots } from './types'

/** ListItem dependency constructors type / Тип конструкторов зависимостей ListItem */
export type ListItemConstructors = {
  /** Badge constructor / Конструктор бейджа */
  badge: typeof BadgeInclude
  /** Caption constructor / Конструктор подписи */
  caption: typeof CaptionInclude
  /** Description constructor / Конструктор описания */
  description: typeof DescriptionInclude
  /** Enabled status constructor / Конструктор статуса активности */
  enabled: typeof EnabledInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Icon trailing constructor / Конструктор иконки и завершающей иконки */
  icon: typeof IconTrailingInclude
  /** Label highlight constructor / Конструктор метки с подсветкой */
  label: typeof LabelHighlightInclude
  /** Lazy rendering constructor / Конструктор ленивого рендеринга */
  lazy: typeof ListItemLazy
  /** Lazy height cache constructor / Конструктор кэширования высоты ленивого рендеринга */
  lazyHeight: typeof ListItemLazyHeight
  /** Prefix constructor / Конструктор префикса */
  prefix: typeof PrefixInclude
  /** Progress constructor / Конструктор индикатора прогресса */
  progress: typeof ProgressInclude
  /** Ripple constructor / Конструктор эффекта волны */
  ripple: typeof RippleInclude
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
  /** Suffix constructor / Конструктор суффикса */
  suffix: typeof SuffixInclude
}

/**
 * Constructor class for the ListItem component, managing its child elements, attributes, classes, and accessibility.
 *
 * Класс-конструктор для компонента ListItem, управляющий его дочерними элементами, атрибутами, классами и доступностью.
 */
export class ListItem extends DesignLogicAbstract<
  HTMLElement,
  ListItemComponents,
  ListItemEmits,
  ListItemSlots,
  ListItemProps,
  ListItemConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ListItemConstructors> = {
    badge: {
      item: BadgeInclude,
      canCreate: () => BadgeInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        {
          overlap: 'static'
        }
      ]
    },
    caption: {
      item: CaptionInclude,
      canCreate: () => CaptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    description: {
      item: DescriptionInclude,
      canCreate: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    enabled: {
      item: EnabledInclude,
      parameters: () => [
        this.props,
        () => this.callInstance('progress', item => item)
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        () => this.i('enabled'),
        this.emits
      ]
    },
    icon: {
      item: IconTrailingInclude,
      canCreate: () => IconTrailingInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    label: {
      item: LabelHighlightInclude,
      canCreate: () => LabelHighlightInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots,
        undefined,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    lazy: {
      item: ListItemLazy,
      canCreate: () => ListItemLazy.is(this.props),
      parameters: () => [
        this.props,
        this.element,
        this.naming,
        () => this.callInstance('lazyHeight', item => item)
      ]
    },
    lazyHeight: {
      item: ListItemLazyHeight,
      canCreate: () => ListItemLazyHeight.is(this.props),
      parameters: () => [
        this.props
      ]
    },
    prefix: {
      item: PrefixInclude,
      canCreate: () => PrefixInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    progress: {
      item: ProgressInclude,
      canCreate: () => ProgressInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        {
          circular: true
        }
      ]
    },
    ripple: {
      item: RippleInclude,
      canCreate: () => RippleInclude.is(this.props),
      parameters: () => [
        this.naming,
        () => this.i('enabled'),
        this.components
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classTextVariant']
      ]
    },
    suffix: {
      item: SuffixInclude,
      canCreate: () => SuffixInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        () => this.callInstance('skeleton', item => item)
      ]
    }
  }

  /**
   * Values for aria attributes.
   *
   * Значения для атрибутов aria.
   * @returns list of aria properties / список свойств aria
   */
  get aria(): AriaList {
    const aria: AriaList = {
      tabindex: this.props.tabindex,
      ...AriaStaticInclude.role(this.props.role),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled))
    }

    const progressAria = this.callInstance('progress', item => item.aria.value)

    if (progressAria) {
      Object.assign(aria, progressAria)
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

  /**
   * Values for attributes.
   *
   * Значения для атрибутов.
   * @returns element binding attributes / атрибуты привязки элемента
   */
  get binds(): ConstrBind {
    return {
      'data-value': this.props.index ?? this.props.value,
      'data-divider': this.props.divider ? 'active' : undefined,
      'data-parent': this.props.parent,
      'data-highlight': this.props.highlight && this.callInstance('label', item => item.isHighlight(), false)
        ? this.props.highlight
        : undefined,
      'data-list-id': this.props.listId,
      ...this.i('event').binds,
      ...this.aria
    }
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    const selectionStyle = this.props.selectionStyle ?? 'none'
    const lazyClasses = this.callInstance('lazy', item => item.classes)
    const classes: ConstrClassObject = {
      [this.naming.getStatusClass('selected')]: Boolean(this.props.selected && selectionStyle === 'none'),
      [this.naming.getStatusClass('selectionStyle')]: selectionStyle !== 'none',
      [this.naming.getStatusClass('description')]: DescriptionInclude.is(this.props, this.slots),
      [getClassTagAStatic(this.naming.getDesign())]: true
    }

    if (lazyClasses) {
      Object.assign(classes, lazyClasses)
    }

    if (this.props.selectionStyle) {
      classes[this.naming.getStatusClass('selectionStyle', this.props.selectionStyle)] = true
    }

    return classes
  }

  /**
   * Values for inline styles.
   *
   * Значения для inline-стилей.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    return this.callInstance('lazyHeight', item => item.styles, {})
  }

  /**
   * Tag type.
   *
   * Тип тега.
   * @returns tag name / название тега
   */
  get tag(): string {
    if (this.props.tag) {
      return this.props.tag
    }

    if (
      this.props.to
      || this.props.href
    ) {
      return 'a'
    }

    return 'div'
  }

  /**
   * Checks whether the list item should be rendered under the current filter mode.
   *
   * Проверяет, должен ли элемент списка отображаться при текущем режиме фильтрации.
   * @returns true if item should be rendered / true, если элемент должен отображаться
   */
  isRender(): boolean {
    if (!this.props.filterMode) {
      return true
    }

    return this.callInstance(
      'label',
      item => item.isHighlight(),
      () => !this.props.highlight || this.props.highlight.length < (this.props.highlightLengthStart ?? 2)
    )
  }
}
