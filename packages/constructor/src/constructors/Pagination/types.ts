import type { VNode } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'

import type { EventClickEmits, EventClickValue } from '../../types/eventClickTypes'
import type { ModelEmits } from '../../types/modelTypes'

import type { ButtonComponentInclude } from '../Button'
import type { MenuComponentInclude } from '../Menu'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type PaginationComponents = ButtonComponentInclude & MenuComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type PaginationEmits = EventClickEmits
  & ModelEmits<number>
  & {
    /** Rows per page update event / Событие обновления количества строк на странице */
    'update:rows': [value: number]
    /** Model rows per page update event / Событие обновления количества строк модели */
    'update:modelRows': [value: number]
    /** Show more button click event / Событие клика по кнопке «Показать еще» */
    'more': [
      event: MouseEvent,
      options?: EventClickValue
    ]
    /** Lightweight show more event / Упрощённое событие «Показать еще» */
    'moreLite': [options?: EventClickValue]
    /** Show previous button click event / Событие клика по кнопке «Показать предыдущие» */
    'morePrev': [
      event: MouseEvent,
      options?: EventClickValue
    ]
    /** Lightweight show previous event / Упрощённое событие «Показать предыдущие» */
    'morePrevLite': [options?: EventClickValue]
    /** Rows per page selection event / Событие выбора количества строк на странице */
    'rows': [
      event: MouseEvent,
      options?: EventClickValue
    ]
    /** Lightweight rows selection event / Упрощённое событие выбора количества строк */
    'rowsLite': [options?: EventClickValue]
  }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface PaginationExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface PaginationSlots {
  /** Slot at the very beginning of the component / Слот в самом начале компонента */
  leading?(props?: Record<string, unknown>): VNode[]
  /** Slot in the middle before the spacer / Слот в середине перед разделителем (spacer) */
  info?(props?: Record<string, unknown>): VNode[]
  /** Slot at the very end of the component / Слот в самом конце компонента */
  trailing?(props?: Record<string, unknown>): VNode[]
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type PaginationClasses = {
  /** Main root element class / Класс главного корневого элемента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  button: string
  navigation: string
  more: string
  morePrev: string
  info: string
  menuRows: string
  menuRowsLabel: string
  ellipsis: string
  spacer: string
  // :classes [!] System label / Системная метка
}
