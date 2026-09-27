import type { ConstrClass } from '@dxtmisha/functional'
import type { ModelEmits } from '../../types/modelTypes'
import type {
  ClockPeriodEventItem,
  ClockPeriodSlotData,
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
export type ClockPeriodEmits = ModelEmits<ClockPeriodType> & {
  /** Input event triggered on selection change / Событие ввода, вызываемое при изменении выбора */
  input: [event: ClockPeriodEventItem, value: ClockPeriodType]
  /** Input event lite version / Упрощенная версия события ввода */
  inputLite: [value: ClockPeriodType]
  /** Change event triggered on selection change / Событие изменения, вызываемое при изменении выбора */
  change: [event: ClockPeriodEventItem, value: ClockPeriodType]
  /** Change event lite version / Упрощенная версия события изменения */
  changeLite: [value: ClockPeriodType]
}

/**
 * Type describing available exposed properties and methods.
 *
 * Тип, описывающий доступные свойства и методы экспорта.
 */
export interface ClockPeriodExpose {
  /** Get current selected period value / Получить текущее выбранное значение периода */
  getValue(): ClockPeriodType | undefined
  /** Set new period value / Установить новое значение периода */
  setValue(value?: ClockPeriodType): void
  /** Toggle between AM and PM periods / Переключить между периодами AM и PM */
  toggle(): void
  /** Select AM period / Выбрать период AM */
  setAm(): void
  /** Select PM period / Выбрать период PM */
  setPm(): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface ClockPeriodSlots {
  /** Default slot / Слот по умолчанию */
  default?(props: any): any
  /** Custom item slot / Слот для пользовательского элемента */
  item?(props: ClockPeriodSlotData): any
  /** AM item slot / Слот для элемента AM */
  am?(props: ClockPeriodSlotData): any
  /** PM item slot / Слот для элемента PM */
  pm?(props: ClockPeriodSlotData): any
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
  label: string
  // :classes [!] System label / Системная метка
}
