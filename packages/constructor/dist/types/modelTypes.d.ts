/**
 * Event signatures for model updates/
 * Сигнатуры событий для обновления модели
 */
export type ModelEmits<Value = string> = {
    /** Update value event/ Событие обновления значения */
    'update:value': [value: Value];
    /** Update model value event/ Событие обновления значения модели */
    'update:modelValue': [value: Value];
};
export type ModelEmitsSelected<Value = string> = {
    /** Update value event/ Событие обновления значения */
    'update:selected': [value: Value];
    /** Update model value event/ Событие обновления значения модели */
    'update:modelSelected': [value: Value];
};
/**
 * Props for model value used with v-model/
 * Свойства для значения модели, используемого с v-model
 */
export type ModelProps<Value = string> = {
    /** Model value prop/ Свойство значения модели */
    'modelValue'?: Value;
    /** Update value handler/ Обработчик обновления значения */
    'onUpdate:value'?: (value: Value) => void;
    /** Update model value handler/ Обработчик обновления значения модели */
    'onUpdate:modelValue'?: (value: Value) => void;
};
export type ModelPropsSelected<Value = string> = {
    /** Model value prop/ Свойство значения модели */
    'modelSelected'?: Value;
    /** Update value handler/ Обработчик обновления значения */
    'onUpdate:selected'?: (value: Value) => void;
    /** Update model value handler/ Обработчик обновления значения модели */
    'onUpdate:modelSelected'?: (value: Value) => void;
};
