/**
 * Event signatures for model updates/
 * Сигнатуры событий для обновления модели
 */
export type ModelEmits<Value = string> = {
  'update:value': [value: Value]
  'update:modelValue': [value: Value]
}

/**
 * Props for model value used with v-model/
 * Свойства для значения модели, используемого с v-model
 */
export interface ModelProps<Value = string> {
  'modelValue'?: Value
  'onUpdate:value'?: (value: Value) => void
  'onUpdate:modelValue'?: (value: Value) => void
}
