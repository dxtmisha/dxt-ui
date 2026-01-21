import type { NumberOrString } from '@dxtmisha/functional'

/**
 * Exposed properties for label components/ Экспонируемые свойства для компонентов меток
 */
export interface LabelExpose {
  /** Label element ID/ Идентификатор элемента метки */
  labelId: string
}

/**
 * Slot definitions for label components/ Определения слотов для компонентов меток
 */
export interface LabelSlots {
  /** Default slot content/ Содержимое слота по умолчанию */
  default?(props: any): any
}

/**
 * Alternative slot definitions for label components/ Альтернативные определения слотов для компонентов меток
 */
export interface LabelAlternativeSlots {
  /** Label slot content/ Содержимое слота метки */
  label?(props: any): any
}

/**
 * Slot definitions for numeric label components/ Определения слотов для числовых компонентов меток
 */
export interface LabelNumberSlots extends LabelSlots {
}

/**
 * Slot definitions for highlighted label components/ Определения слотов для компонентов меток с подсветкой
 */
export interface LabelHighlightSlots extends LabelSlots {
}

/**
 * Properties for label components/ Свойства для компонентов меток
 */
export type LabelProps = {
  /** Label text or number/ Текст или число метки */
  label?: NumberOrString
  /** Label element ID/ Идентификатор элемента метки */
  labelId?: string
}

/**
 * Properties for numeric label components/ Свойства для числовых компонентов меток
 */
export type LabelNumberProps = LabelProps & {
  /** Maximum value for the label/ Максимальное значение для метки */
  labelMax?: NumberOrString
  /** Enable number formatting/ Включить форматирование чисел */
  formatting?: boolean
}

/**
 * Properties for highlighted label components/ Свойства для компонентов меток с подсветкой
 */
export type LabelHighlightProps = LabelProps & {
  /** Text to highlight/ Текст для подсветки */
  highlight?: string
  /** Starting length for highlight/ Начальная длина для подсветки */
  highlightLengthStart?: number
  /** Current value/ Текущее значение */
  value?: any
}
