import type { ConstrClass } from '@dxtmisha/functional'

import type { EventClickEmits } from '../../types/eventClickTypes'
import type { ModelEmits } from '../../types/modelTypes'

import type {
  ClockPeriodType
} from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ClockPeriodComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ClockPeriodEmits = ModelEmits<ClockPeriodType> & EventClickEmits

/**
 * Type describing available exposed properties and methods.
 *
 * Тип, описывающий доступные свойства и методы экспорта.
 */
export interface ClockPeriodExpose {
  /** Get current selected period value / Получить текущее выбранное значение периода */
  get(): ClockPeriodType | undefined
  /** Set new period value / Установить новое значение периода */
  set(value?: ClockPeriodType): void
  /** Set period value by hour / Установить значение периода по часу */
  setByHour(hour?: number): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ClockPeriodSlots {
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ClockPeriodClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  item: string
  am: string
  pm: string
  // :classes [!] System label / Системная метка
}
