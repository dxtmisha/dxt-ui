import { SnackbarItemPropsBasic } from '@dxtmisha/constructor/SnackbarItem';
import { IconProps } from '../Icon';
import { ButtonProps } from '../Button';
import { ActionsProps } from '../Actions';
export declare const propsValues: {
    palette: string[];
};
type PropsToken = {
    success?: boolean;
    error?: boolean;
    palette?: string | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type SnackbarItemProps = SnackbarItemPropsBasic<IconProps, ButtonProps, ActionsProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
