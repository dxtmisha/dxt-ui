import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SegmentControlItemComponents = {
  // componentName: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SegmentControlItemEmits = {
  // load: [value: string]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SegmentControlItemExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SegmentControlItemSlots {
  // default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SegmentControlItemClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
