import type { ConstrClass } from '@dxtmisha/functional'
import type { SliderEventPayload, SliderValue } from '../Slider/basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SliderFieldComponents = {
  icon?: object
  slider?: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SliderFieldEmits = {
  'on-input': [payload: SliderEventPayload]
  'on-change': [payload: SliderEventPayload]
  'update:value': [value: SliderValue]
  'update:modelValue': [value: SliderValue]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SliderFieldExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SliderFieldSlots {
  default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SliderFieldClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  hidden: string
  label: string
  body: string
  icon: string
  text: string
  input: string
  value: string
  slider: string
  validation: string
  helper: string
  // :classes [!] System label / Системная метка
}
