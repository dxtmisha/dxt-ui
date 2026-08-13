// md5:f470086096627ade9393eb30d96488ac
import { ModelProps } from '../../types/modelTypes';
import { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel';
import { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage';
import { InputCodeItemPropsBasic, InputCodeItemPropsInclude } from '../InputCodeItem';
/**
 * Type describing component style tokens.
 *
 * Тип, описывающий токены стилей компонента.
 */
type InputCodePropsToken = {
    validation?: boolean;
};
/**
 * Interface of basic properties for the InputCode component.
 *
 * Интерфейс базовых свойств для компонента InputCode.
 */
export type InputCodePropsBasic<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic> = InputCodeItemPropsInclude<InputCodeItem> & Omit<FieldLabelPropsInclude<FieldLabel>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs' | 'required'> & Omit<FieldMessagePropsInclude<FieldMessage>, 'counter' | 'counterShow' | 'counterTemplate' | 'counterId' | 'maxlength' | 'fieldCounterAttrs'> & ModelProps & {
    /** Flag for successful input status / Флаг успешного статуса ввода */
    success?: boolean;
    /** Flag for loading status / Флаг статуса загрузки */
    loading?: boolean;
    /** Input code value / Значение вводимого кода */
    value?: string;
    /** Code length / Длина кода */
    length?: number;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputCodeProps = InputCodePropsToken & InputCodePropsBasic;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsInputCode: {
    /** Default code length / Длина кода по умолчанию */
    length: number;
    /** Validation regular expression / Регулярное выражение для валидации */
    match: RegExp;
    inputMode: string;
};
export {};
