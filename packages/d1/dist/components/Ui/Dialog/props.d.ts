import { DialogPropsBasic } from '@dxtmisha/constructor/Dialog';
import { WindowProps } from '../Window';
import { BarsProps } from '../Bars';
import { IconProps } from '../Icon';
import { ImageProps } from '../Image';
import { ButtonProps } from '../Button';
import { ActionsProps } from '../Actions';
export declare const propsValues: {
    imagePosition: string[];
    width: string[];
};
type PropsToken = {
    success?: boolean;
    error?: boolean;
    imagePosition?: 'top' | 'left';
    width?: 'sm' | 'md' | 'lg' | 'auto';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type DialogProps = DialogPropsBasic<WindowProps, BarsProps, IconProps, ImageProps, ButtonProps, ActionsProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
