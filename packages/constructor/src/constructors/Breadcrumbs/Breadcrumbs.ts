import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { BreadcrumbItemInclude } from '../BreadcrumbItem'
import { TextInclude } from '../../classes/TextInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { BreadcrumbsProps } from './props'
import type {
  BreadcrumbsComponents,
  BreadcrumbsEmits,
  BreadcrumbsSlots
} from './types'

/** Breadcrumbs dependency constructors type / Тип конструкторов зависимостей Breadcrumbs */
export type BreadcrumbsConstructors = {
  /** BreadcrumbItem list include constructor / Конструктор подключения списка BreadcrumbItem */
  breadcrumbItem: typeof BreadcrumbItemInclude
  /** Localized text constructor / Конструктор локализованного текста */
  text: typeof TextInclude
}

/**
 * Class representing the business logic and orchestrator of the Breadcrumbs component.
 * Coordinates localized WAI-ARIA landmark labeling (`aria-label`) via `TextInclude` and
 * lazy list rendering of `BreadcrumbItem` elements via `BreadcrumbItemInclude`.
 *
 * Класс, представляющий бизнес-логику и оркестратор компонента Breadcrumbs.
 * Координирует локализованную WAI-ARIA разметку ориентира (`aria-label`) через `TextInclude` и
 * ленивый рендеринг списка элементов `BreadcrumbItem` через `BreadcrumbItemInclude`.
 */
export class Breadcrumbs extends DesignLogicAbstract<
  HTMLElement,
  BreadcrumbsComponents,
  BreadcrumbsEmits,
  BreadcrumbsSlots,
  BreadcrumbsProps,
  BreadcrumbsConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<BreadcrumbsConstructors> = {
    breadcrumbItem: {
      item: BreadcrumbItemInclude,
      canCreate: () => BreadcrumbItemInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        this.emits
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    }
  }

  /**
   * Returns WAI-ARIA attributes (`aria-label`) for the breadcrumb `<nav>` landmark.
   *
   * Возвращает WAI-ARIA атрибуты (`aria-label`) для навигационного ориентира `<nav>` хлебных крошек.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return AriaStaticInclude.label(this.i('text').breadcrumb)
  }

  /**
   * Returns binding attributes for the container `<nav>` element.
   *
   * Возвращает атрибуты привязки для контейнерного элемента `<nav>`.
   * @returns element bindings / привязки элемента
   */
  get binds(): ConstrBind {
    return {
      ...this.aria
    }
  }
}
