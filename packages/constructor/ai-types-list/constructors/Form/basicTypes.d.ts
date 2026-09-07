// md5:77523e61d1961350647b72ce1bbed8fd true
/** Child element record in a form component. @keywords form, element, item, field */
export type FormElementItem<T = any> = FieldBasicExpose<T> & {
    id?: string;
    name: string;
    data?: FieldValidationItem<T>;
};
/** Callback function to register a child form element. @keywords form, element, register */
export type FormElementRegister<T = any> = (element: FormElementItem<T>) => void;
/** Context object providing methods for child form element registration and data updates. @keywords form, registration, context */
export type FormElementRegistration<T = any> = {
    getValue: (name: string) => any;
    register: FormElementRegister<T>;
    updateData: (id: string, data?: FieldValidationItem<T>, event?: InputEvent) => void;
};
export type FormElementsData<T = any> = Record<string, FieldValidationItem<T>>;
export type FormElementsValues = Record<string, any>;
export type FormEnctype = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | string;
export type FormMethod = 'get' | 'post' | 'dialog' | string;
export type FormTarget = '_self' | '_blank' | '_parent' | '_top' | string;
/** Injection key identifier for form element registration. @keywords form, provide, inject, token */
export declare const FORM_NAME_ELEMENT = "form-element";