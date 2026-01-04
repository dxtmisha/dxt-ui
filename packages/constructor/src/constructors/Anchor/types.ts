import type { ConstrClass } from '@dxtmisha/functional'
import type { TooltipComponentInclude } from '../Tooltip'
import type { LabelExpose, LabelSlots } from '../../types/labelTypes'
import type { IconComponentInclude } from '../Icon'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type AnchorComponents = TooltipComponentInclude
  & IconComponentInclude

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
export interface AnchorExpose extends LabelExpose {
  go(): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface AnchorSlots extends LabelSlots {
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
