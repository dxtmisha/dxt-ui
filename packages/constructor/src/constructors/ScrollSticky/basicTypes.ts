import type { ConstrBind } from '@dxtmisha/functional'
import type { ScrollStickyPropsBasic } from './props'

/**
 * Type describing the component inclusion structure. /
 * Тип, описывающий структуру включения компонента.
 */
export type ScrollStickyComponentInclude = {
  /** Scroll sticky component instance / Экземпляр компонента липкой прокрутки */
  scrollSticky?: object
}

/**
 * Type describing the properties inclusion. /
 * Тип, описывающий включение свойств.
 */
export type ScrollStickyPropsInclude<
  ScrollSticky extends ScrollStickyPropsBasic = ScrollStickyPropsBasic
> = {
  /** Target element/selector to sync scroll / Целевой элемент/селектор для синхронизации прокрутки */
  scrollStickyTarget?: string | HTMLElement
  /** Optional header element/selector to sync scroll / Необязательный элемент/селектор шапки для синхронизации прокрутки */
  scrollStickyHeader?: string | HTMLElement
  /** Fixed width configuration for scrollbar / Конфигурация фиксированной ширины для полосы прокрутки */
  scrollStickyFixWidth?: string
  /** Additional attributes for the scrollbar component / Дополнительные атрибуты для компонента полосы прокрутки */
  scrollStickyAttrs?: ConstrBind<ScrollSticky>
}
