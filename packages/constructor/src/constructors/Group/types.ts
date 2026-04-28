import type { ConstrClass } from '@dxtmisha/functional'
import type { BlockComponents, BlockEmits, BlockExpose, BlockSlots } from '../Block'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type GroupComponents = BlockComponents

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type GroupEmits = BlockEmits

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface GroupExpose extends BlockExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface GroupSlots extends BlockSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type GroupClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  headline: string
  header: string
  description: string
  body: string
  // :classes [!] System label / Системная метка
}
