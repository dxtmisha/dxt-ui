import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

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

import type { AriaList } from '../../types/ariaTypes'
import type { NavigationRailItemProps } from './props'
import type {
  NavigationRailItemComponents,
  NavigationRailItemEmits,
  NavigationRailItemSlots
} from './types'

/** NavigationRailItem dependency constructors type / Тип конструкторов зависимостей NavigationRailItem */
export type NavigationRailItemConstructors = {
  /** Badge constructor / Конструктор бейджа */
  badge: typeof BadgeInclude
  /** Enabled status constructor / Конструктор статуса активности */
  enabled: typeof EnabledInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Icon constructor / Конструктор иконки */
  icon: typeof IconInclude
  /** Label constructor / Конструктор метки */
  label: typeof LabelInclude
  /** Progress constructor / Конструктор индикатора прогресса */
  progress: typeof ProgressInclude
  /** Ripple constructor / Конструктор эффекта волны */
  ripple: typeof RippleInclude
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * Constructor class for the NavigationRailItem component, managing its child elements, attributes, classes, and accessibility.
 *
 * Класс-конструктор для компонента NavigationRailItem, управляющий его дочерними элементами, атрибутами, классами и доступностью.
 */
export class NavigationRailItem extends DesignLogicAbstract<
  HTMLDivElement,
  NavigationRailItemComponents,
  NavigationRailItemEmits,
  NavigationRailItemSlots,
  NavigationRailItemProps,
  NavigationRailItemConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<NavigationRailItemConstructors> = {
    badge: {
      item: BadgeInclude,
      canCreate: () => BadgeInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          overlap: this.callInstance('icon', item => item.isIcon(), false) ? 'circular' : 'static'
        })
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
      item: IconInclude,
      canCreate: () => IconInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        { isSkeleton: true }
      ]
    },
    label: {
      item: LabelInclude,
      canCreate: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        undefined,
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
      ...AriaStaticInclude.selected(Boolean(this.props.selected)),
      ...AriaStaticInclude.disabled(Boolean(this.props.disabled))
    }

    const progressAria = this.callInstance('progress', item => item.aria.value)

    if (progressAria) {
      Object.assign(aria, progressAria)
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
    return {
      [this.naming.getStatusClass('selected')]: Boolean(this.props.selected),
      [getClassTagAStatic(this.naming.getDesign())]: true
    }
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
}
