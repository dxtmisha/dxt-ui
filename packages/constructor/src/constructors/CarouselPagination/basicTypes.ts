import type {
  ConstrBind,
  ConstrClass,
  ConstrStyles,
  NumberOrString
} from '@dxtmisha/functional'

import type { AriaList } from '../../types/ariaTypes'
import type { CarouselPaginationPropsBasic } from './props'

/**
 * Interface describing each pagination item/bullet.
 *
 * Интерфейс, описывающий отдельный элемент/буллет пагинации.
 */
export type CarouselPaginationItem = {
  /** Item index (1-based) / Индекс элемента (начиная с 1) */
  index: number
  /** Whether this item is active / Выбран ли данный элемент */
  selected: boolean
  /** Relative scale factor for dynamic bullets / Относительный масштаб для динамических буллетов */
  scale?: number
  /** Item styles / Стили элемента */
  style?: ConstrStyles
  /** Tab index / Индекс табуляции */
  tabindex?: number
  /** ARIA attributes / ARIA-атрибуты */
  aria?: AriaList
  /** Item button binds / Привязки кнопки элемента */
  binds?: CarouselPaginationItemBinds
}

/**
 * Type describing the item button binds.
 *
 * Тип, описывающий привязки элемента (кнопки) пагинации.
 */
export type CarouselPaginationItemBinds = AriaList & {
  /** Item key / Ключ элемента */
  'key'?: number | string
  /** Button type / Тип кнопки */
  'type'?: string
  /** Item index data attribute / Data-атрибут индекса элемента */
  'data-index'?: number
  /** Item classes / Классы элемента */
  'class'?: ConstrClass
  /** Item styles / Стили элемента */
  'style'?: ConstrStyles
  /** Tab index / Индекс табуляции */
  'tabindex'?: NumberOrString
  /** Click handler / Обработчик клика */
  'onClick'?: (event: MouseEvent) => void
}

/**
 * Type describing the fraction binds.
 *
 * Тип, описывающий привязки для дроби.
 */
export type CarouselPaginationFractionBinds = AriaList & {
  /** Fraction container key / Ключ контейнера дроби */
  key?: string
  /** Fraction container class / Класс контейнера дроби */
  class?: string
}

/**
 * Type describing the progress bar binds.
 *
 * Тип, описывающий привязки для полосы прогресса.
 */
export type CarouselPaginationProgressBinds = AriaList & {
  /** Progress container key / Ключ контейнера прогресса */
  key?: string
  /** Progress container class / Класс контейнера прогресса */
  class?: string
}

/**
 * Dependency registration type for parent components.
 *
 * Тип регистрации зависимостей для родительских компонентов.
 */
export type CarouselPaginationComponentInclude = {
  /** CarouselPagination component configuration / Конфигурация компонента CarouselPagination */
  carouselPagination?: object
}

/**
 * Props for embedding CarouselPagination attributes inside another component.
 *
 * Свойства для внедрения атрибутов CarouselPagination внутри другого компонента.
 */
export type CarouselPaginationPropsInclude<
  CarouselPagination extends CarouselPaginationPropsBasic = CarouselPaginationPropsBasic
> = {
  /** Bound attributes passed directly to CarouselPagination / Атрибуты, передаваемые напрямую в CarouselPagination */
  carouselPaginationAttrs?: ConstrBind<CarouselPagination>
}
