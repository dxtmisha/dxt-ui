import type { ConstrClass } from '@dxtmisha/functional'
import type { ImageCoordinator } from '@dxtmisha/functional-basic'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type RippleComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type RippleEmits = {}

/**
 * Type describing available properties and methods for defineExpose.
 *
 * Тип, описывающий доступные свойства и методы для defineExpose.
 */
export interface RippleExpose {
  /** Adding a ripple element at coordinates or at the center / Добавление элемента волны по координатам или по центру */
  add(coordinator?: ImageCoordinator): void
  /** Adding a ripple element at the center / Добавление элемента волны по центру */
  addCenter(): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface RippleSlots {}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type RippleClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  // :classes [!] System label / Системная метка
}
