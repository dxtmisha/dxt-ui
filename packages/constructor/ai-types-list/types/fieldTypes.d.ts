// md5:bcf7b8777c99907733329e8f310217ad true
import { Ref } from 'vue';
import { ListRecord, NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional';

/** Supported field types @keywords field, type, input */
export type FieldType = 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';

/** Base input or textarea element @keywords dom, input, textarea */
export type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;

/** Any supported field element @keywords element, input, wrapper */
export type FieldElementInput = FieldElementDom | HTMLElement | Record<string, any> | undefined;

/** Map validity flags to custom messages @keywords validity, message, map */
export type FieldValidityCodeItem = {
    [K in keyof ValidityState]?: string;
};

/** Global validation message or map @keywords validity, message */
export type FieldValidityCode = string | FieldValidityCodeItem;

/** Single mask fragment meta @keywords mask, fragment, meta */
export type FieldMaskItem = {
    group: string;
    value: string;
    maxLength: number;
    full: boolean;
    end: boolean;
    chars: string[];
};

/** Masks data split by groups @keywords mask, group */
export type FieldMasks = Record<string, FieldMaskItem>;

/** Partial input element for pattern @keywords pattern, input */
export type FieldPatternElement = Partial<HTMLInputElement>;

/** Pattern string or element @keywords pattern, string */
export type FieldPatternItem = string | FieldPatternElement;

/** Pattern or factory function @keywords pattern, function */
export type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem);

/** Named pattern list @keywords pattern, list */
export type FieldPatternList = Record<string, FieldPatternItemOrFunction>;

/** Match config object @keywords match, config, validation */
export type FieldMatchItem = {
    name?: string | HTMLInputElement;
    validationMessage?: string;
};

/** Match definition @keywords match, definition */
export type FieldMatch = string | HTMLInputElement | FieldMatchItem;

/** Base data for validation check @keywords validation, check */
export type FieldCheckMain = {
    group?: string;
    input?: FieldElementDom;
    pattern?: FieldPatternItemOrFunction;
};

/** Check item interface @keywords check, item */
export type FieldCheckItem<Value = any> = FieldCheckMain & {
    /** Run validation for value @keywords check, validate */
    check(value: Value): FieldValidationItem<Value>;
};

/** Map of check items @keywords check, list */
export type FieldCheckList = Record<string, FieldCheckItem>;

/** Single validation result @keywords validation, result, item */
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

/** Emitted events for field components @keywords emits, events, field */
export type FieldBasicEmits<T = any> = ModelEmits<T> & {
    /** Emitted on input events @keywords event, input, typing */
    input: [event: InputEvent | Event, value: FieldValidationItem<T>];
    /** Lightweight input emit without DOM event @keywords event, input, lite */
    inputLite: [value: FieldValidationItem<T>];
    /** Emitted when value is confirmed @keywords event, change, confirm */
    change: [event: InputEvent | Event, value: FieldValidationItem<T>];
    /** Lightweight change emit without DOM event @keywords event, change, lite */
    changeLite: [value: FieldValidationItem<T>];
};

/** Interface describing exposed properties for basic field functionality @keywords expose, field, api */
export type FieldBasicExpose<T = string> = {
    value: Ref<T>;
    /** Returns current value @keywords get, value */
    getValue: () => T | undefined;
    /** Checks field validity and returns status @keywords check, validity, status */
    checkValidity: () => boolean;
    /** Returns validation message @keywords get, message, validation */
    getValidationMessage: () => string;
};

/** Properties that describe the value and its handling @keywords props, value, include */
export type FieldValueProps<Value = any> = ModelProps<Value> & {
    placeholder?: string;
    multiple?: boolean;
    maxlength?: NumberOrString;
    value?: Value;
    detail?: Record<string, any> | undefined;
};

/** Basic HTML input attributes without value-length specifics @keywords props, input, basic */
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

/** Numeric stepping and range constraints @keywords props, step, range, number */
export type FieldStepProps = {
    step?: NumberOrString;
    min?: NumberOrString;
    max?: NumberOrString;
};

/** Input arrow controls @keywords props, arrow, number */
export type FieldArrowProps = {
    arrow?: 'auto' | 'carousel' | 'stepper' | 'none';
    arrowStep?: NumberOrString;
    arrowAlign?: 'center' | 'right' | 'left';
};

/** Text length constraints @keywords props, length, limit */
export type FieldLengthProps = {
    minlength?: NumberOrString;
    maxlength?: NumberOrString;
};

/** Validation pattern attribute @keywords props, pattern */
export type FieldPatternProps = {
    pattern?: string;
};

/** UX input control attributes @keywords props, ux, autocomplete */
export type FieldUxProps = {
    autocomplete?: string;
    autocapitalize?: 'off' | 'none' | 'sentences' | 'words' | 'characters' | string;
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | string;
    spellcheck?: boolean | 'true' | 'false';
    autocorrect?: 'on' | 'off' | string;
};

/** Composite props for standard textual / numeric inputs @keywords props, input, composite */
export type FieldInputProps<Value = any> = FieldBasicProps<Value> & FieldStepProps & FieldArrowProps & FieldLengthProps & FieldPatternProps & FieldUxProps & {
    list?: string;
    iconVisibility?: string;
    iconVisibilityOff?: string;
};

/** Phone input props @keywords props, phone, input */
export type FieldInputPhoneProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & FieldPatternProps;

/** Props for social field elements @keywords props, social, input */
export type FieldInputSocialProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & {
    autocomplete?: string;
};

/** Props for file input elements @keywords props, file, input */
export type FieldInputFileProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    multiple?: boolean;
    accept?: string;
    capture?: string | boolean;
};

/** Props for checkbox & radio inputs @keywords props, checkbox, radio, check */
export type FieldInputCheckProps<Value = boolean> = Omit<FieldBasicProps<Value>, 'type'> & FieldUxProps & {
    valueVariant?: NumberOrStringOrBoolean;
    valueVariantHide?: NumberOrStringOrBoolean;
    indeterminate?: boolean;
};

/** Props for textarea elements with sizing & wrapping @keywords props, textarea, size */
export type FieldTextareaProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    rows?: NumberOrString;
    cols?: NumberOrString;
    wrap?: 'soft' | 'hard' | 'off' | string;
    fieldSizing?: 'content' | 'fixed' | string;
};

/** Props for select elements @keywords props, select, dropdown */
export type FieldSelectProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & Omit<FieldStepProps, 'min' | 'step'> & FieldArrowProps & FieldUxProps & {
    option?: ListRecord;
    multiple?: boolean;
    selectionStyle?: ListItemPropsBasic['selectionStyle'] | 'auto';
};

/** Simplified properties for lightweight select component @keywords props, select, lite */
export type FieldSelectLiteProps<Value = any> = Omit<FieldSelectProps<Value>, 'placeholder' | 'validationMessage' | 'validationCode' | 'arrow' | 'arrowAlign' | 'arrowStep'>;

/** Props for slider input elements @keywords props, slider, range */
export type FieldSliderProps<Value = any> = Omit<FieldBasicProps<Value>, 'type' | 'match'> & FieldStepProps & {
    multiple?: boolean;
};

/** All possible field properties combined @keywords props, all, field */
export type FieldAllProps<Value = any> = FieldInputProps<Value> & FieldInputFileProps<Value> & FieldInputCheckProps<Value> & FieldTextareaProps<Value> & FieldSelectProps<Value> & FieldSliderProps<Value>;