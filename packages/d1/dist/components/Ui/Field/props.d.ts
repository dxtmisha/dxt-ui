import { FieldPropsBasic } from '@dxtmisha/constructor/Field';
import { IconProps } from '../Icon';
import { FieldLabelProps } from '../FieldLabel';
import { FieldMessageProps } from '../FieldMessage';
import { FieldCounterProps } from '../FieldCounter';
import { ProgressProps } from '../Progress';
export declare const propsValues: {
    arrowAlign: string[];
    cancel: string[];
    align: string[];
    width: never[];
    size: string[];
};
export type PropsToken = {
    focus?: boolean;
    disabled?: boolean;
    selected?: boolean;
    readonly?: boolean;
    block?: boolean;
    isValue?: boolean;
    basic?: boolean;
    boxed?: boolean;
    tonal?: boolean;
    filled?: boolean;
    outlined?: boolean;
    classic?: boolean;
    arrowCarousel?: boolean;
    arrowStepper?: boolean;
    arrowAlign?: 'center' | 'right' | 'left';
    cancel?: 'auto' | 'always' | 'none';
    align?: 'center' | 'right' | 'left';
    width?: string | 'custom';
    size?: 'sm' | 'md' | 'lg' | 'display';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type FieldProps = FieldPropsBasic<IconProps, FieldLabelProps, FieldMessageProps, FieldCounterProps, ProgressProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
