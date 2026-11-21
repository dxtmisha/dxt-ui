/**
 * Event signatures for model updates/
 * Сигнатуры событий для обновления модели
 */
export type ModelEmits<Value = string> = {
  /** Update value event/ Событие обновления значения */
  'update:value': [value: Value]
  /** Update model value event/ Событие обновления значения модели */
  'update:modelValue': [value: Value]
}

/**
 * Event signatures for model country updates/
 * Сигнатуры событий для обновления страны модели
 */
export type ModelEmitsCountry<Value = string> = {
  /** Update country event/ Событие обновления страны */
  'update:country': [value: Value]
  /** Update model country event/ Событие обновления страны модели */
  'update:modelCountry': [value: Value]
}

/**
 * Event signatures for model digits updates/
 * Сигнатуры событий для обновления цифр номера модели
 */
export type ModelEmitsDigits<Value = string | undefined> = {
  /** Update digits event/ Событие обновления цифр номера */
  'update:digits': [value: Value]
  /** Update model digits event/ Событие обновления цифр номера модели */
  'update:modelDigits': [value: Value]
}

/**
 * Event signatures for model E.164 updates/
 * Сигнатуры событий для обновления номера E.164 модели
 */
export type ModelEmitsE164<Value = string | undefined> = {
  /** Update E.164 event/ Событие обновления номера E.164 */
  'update:e164': [value: Value]
  /** Update model E.164 event/ Событие обновления номера E.164 модели */
  'update:modelE164': [value: Value]
}

/**
 * Event signatures for model files updates/
 * Сигнатуры событий для обновления файлов модели
 */
export type ModelEmitsFiles<Value = FileList | undefined> = {
  /** Update files event/ Событие обновления файлов */
  'update:files': [value: Value]
  /** Update model files event/ Событие обновления файлов модели */
  'update:modelFiles': [value: Value]
}

/**
 * Event signatures for model open updates/
 * Сигнатуры событий для обновления открытия модели
 */
export type ModelEmitsOpen<Value = boolean> = {
  /** Update open event/ Событие обновления открытия */
  'update:open': [value: Value]
  /** Update model open event/ Событие обновления открытия модели */
  'update:modelOpen': [value: Value]
}

/**
 * Event signatures for model selected updates/
 * Сигнатуры событий для обновления выбранного значения модели
 */
export type ModelEmitsSelected<Value = string> = {
  /** Update value event/ Событие обновления значения */
  'update:selected': [value: Value]
  /** Update model value event/ Событие обновления значения модели */
  'update:modelSelected': [value: Value]
}

/**
 * Props for model value used with v-model/
 * Свойства для значения модели, используемого с v-model
 */
export type ModelProps<Value = string> = {
  /** Model value prop/ Свойство значения модели */
  'modelValue'?: Value
  /** Update value handler/ Обработчик обновления значения */
  'onUpdate:value'?: (value: Value) => void
  /** Update model value handler/ Обработчик обновления значения модели */
  'onUpdate:modelValue'?: (value: Value) => void
}

/**
 * Props for model country used with v-model/
 * Свойства для страны модели, используемой с v-model
 */
export type ModelPropsCountry<Value = string> = {
  /** Country prop/ Свойство страны */
  'country'?: Value
  /** Model country prop/ Свойство страны модели */
  'modelCountry'?: Value
  /** Update country handler/ Обработчик обновления страны */
  'onUpdate:country'?: (value: Value) => void
  /** Update model country handler/ Обработчик обновления страны модели */
  'onUpdate:modelCountry'?: (value: Value) => void
}

/**
 * Props for model digits used with v-model:digits/
 * Свойства для цифр номера модели, используемых с v-model:digits
 */
export type ModelPropsDigits<Value = string | undefined> = {
  /** Digits prop/ Свойство цифр номера */
  'digits'?: Value
  /** Model digits prop/ Свойство цифр номера модели */
  'modelDigits'?: Value
  /** Update digits handler/ Обработчик обновления цифр номера */
  'onUpdate:digits'?: (value: Value) => void
  /** Update model digits handler/ Обработчик обновления цифр номера модели */
  'onUpdate:modelDigits'?: (value: Value) => void
}

/**
 * Props for model E.164 used with v-model:e164/
 * Свойства для номера E.164 модели, используемого с v-model:e164
 */
export type ModelPropsE164<Value = string | undefined> = {
  /** E.164 prop/ Свойство номера E.164 */
  'e164'?: Value
  /** Model E.164 prop/ Свойство номера E.164 модели */
  'modelE164'?: Value
  /** Update E.164 handler/ Обработчик обновления номера E.164 */
  'onUpdate:e164'?: (value: Value) => void
  /** Update model E.164 handler/ Обработчик обновления номера E.164 модели */
  'onUpdate:modelE164'?: (value: Value) => void
}

/**
 * Props for model files used with v-model/
 * Свойства для файлов модели, используемых с v-model
 */
export type ModelPropsFiles<Value = FileList | undefined> = {
  /** Model files prop/ Свойство файлов модели */
  'modelFiles'?: Value
  /** Update files handler/ Обработчик обновления файлов */
  'onUpdate:files'?: (value: Value) => void
  /** Update model files handler/ Обработчик обновления файлов модели */
  'onUpdate:modelFiles'?: (value: Value) => void
}

/**
 * Props for model open used with v-model/
 * Свойства для значения открытия модели, используемого с v-model
 */
export type ModelPropsOpen<Value = boolean> = {
  /** Model value prop/ Свойство значения модели */
  'modelOpen'?: Value
  /** Update value handler/ Обработчик обновления значения */
  'onUpdate:open'?: (value: Value) => void
  /** Update model value handler/ Обработчик обновления значения модели */
  'onUpdate:modelOpen'?: (value: Value) => void
}

/**
 * Props for model selected used with v-model/
 * Свойства для выбранного значения модели, используемого с v-model
 */
export type ModelPropsSelected<Value = string> = {
  /** Model value prop/ Свойство значения модели */
  'modelSelected'?: Value
  /** Update value handler/ Обработчик обновления значения */
  'onUpdate:selected'?: (value: Value) => void
  /** Update model value handler/ Обработчик обновления значения модели */
  'onUpdate:modelSelected'?: (value: Value) => void
}
