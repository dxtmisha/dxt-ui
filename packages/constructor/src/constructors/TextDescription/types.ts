import type { ConstrClass } from '@dxtmisha/functional'

import type { DescriptionSlots } from '../../types/descriptionTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TextDescriptionComponents = {
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type TextDescriptionEmits = {
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface TextDescriptionExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface TextDescriptionSlots extends DescriptionSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type TextDescriptionClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  description: string
  // :classes [!] System label / Системная метка
}
