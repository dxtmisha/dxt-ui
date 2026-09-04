// md5:645de2d7025cd060c6963aa883231147 true
export type FormMethod = 'get' | 'post' | 'dialog' | string;
export type FormEnctype = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain' | string;
export type FormTarget = '_self' | '_blank' | '_parent' | '_top' | string;
export declare const FORM_NAME_ELEMENT = "form-element";
/** Form child element record definition. @keywords form, element, item */
export type FormElementItem<T = any> = FieldBasicExpose<T> & {
    name: string;
    data?: FieldValidationItem<T>;
};
/** Form element registration callback function. @keywords form, element, register */
export type FormElementRegister<T = any> = (element: FormElementItem<T>) => void;
export type FormElementsData<T = any> = Record<string, FieldValidationItem<T>>;
export type FormElementsValues = Record<string, any>;