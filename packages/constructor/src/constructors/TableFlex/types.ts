import type { ConstrClass } from '@dxtmisha/functional'

import type {
  TableComponents,
  TableEmits,
  TableExpose,
  TableSlots
} from '../Table'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableFlexComponents = TableComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableFlexEmits = TableEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableFlexExpose extends TableExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type TableFlexSlots<
  Item = any,
  Value = any
> = TableSlots<Item, Value>

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableFlexClasses = {
  /** Main element class name / Основное имя класса элемента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  table: string
  colgroup: string
  col: string
  header: string
  foot: string
  items: string
  caption: string
  // :classes [!] System label / Системная метка
}
