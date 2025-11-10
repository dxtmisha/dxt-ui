import type { ConstrClass, ListSelectedList } from '@dxtmisha/functional'
import type { ChipComponentInclude } from '../Chip'
import type { EventClickEmits } from '../../types/eventClickTypes'
import type { ModelEmitsSelected } from '../../types/modelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ChipGroupComponents = ChipComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ChipGroupEmits = EventClickEmits & ModelEmitsSelected<ListSelectedList>

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ChipGroupExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ChipGroupSlots {
  default?(props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ChipGroupClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  // :classes [!] System label / Системная метка
}
