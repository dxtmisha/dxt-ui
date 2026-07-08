import type { ConstrClass } from '@dxtmisha/functional'

import type { IconComponentInclude } from '../Icon'
import type { TableItemSlots } from '../TableItem'
import type { TooltipComponentInclude } from '../Tooltip'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableHeaderItemComponents = IconComponentInclude & TooltipComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TableHeaderItemEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TableHeaderItemExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные slots.
 */
export interface TableHeaderItemSlots extends TableItemSlots {
  /** Slot for displaying custom tooltip body / Слот для отображения пользовательского содержимого подсказки */
  tooltip?(): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TableHeaderItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  label: string
  labelHeader: string
  description: string
  tooltip: string
  // :classes [!] System label / Системная метка
}
