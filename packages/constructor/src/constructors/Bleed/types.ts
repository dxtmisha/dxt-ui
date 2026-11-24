import type { VNode } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type BleedComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type BleedEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface BleedExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface BleedSlots {
  /** Slot for default bleed content / Слот для основного содержимого Bleed */
  default?(props?: Record<string, unknown>): VNode[]
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type BleedClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
