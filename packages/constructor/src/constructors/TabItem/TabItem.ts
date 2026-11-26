import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { BadgeInclude } from '../Badge'
import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import type { AriaList } from '../../types/ariaTypes'
import type { TabItemPropsBasic } from './props'
import type { TabItemComponents, TabItemEmits, TabItemSlots } from './types'

/** TabItem dependency constructors type / Тип конструкторов зависимостей TabItem */
export type TabItemConstructors = {
  /** Badge constructor / Конструктор бейджа */
  badge: typeof BadgeInclude
  /** Enabled status constructor / Конструктор статуса активности */
  enabled: typeof EnabledInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Icon trailing constructor / Конструктор иконки и завершающей иконки */
  icon: typeof IconTrailingInclude
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
 * Class representing the business logic and structure of the TabItem component (orchestrator).
 * It orchestrates label, icon, badge, progress loading, skeleton loading, click events, accessibility, and ripple states.
 *
 * Класс, представляющий бизнес-логику и структуру компонента TabItem (оркестратор).
 * Координирует метку, иконку, бейдж, индикатор загрузки, скелетон, события клика, доступность и состояние ripple.
 */
export class TabItem extends DesignLogicAbstract<
  HTMLDivElement,
  TabItemComponents,
  TabItemEmits,
  TabItemSlots,
  TabItemPropsBasic,
  TabItemConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<TabItemConstructors> = {
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
   * Returns list of ARIA attributes for the tab item element.
   *
   * Возвращает список ARIA-атрибутов для элемента вкладки.
   * @returns list of ARIA attributes / список ARIA-атрибутов
   */
  get aria(): AriaList {
    const aria: AriaList = {
      tabindex: -1,
      ...AriaStaticInclude.role(this.props.role),
      ...AriaStaticInclude.labelledby(
        this.callInstance('label', item => (item.is ? item.id : undefined))
      ),
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
   * Returns binding attributes for the main element.
   *
   * Возвращает атрибуты привязки для главного элемента.
   * @returns element binding attributes / атрибуты привязки элемента
   */
  get binds(): ConstrBind {
    return {
      'type': this.tag === 'button' ? 'button' : undefined,
      'data-value': this.props.index ?? this.props.value,
      ...this.i('event').binds,
      ...this.aria
    }
  }

  /**
   * Returns dynamic status classes for the main element.
   *
   * Возвращает динамические классы состояний для главного элемента.
   * @returns classes object / объект классов
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('loading')]: this.callInstance('progress', item => item.is, false)
    }
  }

  /**
   * Returns the HTML tag name for the element.
   *
   * Возвращает название HTML-тега для элемента.
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

    return 'button'
  }
}
