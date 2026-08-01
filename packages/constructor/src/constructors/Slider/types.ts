import type { ConstrClass } from '@dxtmisha/functional'
import type { ComputedRef, Ref } from 'vue'

import type { SliderEventPayload } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type SliderComponents = {
  ripple?: object
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type SliderEmits = {
  'on-input': [payload: SliderEventPayload]
  'on-change': [payload: SliderEventPayload]
  'update:value': [value: number | number[]]
  'update:modelValue': [value: number | number[]]
}

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface SliderExpose {
  valueMin: ComputedRef<number>
  valueMax: ComputedRef<number>
  currentValue: ComputedRef<number | number[]>
  focusThumb: Ref<'min' | 'max'>
  set: (value: number | number[], type?: 'min' | 'max') => void
  updateValueByThumb: (inputValue: number, eventType?: 'on-input' | 'on-change') => void
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface SliderSlots {
  default?: (props: any) => any
  thumbMin?: (props: any) => any
  thumbMax?: (props: any) => any
  mark?: (props: any) => any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type SliderClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  rail: string
  track: string
  select: string
  thumb: string
  thumbMin: string
  thumbMax: string
  labelMin: string
  labelMax: string
  marks: string
  mark: string
  // :classes [!] System label / Системная метка
}
