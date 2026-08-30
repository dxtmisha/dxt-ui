// md5:8e1b4f3b02cec5d72646bf6497da0c2a true
import type { ElementOrString, NormalOrPromise } from '@dxtmisha/functional';

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
    /** Hook called during window preparation. @keywords hook, preparation */
    preparation?(): NormalOrPromise<void>;
    /** Hook called before the window starts opening. @keywords hook, beforeOpening */
    beforeOpening?(): NormalOrPromise<boolean>;
    /** Hook called while the window is opening. @keywords hook, opening */
    opening?(): NormalOrPromise<boolean>;
    /** Hook called before the window starts closing. @keywords hook, beforeClosing */
    beforeClosing?(): NormalOrPromise<boolean>;
    /** Hook called while the window is closing. @keywords hook, closing */
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

/** Properties for the Window component. @keywords window, properties, props */
export type WindowProps = WindowPropsBasic & WindowPropsToken;

/** Default property values for the Window component. @keywords window, defaults */
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