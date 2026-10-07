// md5:c0031c1d90cfba98508ccc8761a37e34 true
import type { Ref } from 'vue';
import type { ListRecord, NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional';

export type FieldType = 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';

export type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;

export type FieldElementInput = FieldElementDom | HTMLElement | Record<string, any> | undefined;

export type FieldValidityCodeItem = {
    [K in keyof ValidityState]?: string;
};

export type FieldValidityCode = string | FieldValidityCodeItem;

export type FieldMaskItem = {
    group: string;
    value: string;
    maxLength: number;
    full: boolean;
    end: boolean;
    chars: string[];
};

export type FieldMasks = Record<string, FieldMaskItem>;

export type FieldPatternElement = Partial<HTMLInputElement>;

export type FieldPatternItem = string | FieldPatternElement;

export type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem);

export type FieldPatternList = Record<string, FieldPatternItemOrFunction>;

export type FieldMatchItem = {
    name?: string | HTMLInputElement;
    validationMessage?: string;
};

export type FieldMatch = string | HTMLInputElement | FieldMatchItem;

export type FieldCheckMain = {
    group?: string;
    input?: FieldElementDom;
    pattern?: FieldPatternItemOrFunction;
};

export type FieldCheckItem<Value = any> = FieldCheckMain & {
    /** Run validation check for the specified value @keywords validation, check */
    check(value: Value): FieldValidationItem<Value>;
};

export type FieldCheckList = Record<string, FieldCheckItem>;

export type FieldValidationItem<Value = any> = FieldCheckMain & {
    type?: string;
    status?: boolean;
    required?: boolean;
    isFull?: boolean;
    validationMessage?: string;
    validity?: ValidityState;
    validityMessage?: string;
    value: Value;
    valueInput?: Value;
    detail?: Record<string, any>;
};

/** File field value metadata, source, dimensions, and crop coordinates @keywords file, media, upload */
export type FieldFileValue = {
    id?: string | number;
    value?: string;
    name?: string;
    type?: string;
    size?: number;
    width?: number;
    height?: number;
    lastModified?: number;
    crop?: CropAreaCoordinator;
    thumbnail?: string;
    file?: File;
};

/** Emitted events for field value updates and commits @keywords events, emits, input, change */
export type FieldValueEmits<T = any> = {
    input: [event: InputEvent | Event, value: FieldValidationItem<T>];
    inputLite: [value: FieldValidationItem<T>];
    change: [event: InputEvent | Event, value: FieldValidationItem<T>];
    changeLite: [value: FieldValidationItem<T>];
};

export type FieldBasicEmits<T = any> = ModelEmits<T> & FieldValueEmits<T>;

/** Exposed properties and control methods for field components @keywords expose, methods, form */
export type FieldBasicExpose<T = string> = {
    value: Ref<T>;
    /** Returns the current field value @keywords get, value */
    getValue: () => T | undefined;
    /** Sets the field value @keywords set, value */
    setValue: (value: any) => void;
    /** Clears the current field value @keywords clear, reset */
    clear: () => void;
    /** Checks validity of the field and returns status @keywords validity, validate */
    checkValidity: () => boolean;
    /** Returns current validation error message @keywords validation, message, error */
    getValidationMessage: () => string;
};

export type FieldValueProps<Value = any> = ModelProps<Value> & {
    placeholder?: string;
    multiple?: boolean;
    maxlength?: NumberOrString;
    value?: Value;
    detail?: Record<string, any> | undefined;
};

export type FieldBasicProps<Value = any> = Omit<FieldValueProps<Value>, 'multiple' | 'maxlength'> & {
    type?: 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';
    name?: string;
    id?: string | number;
    required?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    autofocus?: boolean;
    tabindex?: number;
    form?: string;
    validationCode?: FieldValidityCode;
    validationMessage?: string;
    match?: FieldMatch;
    inputAttrs?: Record<string, any>;
};

export type FieldStepProps = {
    step?: NumberOrString;
    min?: NumberOrString;
    max?: NumberOrString;
};

export type FieldArrowProps = {
    arrow?: 'auto' | 'carousel' | 'stepper' | 'none';
    arrowStep?: NumberOrString;
    arrowAlign?: 'center' | 'right' | 'left';
};

export type FieldLengthProps = {
    minlength?: NumberOrString;
    maxlength?: NumberOrString;
};

export type FieldPatternProps = {
    pattern?: string;
};

export type FieldUxProps = {
    autocomplete?: string;
    autocapitalize?: 'off' | 'none' | 'sentences' | 'words' | 'characters' | string;
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | string;
    spellcheck?: boolean | 'true' | 'false';
    autocorrect?: 'on' | 'off' | string;
};

export type FieldInputProps<Value = any> = FieldBasicProps<Value> & FieldStepProps & FieldArrowProps & FieldLengthProps & FieldPatternProps & FieldUxProps & {
    list?: string;
    iconVisibility?: string;
    iconVisibilityOff?: string;
};

export type FieldInputPhoneProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & FieldPatternProps;

export type FieldInputSocialProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & {
    autocomplete?: string;
};

export type FieldInputFileProps<Value = FieldFileValue> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    multiple?: boolean;
    accept?: string;
    capture?: string | boolean;
    maxFileSize?: number;
};

export type FieldInputCheckProps<Value = boolean> = Omit<FieldBasicProps<Value>, 'type'> & FieldUxProps & {
    valueVariant?: NumberOrStringOrBoolean;
    valueVariantHide?: NumberOrStringOrBoolean;
    indeterminate?: boolean;
};

export type FieldTextareaProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    rows?: NumberOrString;
    cols?: NumberOrString;
    wrap?: 'soft' | 'hard' | 'off' | string;
    fieldSizing?: 'content' | 'fixed' | string;
};

export type FieldSelectProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & Omit<FieldStepProps, 'min' | 'step'> & FieldArrowProps & FieldUxProps & {
    option?: ListRecord;
    multiple?: boolean;
    selectionStyle?: ListItemPropsBasic['selectionStyle'] | 'auto';
};

export type FieldSelectLiteProps<Value = any> = Omit<FieldSelectProps<Value>, 'placeholder' | 'validationMessage' | 'validationCode' | 'arrow' | 'arrowAlign' | 'arrowStep'>;

export type FieldSliderProps<Value = any> = Omit<FieldBasicProps<Value>, 'type' | 'match'> & FieldStepProps & {
    multiple?: boolean;
};

export type FieldAllProps<Value = any> = FieldInputProps<Value> & FieldInputFileProps<Value> & FieldInputCheckProps<Value> & FieldTextareaProps<Value> & FieldSelectProps<Value> & FieldSliderProps<Value>;