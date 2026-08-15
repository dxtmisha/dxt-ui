import type { ConstrClass } from '@dxtmisha/functional'

import type { ModelEmits } from '../../types/modelTypes'
import type {
  ClockDialEventItem,
  ClockDialMarkItem,
  ClockDialMarkSlot
} from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ClockDialComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ClockDialEmits = ModelEmits<number> & {
  /** Input event triggered on selection change / Событие ввода, вызываемое при изменении выбора */
  input: [event: ClockDialEventItem, value: number]
  /** Input event lite version / Упрощенная версия события ввода */
  inputLite: [value: number]
  /** Change event triggered on interaction end / Событие изменения, вызываемое при завершении взаимодействия */
  change: [event: ClockDialEventItem, value: number]
  /** Change event lite version / Упрощенная версия события изменения */
  changeLite: [value: number]
}

/**
 * Type describing available exposed properties and methods.
 *
 * Тип, описывающий доступные свойства и методы экспорта.
 */
export interface ClockDialExpose {
  /** Get current selected value / Получить текущее выбранное значение */
  getValue(): number | undefined
  /** Set new value / Установить новое значение */
  setValue(value?: number): void
  /** Select mark item by client coordinates / Выбрать элемент метки по координатам клиента */
  selectByCoordinates(clientX: number, clientY: number): ClockDialMarkItem | null
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ClockDialSlots {
  /** Default center dial slot / Слот по умолчанию для центрального циферблата */
  default?(props: any): any
  /** Custom clock item slot / Слот для пользовательского элемента часов */
  item?(props: ClockDialMarkSlot): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ClockDialClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  list: string
  value: string
  name: string
  info: string
  arrow: string
  point: string
  dial: string
  censor: string
  // :classes [!] System label / Системная метка
}
