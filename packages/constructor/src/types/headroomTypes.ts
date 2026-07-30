import type { ComputedRef } from 'vue'
import type { ElementOrWindow } from '@dxtmisha/functional-basic'

/**
 * Interface representing incoming properties of HeadroomInclude.
 *
 * Интерфейс, представляющий входящие свойства HeadroomInclude.
 */
export type HeadroomPropsInclude = {
  /** Target scrolling element or window / Элемент или окно для прокрутки */
  scrollElement?: ElementOrWindow | string
  /** Hide element on scroll down and reveal on scroll up / Скрывать элемент при прокрутке вниз и показывать при прокрутке вверх */
  disappears?: boolean
  /** Transform threshold in pixels for transformation calculations / Порог трансформации в пикселях */
  transformThreshold?: number
}

/**
 * Event payload interface for Headroom events.
 *
 * Интерфейс данных события Headroom.
 */
export type HeadroomEventItem = {
  value: number
  disappearsValue: number
  isSticky: boolean
  transformThreshold: number
  transformValue: number
  transformPercent: number
  valueDifference: number
}

/**
 * Type describing headroom events.
 *
 * Тип, описывающий события headroom.
 */
export type HeadroomEmitsInclude = {
  headroomScroll: [event: HeadroomEventItem]
  headroomSticky: [event: HeadroomEventItem]
}

/**
 * Interface representing exposed methods and properties of HeadroomInclude.
 *
 * Интерфейс, представляющий экспонируемые методы и свойства HeadroomInclude.
 */
export type HeadroomExposeInclude = {
  isSticky: ComputedRef<boolean>
  getValues: () => HeadroomEventItem
  update: () => void
}
