// md5:ac2394d7cafbea27e310d704d88b22f6 true
import type { Ref } from 'vue';
import type { ListRecord, NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional';

export type FieldType = 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';
export type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;
export type FieldElementInput = FieldElementDom | HTMLElement | Record<string, any> | undefined;

/** ValidityState flags mapped to custom error messages. @keywords validity, validation, messages */
export type FieldValidityCodeItem = {
    [K in keyof ValidityState]?: string;
};

export type FieldValidityCode = string | FieldValidityCodeItem;

/** Mask segment state and metadata. @keywords mask, input-mask */
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
export type FieldPatternItemOrFunction = FieldPatternItem | ((item?: FieldMasks) => FieldPatternItem);
export type FieldPatternList = Record<string, FieldPatternItemOrFunction>;

/** Field cross-matching comparison configuration. @keywords match, compare, confirmation */
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

/** Validation execution handler. @keywords check, validate, rule */
export type FieldCheckItem<Value = any> = FieldCheckMain & {
    /** Validates the specified value against constraints. @keywords validate, verify */
    check(value: Value): FieldValidationItem<Value>;
};

export type FieldCheckList = Record<string, FieldCheckItem>;

/** Comprehensive field validation result payload. @keywords validation, status, error */
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

/** Uploaded or selected file representation including dimensions and cropping. @keywords file, upload, media */
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

/** Input event emission signatures for value changes. @keywords emits, events, input, change */
export type FieldValueEmits<T = any> = {
    input: [event: InputEvent | Event, value: FieldValidationItem<T>];
    inputLite: [value: FieldValidationItem<T>];
    change: [event: InputEvent | Event, value: FieldValidationItem<T>];
    changeLite: [value: FieldValidationItem<T>];
};

export type FieldBasicEmits<T = any> = ModelEmits<T> & FieldValueEmits<T>;

/** Public API methods and reactive state exposed by field components. @keywords expose, ref, api */
export type FieldBasicExpose<T = string> = {
    value: Ref<T>;
    /** Retrieves current field value. @keywords getter, value */
    getValue: () => T | undefined;
    /** Mutates current field value. @keywords setter, update */
    setValue: (value: any) => void;
    /** Clears the current field value. @keywords reset, clear */
    clear: () => void;
    /** Evaluates DOM validity state and returns success flag. @keywords validity, validate */
    checkValidity: () => boolean;
    /** Returns current validation error message. @keywords error, message */
    getValidationMessage: () => string;
};

/** Value-handling properties and constraints. @keywords props, value, model */
export type FieldValueProps<Value = any> = ModelProps<Value> & {
    placeholder?: string;
    multiple?: boolean;
    maxlength?: NumberOrString;
    value?: Value;
    detail?: Record<string, any> | undefined;
};

/** Base properties shared across all form field components. @keywords props, input, form */
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

/** Mobile and virtual keyboard behavioral attributes. @keywords ux, inputmode, autocapitalize */
export type FieldUxProps = {
    autocomplete?: string;
    autocapitalize?: 'off' | 'none' | 'sentences' | 'words' | 'characters' | string;
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | string;
    spellcheck?: boolean | 'true' | 'false';
    autocorrect?: 'on' | 'off' | string;
};

/** Standard text and numeric input properties. @keywords input, text, numeric */
export type FieldInputProps<Value = any> = FieldBasicProps<Value> & FieldStepProps & FieldArrowProps & FieldLengthProps & FieldPatternProps & FieldUxProps & {
    list?: string;
    iconVisibility?: string;
    iconVisibilityOff?: string;
};

export type FieldInputPhoneProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & FieldPatternProps;

export type FieldInputSocialProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & {
    autocomplete?: string;
};

/** Properties for file picker inputs. @keywords file, upload, picker */
export type FieldInputFileProps<Value = FieldFileValue> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    multiple?: boolean;
    accept?: string;
    capture?: string | boolean;
    maxFileSize?: number;
};

/** Properties for checkbox and radio toggle elements. @keywords checkbox, radio, toggle */
export type FieldInputCheckProps<Value = boolean> = Omit<FieldBasicProps<Value>, 'type'> & FieldUxProps & {
    valueVariant?: NumberOrStringOrBoolean;
    valueVariantHide?: NumberOrStringOrBoolean;
    indeterminate?: boolean;
};

/** Properties for multiline text areas. @keywords textarea, multiline */
export type FieldTextareaProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    rows?: NumberOrString;
    cols?: NumberOrString;
    wrap?: 'soft' | 'hard' | 'off' | string;
    fieldSizing?: 'content' | 'fixed' | string;
};

/** Selection dropdown properties. @keywords select, dropdown, options */
export type FieldSelectProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & Omit<FieldStepProps, 'min' | 'step'> & FieldArrowProps & FieldUxProps & {
    option?: ListRecord;
    multiple?: boolean;
    selectionStyle?: ListItemPropsBasic['selectionStyle'] | 'auto';
};

export type FieldSelectLiteProps<Value = any> = Omit<FieldSelectProps<Value>, 'placeholder' | 'validationMessage' | 'validationCode' | 'arrow' | 'arrowAlign' | 'arrowStep'>;

export type FieldSliderProps<Value = any> = Omit<FieldBasicProps<Value>, 'type' | 'match'> & FieldStepProps & {
    multiple?: boolean;
};

/** Unified field properties aggregating all specialized input variations. @keywords fields, schema, composite */
export type FieldAllProps<Value = any> = FieldInputProps<Value> & FieldInputFileProps<Value> & FieldInputCheckProps<Value> & FieldTextareaProps<Value> & FieldSelectProps<Value> & FieldSliderProps<Value>;