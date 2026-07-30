import type { ConstrClass } from '@dxtmisha/functional'
import type { SliderEventPayload, SliderValue } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SliderComponents = {
  // componentName: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SliderEmits = {
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
export interface SliderExpose {
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SliderSlots {
  default? (props: any): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SliderClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  thumb: string
  label: string
  rail: string
  track: string
  marks: string
  mark: string
  select: string
  // :classes [!] System label / Системная метка
}
