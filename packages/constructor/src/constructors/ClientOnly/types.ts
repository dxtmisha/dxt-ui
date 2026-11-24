import type { VNode } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work /
 * Интерфейс для описания, какие компоненты надо подключить для работы
 */
export type ClientOnlyComponents = {}

/**
 * Type describing available events /
 * Тип, описывающий доступные события
 */
export type ClientOnlyEmits = {}

/**
 * Type describing available properties /
 * Тип, описывающий доступные свойства
 */
export interface ClientOnlyExpose {
}

/**
 * Type describing available slots /
 * Тип, описывающий доступные слоты
 */
export interface ClientOnlySlots {
  /** Default slot rendered on the client side / Слот по умолчанию, рендерящийся на стороне клиента */
  default?(props?: Record<string, unknown>): VNode[]
}

/**
 * Type describing subclasses /
 * Тип, описывающий подклассы
 */
export type ClientOnlyClasses = {
  /** Root element class / Класс корневого элемента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
