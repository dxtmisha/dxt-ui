import type { ConstrClass } from '@dxtmisha/functional'

import type {
  TableItemComponents,
  TableItemEmits,
  TableItemExpose,
  TableItemSlots
} from '../TableItem'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableFlexItemComponents = TableItemComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableFlexItemEmits = TableItemEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableFlexItemExpose extends TableItemExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TableFlexItemSlots extends TableItemSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableFlexItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  description: string
  // :classes [!] System label / Системная метка
}
