// md5:0217dca8302170deab4adac8fad40239 true
export type ModelEmits<Value = string> = {
    'update:value': [value: Value];
    'update:modelValue': [value: Value];
};
export type ModelEmitsOpen<Value = boolean> = {
    'update:open': [value: Value];
    'update:modelOpen': [value: Value];
};
export type ModelEmitsSelected<Value = string> = {
    'update:selected': [value: Value];
    'update:modelSelected': [value: Value];
};
export type ModelProps<Value = string> = {
    'modelValue'?: Value;
    'onUpdate:value'?: (value: Value) => void;
    'onUpdate:modelValue'?: (value: Value) => void;
};
export type ModelPropsOpen<Value = boolean> = {
    'modelOpen'?: Value;
    'onUpdate:open'?: (value: Value) => void;
    'onUpdate:modelOpen'?: (value: Value) => void;
};
export type ModelPropsSelected<Value = string> = {
    'modelSelected'?: Value;
    'onUpdate:selected'?: (value: Value) => void;
    'onUpdate:modelSelected'?: (value: Value) => void;
};