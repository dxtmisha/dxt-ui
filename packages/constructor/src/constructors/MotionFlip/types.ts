import type { ConstrClass } from '@dxtmisha/functional'
import type { MotionFlipCallback } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MotionFlipComponents = {
  // componentName: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MotionFlipEmits = {
  // load: [value: string]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MotionFlipExpose {
  update: (callback: MotionFlipCallback) => Promise<void>
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MotionFlipSlots {
  default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MotionFlipClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  // :classes [!] System label / Системная метка
}
