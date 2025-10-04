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
/**
 * Props for model value used with v-model/
 * Свойства для значения модели, используемого с v-model
 */
export interface ModelProps<Value = string> {
    /** Model value prop/ Свойство значения модели */
    'modelValue'?: Value;
    /** Update value handler/ Обработчик обновления значения */
    'onUpdate:value'?: (value: Value) => void;
    /** Update model value handler/ Обработчик обновления значения модели */
    'onUpdate:modelValue'?: (value: Value) => void;
}
