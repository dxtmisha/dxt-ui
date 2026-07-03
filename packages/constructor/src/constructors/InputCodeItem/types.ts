import type { Ref } from 'vue'
import type { ConstrClass } from '@dxtmisha/functional'
import type { InputCodeItemPropsBasic } from './props'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type InputCodeItemComponents = {}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type InputCodeItemEmits = {
  /** Event triggered on focus / Событие, вызываемое при фокусе */
  focus: [index: InputCodeItemPropsBasic['index']]
  /** Event triggered on input / Событие, вызываемое при вводе */
  input: [index: InputCodeItemPropsBasic['index'], value: string]
  /** Event triggered on paste / Событие, вызываемое при вставке */
  paste: [index: InputCodeItemPropsBasic['index'], value: string]
  /** Event triggered on backspace / Событие, вызываемое при нажатии Backspace */
  backspace: [index: InputCodeItemPropsBasic['index']]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface InputCodeItemExpose {
  /** Item index / Индекс элемента */
  index: InputCodeItemPropsBasic['index']
  /** Reactive reference to the value / Реактивная ссылка на значение */
  value: Ref<string>
  /** Set the item's value / Установить значение элемента */
  set(value: string): void
  /** Reset the item's value / Сбросить значение элемента */
  reset(): void
  /** Focus the input element / Сфокусировать элемент ввода */
  focusInput(): void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface InputCodeItemSlots {}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type InputCodeItemClasses = {
  /** Main class / Главный класс */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  /** Class for input element / Класс для элемента ввода */
  input: string
  /** Class for auxiliary element / Класс для вспомогательного элемента */
  sub: string
  // :classes [!] System label / Системная метка
}
