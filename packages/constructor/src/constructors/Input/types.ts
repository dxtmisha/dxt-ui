import type { ConstrClass } from '@dxtmisha/functional'
import type { MaskComponentInclude } from '../Mask'
import type { FieldComponentInclude, FieldSlotsInclude } from '../Field'
import type { InputEmitsInclude, InputExposeInclude } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputComponents
  = MaskComponentInclude
    & FieldComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputEmits = InputEmitsInclude

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputExpose extends InputExposeInclude {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputSlots extends FieldSlotsInclude {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
