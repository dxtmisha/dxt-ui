import { MaskProps } from '../Mask';
import { IconProps } from '../Icon';
import { FieldProps } from '../Field';
import { FieldLabelProps } from '../FieldLabel';
import { FieldMessageProps } from '../FieldMessage';
import { FieldCounterProps } from '../FieldCounter';
import { ProgressProps } from '../Progress';
import { InputPropsBasic } from '@dxtmisha/constructor/Input';
export declare const propsValues: {};
export type PropsToken = {};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type InputProps = InputPropsBasic<MaskProps, IconProps, FieldProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
