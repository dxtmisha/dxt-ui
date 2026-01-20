export type FieldCounterPropsToken = {};
export type FieldCounterPropsBasic = {
    counter?: string | number;
    maxlength?: string | number;
    template?: string;
    id?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type FieldCounterProps = FieldCounterPropsBasic & FieldCounterPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFieldCounter: {};
