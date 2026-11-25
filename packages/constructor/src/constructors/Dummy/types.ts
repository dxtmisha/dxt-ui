import type { VNode } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type DummyComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type DummyEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface DummyExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface DummySlots {
  /** Default slot for the component / Слот по умолчанию для компонента */
  default?(props?: Record<string, unknown>): VNode[]
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type DummyClasses = {
  /** Root element classes / Классы корневого элемента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
