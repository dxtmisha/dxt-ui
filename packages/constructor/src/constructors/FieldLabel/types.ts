import type { ConstrClass } from '@dxt-ui/functional'
import type { LabelAlternativeSlots } from '../../types/labelTypes'
import { type FieldCounterComponentInclude } from '../FieldCounter'
import { type ProgressComponentInclude } from '../Progress'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type FieldLabelComponents
  = FieldCounterComponentInclude
    & ProgressComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type FieldLabelEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface FieldLabelExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface FieldLabelSlots extends LabelAlternativeSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type FieldLabelClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  required: string
  // :classes [!] System label / Системная метка
}
