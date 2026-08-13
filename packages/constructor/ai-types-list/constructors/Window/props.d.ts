// md5:b69369da569defc09403b15f0eacd345 true
import { ElementOrString, NormalOrPromise } from '@dxtmisha/functional';
export type WindowPropsToken = {
    width?: string | 'auto' | 'max' | 'custom';
    height?: string | 'auto' | 'max' | 'custom';
    hide?: boolean;
    axis?: 'x' | 'y' | 'on';
    imagePosition?: 'top' | 'left';
    dense?: boolean;
    alignment?: 'center' | 'top' | 'topRight' | 'topLeft' | 'topFull' | 'right' | 'rightFull' | 'bottom' | 'bottomRight' | 'bottomLeft' | 'bottomFull' | 'left' | 'leftFull';
    origin?: 'center' | 'top' | 'right' | 'bottom' | 'left' | 'topToBottom' | 'rightToLeft' | 'bottomToTop' | 'leftToRight';
    adaptive?: 'menu' | 'menuWindow' | 'modal' | 'modalDynamic' | 'actionSheetRight' | 'actionSheetBottom' | 'static';
    fullscreen?: boolean;
    overscroll?: boolean;
    closeButton?: boolean;
    closeMobileHide?: boolean;
    widthMatch?: boolean;
};
export type WindowPropsBasic<Scrollbar extends ScrollbarPropsBasic = ScrollbarPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Image extends ImagePropsBasic = ImagePropsBasic> = ScrollbarPropsInclude<Scrollbar> & ImagePropsInclude<Image> & AriaRoleByPropsInclude & AriaHaspopupPropsInclude & TextClosePropsInclude & ModelPropsOpen & {
    open?: boolean;
    disabled?: boolean;
    preparation?(): NormalOrPromise<void>;
    beforeOpening?(): NormalOrPromise<boolean>;
    opening?(): NormalOrPromise<boolean>;
    beforeClosing?(): NormalOrPromise<boolean>;
    closing?(): NormalOrPromise<boolean>;
    contextmenu?: boolean;
    staticMode?: boolean;
    overElement?: ElementOrString<HTMLElement>;
    autoClose?: boolean;
    persistent?: boolean;
    flash?: boolean;
    inDom?: boolean;
    indent?: number;
    divider?: boolean;
    closeButton?: boolean;
    iconClose?: IconValue<Icon>;
    inert?: boolean;
    autoTabIndex?: boolean;
    closeOnEsc?: boolean;
    openOnArrowDown?: boolean;
    embedded?: boolean;
};
export type WindowProps = WindowPropsBasic & WindowPropsToken;
/** Default window property values @keywords defaults, window, properties */
export declare const defaultsWindow: {
    axis: string;
    imagePosition: string;
    overscroll: boolean;
    indent: number;
    ariaHaspopup: string;
    role: string;
    inert: boolean;
    autoTabIndex: boolean;
    closeOnEsc: boolean;
};