import type { ConstrClass } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ScrollStickyComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ScrollStickyEmits = {}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ScrollStickyExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ScrollStickySlots {
  /** Slot for default ScrollSticky content / Слот для основного содержимого ScrollSticky */
  default? (props: {
    /**
     * Recalculates the scroll width. /
     * Пересчитывает ширину прокрутки.
     */
    onResize(): void
  }): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ScrollStickyClasses = {
  /** Main class name / Название основного класса */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  context: string
  scroll: string
  // :classes [!] System label / Системная метка
}
