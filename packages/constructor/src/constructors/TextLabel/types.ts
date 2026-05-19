import type { ConstrClass } from '@dxtmisha/functional'

import type { LabelSlots } from '../../types/labelTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TextLabelComponents = {
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TextLabelEmits = {
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TextLabelExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TextLabelSlots extends LabelSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TextLabelClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  label: string
  // :classes [!] System label / Системная метка
}
