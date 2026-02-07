import { TextCharacterLimitPropsInclude, TextCharacterRemainingPropsInclude } from '../../types/textTypes';
export type FieldCounterPropsToken = {};
export type FieldCounterPropsBasic = TextCharacterLimitPropsInclude & TextCharacterRemainingPropsInclude & {
    counter?: string | number;
    maxlength?: string | number;
    /**
     * The number of characters remaining at which the screen reader starts announcing/
     * Количество оставшихся символов, при котором скринридер начинает произносить
     */
    maxlengthOnce?: string | number;
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
