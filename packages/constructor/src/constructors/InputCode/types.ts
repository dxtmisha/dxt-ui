import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputCodeComponents = {
  // componentName: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputCodeEmits = {
  // load: [value: string]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputCodeExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputCodeSlots {
  // default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputCodeClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
