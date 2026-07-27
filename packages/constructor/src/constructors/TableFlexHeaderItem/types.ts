import type { ConstrClass } from '@dxtmisha/functional'

import type {
  TableHeaderItemComponents,
  TableHeaderItemEmits,
  TableHeaderItemExpose,
  TableHeaderItemSlots
} from '../TableHeaderItem'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableFlexHeaderItemComponents = TableHeaderItemComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableFlexHeaderItemEmits = TableHeaderItemEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableFlexHeaderItemExpose extends TableHeaderItemExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TableFlexHeaderItemSlots extends TableHeaderItemSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableFlexHeaderItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  description: string
  body: string
  sort: string
  tooltip: string
  // :classes [!] System label / Системная метка
}
