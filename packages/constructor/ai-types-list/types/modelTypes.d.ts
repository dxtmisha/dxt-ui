// md5:0436427ebcf47956ead4e0afbbdb92fa true
/** Event signatures for v-model value updates. @keywords model, emits, v-model, value */
export type ModelEmits<Value = string> = {
    'update:value': [value: Value];
    'update:modelValue': [value: Value];
};
/** Event signatures for model files updates. @keywords model, emits, files, v-model */
export type ModelEmitsFiles<Value = FileList | undefined> = {
    'update:files': [value: Value];
    'update:modelFiles': [value: Value];
};
/** Event signatures for model open state updates. @keywords model, emits, open, v-model */
export type ModelEmitsOpen<Value = boolean> = {
    'update:open': [value: Value];
    'update:modelOpen': [value: Value];
};
/** Event signatures for model selected item updates. @keywords model, emits, selected, v-model */
export type ModelEmitsSelected<Value = string> = {
    'update:selected': [value: Value];
    'update:modelSelected': [value: Value];
};
/** Props and event handlers for model value binding. @keywords model, props, v-model, value */
export type ModelProps<Value = string> = {
    'modelValue'?: Value;
    'onUpdate:value'?: (value: Value) => void;
    'onUpdate:modelValue'?: (value: Value) => void;
};
/** Props and event handlers for model files binding. @keywords model, props, files, v-model */
export type ModelPropsFiles<Value = FileList | undefined> = {
    'modelFiles'?: Value;
    'onUpdate:files'?: (value: Value) => void;
    'onUpdate:modelFiles'?: (value: Value) => void;
};
/** Props and event handlers for model open state binding. @keywords model, props, open, v-model */
export type ModelPropsOpen<Value = boolean> = {
    'modelOpen'?: Value;
    'onUpdate:open'?: (value: Value) => void;
    'onUpdate:modelOpen'?: (value: Value) => void;
};
/** Props and event handlers for model selected item binding. @keywords model, props, selected, v-model */
export type ModelPropsSelected<Value = string> = {
    'modelSelected'?: Value;
    'onUpdate:selected'?: (value: Value) => void;
    'onUpdate:modelSelected'?: (value: Value) => void;
};