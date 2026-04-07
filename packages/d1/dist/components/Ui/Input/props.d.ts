import { InputPropsBasic } from '@dxtmisha/constructor/Input';
import { MaskProps } from '../Mask';
import { IconProps } from '../Icon';
import { FieldProps } from '../Field';
import { FieldLabelProps } from '../FieldLabel';
import { FieldMessageProps } from '../FieldMessage';
import { FieldCounterProps } from '../FieldCounter';
import { ProgressProps } from '../Progress';
export declare const propsValues: {};
type PropsToken = {};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type InputProps = InputPropsBasic<MaskProps, IconProps, FieldProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
