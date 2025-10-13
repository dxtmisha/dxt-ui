import type { ConstrClass } from '@dxtmisha/functional'

import type { WindowComponentInclude, WindowExposeInclude, WindowSlots } from '../Window'
import type { BarsComponentInclude, BarsEmitsInclude } from '../Bars'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ActionSheetComponents
  = WindowComponentInclude
    & BarsComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ActionSheetEmits = BarsEmitsInclude

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ActionSheetExpose extends WindowExposeInclude {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ActionSheetSlots extends WindowSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ActionSheetClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
