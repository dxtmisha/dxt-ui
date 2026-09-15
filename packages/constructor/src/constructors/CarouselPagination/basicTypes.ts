import type { ConstrBind } from '@dxtmisha/functional'
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
