import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputFileComponents = {
  // componentName: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputFileEmits = {
  // load: [value: string]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputFileExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputFileSlots {
  // default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputFileClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
