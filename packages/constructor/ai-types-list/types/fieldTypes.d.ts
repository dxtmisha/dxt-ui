// md5:478714f1e16ec02567748e67476996aa true
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
  /** Executes validation check against value. @keywords validate, check */
  check(value: Value): FieldValidationItem<Value>;
};

export type FieldCheckList = Record<string, FieldCheckItem>;

/** Detailed validation result state and metadata. @keywords validation, result, state */
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

/** Field component emitted events contract. @keywords emits, events, input, change */
export type FieldBasicEmits<T = any> = ModelEmits<T> & {
  input: [event: InputEvent | Event, value: FieldValidationItem<T>];
  inputLite: [value: FieldValidationItem<T>];
  change: [event: InputEvent | Event, value: FieldValidationItem<T>];
  changeLite: [value: FieldValidationItem<T>];
};

/** Exposed API methods and state for field components. @keywords expose, methods, api */
export type FieldBasicExpose<T = string> = {
  value: Ref<T>;
  /** Gets the current field value. @keywords get, value */
  getValue: () => T | undefined;
  /** Updates the field value. @keywords set, value */
  setValue: (value: any) => void;
  /** Resets and clears the field value. @keywords clear, reset */
  clear: () => void;
  /** Checks native and custom validity state. @keywords validity, validate */
  checkValidity: () => boolean;
  /** Returns current validation error message. @keywords validation, error, message */
  getValidationMessage: () => string;
};

/** Value handling and model bindings properties. @keywords value, model, props */
export type FieldValueProps<Value = any> = ModelProps<Value> & {
  placeholder?: string;
  multiple?: boolean;
  maxlength?: NumberOrString;
  value?: Value;
  detail?: Record<string, any> | undefined;
};

/** Base field configuration attributes. @keywords props, attributes, field */
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

/** Extended UX and virtual keyboard behavior options. @keywords ux, keyboard, autocorrect */
export type FieldUxProps = {
  autocomplete?: string;
  autocapitalize?: 'off' | 'none' | 'sentences' | 'words' | 'characters' | string;
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | string;
  spellcheck?: boolean | 'true' | 'false';
  autocorrect?: 'on' | 'off' | string;
};

/** Comprehensive properties for textual and numeric inputs. @keywords text, number, input, props */
export type FieldInputProps<Value = any> = FieldBasicProps<Value> & FieldStepProps & FieldArrowProps & FieldLengthProps & FieldPatternProps & FieldUxProps & {
  list?: string;
  iconVisibility?: string;
  iconVisibilityOff?: string;
};

export type FieldInputPhoneProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & FieldPatternProps;

export type FieldInputSocialProps = Omit<FieldBasicProps<string>, 'match' | 'pattern'> & {
  autocomplete?: string;
};

export type FieldInputFileProps<Value = any> = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
  multiple?: boolean;
  accept?: string;
  capture?: string | boolean;
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

/** Unified aggregate properties covering all field component variants. @keywords field, all, props, combined */
export type FieldAllProps<Value = any> = FieldInputProps<Value> & FieldInputFileProps<Value> & FieldInputCheckProps<Value> & FieldTextareaProps<Value> & FieldSelectProps<Value> & FieldSliderProps<Value>;