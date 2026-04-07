import { TextareaPropsBasic } from '@dxtmisha/constructor/Textarea';
import { TextareaAutosizeProps } from '../TextareaAutosize';
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
export type TextareaProps = TextareaPropsBasic<TextareaAutosizeProps, IconProps, FieldProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
