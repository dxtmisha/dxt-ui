import type { ComputedRef } from 'vue'
import type { ElementOrWindow } from '@dxtmisha/functional-basic'

/**
 * Interface representing incoming properties of HeadroomInclude.
 *
 * Интерфейс, представляющий входящие свойства HeadroomInclude.
 */
export type HeadroomPropsInclude = {
  /** Target scrolling element or window / Элемент или окно для прокрутки */
  element?: ElementOrWindow
  /** Hide element on scroll down and reveal on scroll up / Скрывать элемент при прокрутке вниз и показывать при прокрутке вверх */
  disappears?: boolean
  /** Transform threshold in pixels for transformation calculations / Порог трансформации в пикселях */
  transform?: number
}

/**
 * Type describing headroom events.
 *
 * Тип, описывающий события headroom.
 */
export type HeadroomEmitsInclude = {
  headroomScroll: [value: number, isSticky: boolean]
  headroomSticky: [isSticky: boolean]
}

/**
 * Interface representing exposed methods and properties of HeadroomInclude.
 *
 * Интерфейс, представляющий экспонируемые методы и свойства HeadroomInclude.
 */
export type HeadroomExposeInclude = {
  isSticky: ComputedRef<boolean>
  update: () => void
}
