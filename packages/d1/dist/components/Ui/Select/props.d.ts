import { SelectPropsBasic } from '@dxtmisha/constructor/Select';
import { IconProps } from '../Icon';
import { FieldProps } from '../Field';
import { FieldLabelProps } from '../FieldLabel';
import { FieldMessageProps } from '../FieldMessage';
import { FieldCounterProps } from '../FieldCounter';
import { InputProps } from '../Input';
import { ProgressProps } from '../Progress';
import { MenuProps } from '../Menu';
export declare const propsValues: {};
export type PropsToken = {};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type SelectProps = SelectPropsBasic<IconProps, FieldProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, InputProps, ProgressProps, MenuProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
