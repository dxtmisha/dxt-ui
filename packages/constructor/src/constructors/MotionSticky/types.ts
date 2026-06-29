import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type MotionStickyComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type MotionStickyEmits = {
  /** Event triggered when sticky status changes / Событие при изменении статуса прикрепления */
  sticky: [status: boolean]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface MotionStickyExpose {}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface MotionStickySlots {
  /** Slot for default content / Слот для основного содержимого */
  default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type MotionStickyClasses = {
  /** Main class of the component / Основной класс компонента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  // :classes [!] System label / Системная метка
}
