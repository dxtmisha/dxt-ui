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
import { IconLiteInclude } from '../Icon'
import { LabelInclude } from '../../classes/LabelInclude'
import { SkeletonInclude } from '../Skeleton'

import type { AriaList } from '../../types/ariaTypes'
import type { BreadcrumbItemProps } from './props'
import type {
  BreadcrumbItemComponents,
  BreadcrumbItemEmits,
  BreadcrumbItemSlots
} from './types'

/** BreadcrumbItem dependency constructors type / Тип конструкторов зависимостей BreadcrumbItem */
export type BreadcrumbItemConstructors = {
  /** Enabled state constructor / Конструктор состояния активности */
  enabled: typeof EnabledInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Icon lite constructor / Облегчённый конструктор иконки */
  icon: typeof IconLiteInclude
  /** Label constructor / Конструктор метки */
  label: typeof LabelInclude
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * Class representing the business logic and orchestrator of the BreadcrumbItem component.
 * Coordinates label, leading icon, separator arrow resolution, enabled/readonly states,
 * skeleton classes, WAI-ARIA attributes, and click/router navigation events.
 *
 * Класс, представляющий бизнес-логику и оркестратор компонента BreadcrumbItem.
 * Координирует метку, ведущую иконку, выбор стрелки-разделителя, состояния активности/чтения,
 * классы скелетона, WAI-ARIA атрибуты и события клика/навигации.
 */
export class BreadcrumbItem extends DesignLogicAbstract<
  HTMLAnchorElement | HTMLSpanElement,
  BreadcrumbItemComponents,
  BreadcrumbItemEmits,
  BreadcrumbItemSlots,
  BreadcrumbItemProps,
  BreadcrumbItemConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<BreadcrumbItemConstructors> = {
    enabled: {
      item: EnabledInclude,
      parameters: () => [this.props]
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
      item: IconLiteInclude,
      canCreate: () => IconLiteInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => (this.props.isSkeleton ? { isSkeleton: true } : undefined)
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
   * Returns WAI-ARIA attributes for current-page readonly, disabled, or interactive link states.
   *
   * Возвращает WAI-ARIA атрибуты для состояний текущей страницы (readonly), отключения или интерактивной ссылки.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    if (this.isReadonly()) {
      return AriaStaticInclude.current('page')
    }

    const enabled = this.i('enabled')

    if (enabled.isDisabled) {
      return AriaStaticInclude.disabled(true)
    }

    if (!this.i('event').href.href) {
      return {
        tabindex: '0',
        ...AriaStaticInclude.role('link')
      }
    }

    return {}
  }

  /**
   * Returns HTML and event bindings for the root breadcrumb element.
   *
   * Возвращает HTML- и событийные привязки для корневого элемента хлебной крошки.
   * @returns element bindings / привязки элемента
   */
  get binds(): ConstrBind {
    if (this.isReadonly()) {
      return {
        ...this.aria
      }
    }

    const enabled = this.i('enabled')
    const event = this.i('event')

    if (enabled.isDisabled) {
      return {
        onClick: event.onClick,
        ...this.aria
      }
    }

    return {
      'data-value': this.props.value ?? this.props.index,
      ...event.binds,
      ...this.aria
    }
  }

  /**
   * Returns computed CSS classes for the root element.
   *
   * Возвращает вычисляемые CSS-классы для корневого элемента.
   * @returns classes object / объект классов
   */
  get classes(): ConstrClassObject {
    return {
      [getClassTagAStatic(this.naming.getDesign())]: true
    }
  }

  /**
   * Resolves the directional separator arrow icon name based on `back` mode.
   *
   * Разрешает имя иконки стрелки-разделителя в зависимости от режима `back`.
   * @returns arrow icon name or undefined / имя иконки стрелки или undefined
   */
  get iconArrow(): string | undefined {
    return this.props.back ? this.props.iconArrowLeft : this.props.iconArrowRight
  }

  /**
   * Resolves the root HTML tag (`span` when readonly, `a` otherwise).
   *
   * Разрешает корневой HTML-тег (`span` в режиме только для чтения, иначе `a`).
   * @returns HTML tag name / имя HTML-тега
   */
  get tag(): string {
    return this.isReadonly() ? 'span' : 'a'
  }

  /**
   * Checks whether the breadcrumb item is in readonly (current-page) state.
   *
   * Проверяет, находится ли элемент хлебных крошек в состоянии только для чтения (текущая страница).
   * @returns true if readonly / true, если только для чтения
   */
  isReadonly(): boolean {
    return this.i('enabled').isReadonly
  }
}
