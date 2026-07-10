import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ProgressBarComponents = {
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ProgressBarEmits = {
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ProgressBarExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ProgressBarSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ProgressBarClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  itemLabel: string
  itemProgress: string
  // :classes [!] System label / Системная метка
}
