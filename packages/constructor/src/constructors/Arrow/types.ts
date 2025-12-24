import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ArrowComponents = {
  // componentName: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ArrowEmits = {
  // load: [value: string]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ArrowExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ArrowSlots {
  // default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ArrowClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  hidden: string
  arrow: string
  // :classes [!] System label / Системная метка
}
