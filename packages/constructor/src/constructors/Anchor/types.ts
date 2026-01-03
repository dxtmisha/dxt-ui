import type { ConstrClass } from '@dxtmisha/functional'
import type { TooltipComponentInclude } from '../Tooltip'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type AnchorComponents = TooltipComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type AnchorEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface AnchorExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface AnchorSlots {
  default?(): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type AnchorClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
