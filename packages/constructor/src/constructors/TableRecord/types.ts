import type { ConstrClass } from '@dxtmisha/functional'
import type { TableHeaderItemComponentInclude, TableHeaderItemSlots } from '../TableHeaderItem'
import type { TableItemComponentInclude } from '../TableItem'

/**
 * Interface for describing which components need to be connected for work. /
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableRecordComponents = TableHeaderItemComponentInclude & TableItemComponentInclude

/**
 * Type describing available events. /
 * Тип, описывающий доступные события.
 */
export type TableRecordEmits = {}

/**
 * Type describing available properties. /
 * Тип, описывающий доступные свойства.
 */
export interface TableRecordExpose {}

/**
 * Type describing available slots. /
 * Тип, описывающий доступные слоты.
 */
export interface TableRecordSlots extends TableHeaderItemSlots {
  [key: string]: any
}

/**
 * Type describing subclasses. /
 * Тип, описывающий подклассы.
 */
export type TableRecordClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
