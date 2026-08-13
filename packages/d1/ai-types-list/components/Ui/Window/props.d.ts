// md5:ddd5138ceae391e4ee11a1fdadd8edbf true
import { WindowPropsBasic } from '@dxtmisha/constructor/Window';
/** Available property values for window configuration @keywords props, values, configuration */
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
    axis?: 'x' | 'y' | 'on';
    imagePosition?: 'top' | 'left' | 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl';
    dense?: boolean;
    alignment?: 'center' | 'top' | 'topRight' | 'topLeft' | 'topFull' | 'right' | 'rightFull' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'bottomFull' | 'left' | 'leftFull';
    origin?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight';
    adaptive?: 'menu' | 'menuWindow' | 'modal' | 'modalDynamic' | 'actionSheetRight' | 'actionSheetBottom' | 'static' | 'actionSheet' | 'actionSheetToModal' | 'autoStaticSm' | 'autoStaticMd' | 'autoStaticLg' | 'autoStaticXl' | 'autoStatic2xl';
    fullscreen?: boolean;
    overscroll?: boolean;
    closeButton?: boolean;
    closeMobileHide?: boolean;
    widthMatch?: boolean;
    imageSize?: 'sm' | 'md' | 'lg' | 'quarter' | 'half';
};
/** Window component properties type definition @keywords window, props, typescript */
export type WindowProps = WindowPropsBasic<ScrollbarProps, IconProps, ImageProps> & PropsToken;
/** Default configuration object for window properties @keywords defaults, object, configuration */
export declare const defaults: object;
export {};