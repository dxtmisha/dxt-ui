// md5:78e2617edab1797279aea0b95ff34f45 true
type FormPropsToken = {};
export type FormPropsBasic = ModelProps<FormElementsValues> & {
  /** Form submission URL. */
  action?: string;
  /** HTTP method for form submission. */
  method?: FormMethod;
  /** Encoding type for form data. */
  enctype?: FormEnctype;
  /** Target browsing context for form submission. */
  target?: FormTarget;
  /** Autocomplete behavior for form elements. */
  autocomplete?: string;
  /** Works with native form elements if true, otherwise with custom. */
  native?: boolean;
  /** Form value. */
  value?: FormElementsValues;
};
/** Form component properties. @keywords form, props */
export type FormProps = FormPropsBasic & FormPropsToken;
/** Default form property values. @keywords form, defaults */
export declare const defaultsForm: {};