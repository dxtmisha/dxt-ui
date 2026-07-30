/**
 * Type for slider value (single number or min/max array).
 */
export type SliderValue = number | [number, number]

/**
 * Interface describing an individual mark on the slider scale.
 */
export type SliderMarkItem = {
  mark: number
  value: number
  text?: string
  style?: Record<string, string>
}

/**
 * Payload passed to slider events.
 */
export type SliderEventPayload = {
  value: SliderValue
  mark?: SliderValue
  item?: SliderMarkItem | [SliderMarkItem, SliderMarkItem]
}

/**
 * Emits signature for slider component inclusion.
 */
export type SliderEmitsInclude = {
  'on-input': [payload: SliderEventPayload]
  'on-change': [payload: SliderEventPayload]
  'update:value': [value: SliderValue]
  'update:modelValue': [value: SliderValue]
}

/**
 * Base properties for slider component inclusion.
 */
export type SliderPropsInclude = {
  value?: SliderValue
  modelValue?: SliderValue
  min?: number
  max?: number
  step?: number
  multiple?: boolean
  vertical?: boolean
  disabled?: boolean
  readonly?: boolean
  marks?: unknown
  magnet?: boolean
  minimumDistance?: number
}
