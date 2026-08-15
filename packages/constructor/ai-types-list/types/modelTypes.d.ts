// md5:0436427ebcf47956ead4e0afbbdb92fa true
export type ModelEmits<Value = string> = {
    'update:value': [value: Value];
    'update:modelValue': [value: Value];
};
export type ModelEmitsFiles<Value = FileList | undefined> = {
    'update:files': [value: Value];
    'update:modelFiles': [value: Value];
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
export type ModelPropsFiles<Value = FileList | undefined> = {
    'modelFiles'?: Value;
    'onUpdate:files'?: (value: Value) => void;
    'onUpdate:modelFiles'?: (value: Value) => void;
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