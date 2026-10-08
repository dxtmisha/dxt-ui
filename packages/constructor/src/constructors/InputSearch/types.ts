import type { ConstrClass } from '@dxtmisha/functional'
import type { FieldComponentInclude, FieldSlotsInclude } from '../Field'
import type { FieldBasicEmits, FieldBasicExpose } from '../../types/fieldTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputSearchComponents = FieldComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputSearchEmits = FieldBasicEmits<string>

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputSearchExpose extends FieldBasicExpose<string> {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputSearchSlots extends FieldSlotsInclude {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputSearchClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
