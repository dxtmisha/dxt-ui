import type { SliderEventPayload, SliderValue } from '../Slider/basicTypes'

/**
 * Type for slider field value.
 */
export type SliderFieldValue = SliderValue

/**
 * Emits signature for slider field component inclusion.
 */
export type SliderFieldEmitsInclude = {
  'on-input': [payload: SliderEventPayload]
  'on-change': [payload: SliderEventPayload]
  'update:value': [value: SliderFieldValue]
  'update:modelValue': [value: SliderFieldValue]
}

/**
 * Base properties for slider field component inclusion.
 */
export type SliderFieldPropsInclude = {
  value?: SliderFieldValue
  modelValue?: SliderFieldValue
  name?: string
  text?: string
  helperMessage?: string
  validationMessage?: string
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  icon?: string
  iconActive?: string
  iconTrailing?: string
  textLeading?: string
  textTrailing?: string
  showInput?: boolean
  showValue?: boolean
  showLabel?: boolean
}
