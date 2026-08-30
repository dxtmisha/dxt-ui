// md5:8fd63343115316b8dfd8098aae5536be true
import type { Ref } from 'vue';
import type { ListRecord, NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional';

export type FieldType = 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';

export type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;

export type FieldElementInput = FieldElementDom | HTMLElement | Record<string, any> | undefined;

export type FieldValidityCodeItem = {
    [K in keyof ValidityState]?: string;
};

export type FieldValidityCode = string | FieldValidityCodeItem;

/** Mask segment metadata. @keywords mask, input_mask, fragment */
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

/** Validation check item. @keywords validation, validator */
export type FieldCheckItem<Value = any> = FieldCheckMain & {
    /** Executes validation on the provided value. @keywords check, validate */
    check(value: Value): FieldValidationItem<Value>;
};

export type FieldCheckList = Record<string, FieldCheckItem>;

/** Validation result details. @keywords validation, result, validity */
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

/** Field component emitted events. @keywords emits, events, input, change */
export type FieldBasicEmits<T = any> = ModelEmits<T> & {
    input: [event: InputEvent | Event, value: FieldValidationItem<T>];
    inputLite: [value: FieldValidationItem<T>];
    change: [event: InputEvent | Event, value: FieldValidationItem<T>];
    changeLite: [value: FieldValidationItem<T>];
};

/** Exposed methods and properties for basic field components. @keywords expose, ref, api */
export type FieldBasicExpose<T = string> = {
    value: Ref<T>;
    /** Returns the current field value. @keywords getValue, value */
    getValue: () => T | undefined;
    /** Checks validity of the field and returns status. @keywords checkValidity, validity */
    checkValidity: () => boolean;
    /** Returns the current validation message. @keywords getValidationMessage, error */
    getValidationMessage: () => string;
};

/** Field value and constraint properties. @keywords props, value, constraints */
export type FieldValueProps<Value = any> = ModelProps<Value> & {
    placeholder?: string;
    multiple?: boolean;
    maxlength?: NumberOrString;
    value?: Value;
    detail?: Record<string, any> | undefined;
};

/** Basic HTML input properties and validation configuration. @keywords props, input, validation */
export type FieldBasicProps<Value = any> = Omit<FieldValueProps<Value>, 'multiple' | 'maxlength'> & {
    type?: FieldType;
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

/** Composite properties for standard textual and numeric inputs. @keywords props, input */
export type FieldInputProps<Value = any> = FieldBasicProps<Value> & FieldStepProps & FieldArrowProps & FieldLengthProps & FieldPatternProps & FieldUxProps & {
    list?: string;
    iconVisibility?: string;
    iconVisibilityOff?: string;
};

export type FieldInputPhoneProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & FieldPatternProps;

export type FieldInputSocialProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & {
    autocomplete?: string;
};

/** Properties for file input elements. @keywords props, file_input */
export type FieldInputFileProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    multiple?: boolean;
    accept?: string;
    capture?: string | boolean;
};

/** Properties for checkbox and radio inputs. @keywords props, checkbox, radio */
export type FieldInputCheckProps<Value = boolean> = Omit<FieldBasicProps<Value>, 'type'> & FieldUxProps & {
    valueVariant?: NumberOrStringOrBoolean;
    valueVariantHide?: NumberOrStringOrBoolean;
    indeterminate?: boolean;
};

/** Properties for textarea elements. @keywords props, textarea */
export type FieldTextareaProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    rows?: NumberOrString;
    cols?: NumberOrString;
    wrap?: 'soft' | 'hard' | 'off' | string;
    fieldSizing?: 'content' | 'fixed' | string;
};

/** Properties for select elements. @keywords props, select */
export type FieldSelectProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & Omit<FieldStepProps, 'min' | 'step'> & FieldArrowProps & FieldUxProps & {
    option?: ListRecord;
    multiple?: boolean;
    selectionStyle?: ListItemPropsBasic['selectionStyle'] | 'auto';
};

export type FieldSelectLiteProps<Value = any> = Omit<FieldSelectProps<Value>, 'placeholder' | 'validationMessage' | 'validationCode' | 'arrow' | 'arrowAlign' | 'arrowStep'>;

/** Properties for slider inputs. @keywords props, slider, range */
export type FieldSliderProps<Value = any> = Omit<FieldBasicProps<Value>, 'type' | 'match'> & FieldStepProps & {
    multiple?: boolean;
};

/** Combined composite properties for all field types. @keywords props, field_all */
export type FieldAllProps<Value = any> = FieldInputProps<Value> & FieldInputFileProps<Value> & FieldInputCheckProps<Value> & FieldTextareaProps<Value> & FieldSelectProps<Value> & FieldSliderProps<Value>;