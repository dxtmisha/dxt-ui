// md5:e8f4ac5638a54fa0feba7a6f3a666ccb true
type FormPropsToken = {};

export type FormPropsBasic = ModelProps<FormElementsValues> & {
    /** Form values */
    value?: FormElementsValues;
    /** Controls native or custom form elements mode */
    native?: boolean;
    /** Form submission URL */
    action?: string;
    /** HTTP method for form submission */
    method?: FormMethod;
    /** Encoding type for form data submission */
    enctype?: FormEnctype;
    /** Target browsing context for form submission */
    target?: FormTarget;
    /** Autocomplete behavior for form elements */
    autocomplete?: string;
};

/** Form component properties @keywords form, props */
export type FormProps = FormPropsBasic & FormPropsToken;

/** Default property values for the form component @keywords defaults, form */
export declare const defaultsForm: {};