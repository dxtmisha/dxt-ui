import { WindowPropsBasic } from '@dxtmisha/constructor/Window';
import { ScrollbarProps } from '../Scrollbar';
import { IconProps } from '../Icon';
import { ImageProps } from '../Image';
export declare const propsValues: {
    width: string[];
    height: string[];
    axis: string[];
    imagePosition: string[];
    alignment: string[];
    origin: string[];
    adaptive: string[];
    imageSize: string[];
};
type PropsToken = {
    width?: string | 'auto' | 'max' | 'sm' | 'md' | 'lg' | 'custom';
    height?: string | 'auto' | 'max' | 'sm' | 'md' | 'lg' | 'custom';
    hide?: boolean;
    axis?: string | 'x' | 'y' | 'on';
    imagePosition?: string | 'top' | 'left';
    dense?: boolean;
    alignment?: string | 'center' | 'top' | 'topRight' | 'topLeft' | 'topFull' | 'right' | 'rightFull' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'bottomFull' | 'left' | 'leftFull';
    origin?: string | 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight';
    adaptive?: string | 'menu' | 'menuWindow' | 'modal' | 'modalDynamic' | 'actionSheetRight' | 'actionSheetBottom' | 'static' | 'actionSheet' | 'actionSheetToModal' | 'autoStaticSm' | 'autoStaticMd' | 'autoStaticLg' | 'autoStaticXl' | 'autoStatic2xl';
    fullscreen?: boolean;
    overscroll?: boolean;
    closeButton?: boolean;
    closeMobileHide?: boolean;
    widthMatch?: boolean;
    imageSize?: string | 'sm' | 'md' | 'lg' | 'quarter' | 'half';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type WindowProps = WindowPropsBasic<ScrollbarProps, IconProps, ImageProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
