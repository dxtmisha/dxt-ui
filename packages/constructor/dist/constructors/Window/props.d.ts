import { ElementOrString, NormalOrPromise } from '@dxtmisha/functional';
import { ImagePropsBasic, ImagePropsInclude } from '../Image';
import { ScrollbarPropsBasic, ScrollbarPropsInclude } from '../Scrollbar';
import { TextClosePropsInclude } from '../../types/textTypes';
import { IconPropsBasic, IconValue } from '../Icon';
import { AriaHaspopupPropsInclude, AriaRoleByPropsInclude } from '../../types/ariaTypes';
import { ModelPropsOpen } from '../../types/modelTypes';
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
    /** Status/ Статусы */
    /** Whether the window is open/ Открыто ли окно */
    open?: boolean;
    /** Whether the window is disabled/ Отключено ли окно */
    disabled?: boolean;
    /** Hook/ Хуки */
    /** Hook called during window preparation/ Хук, вызываемый при подготовке окна */
    preparation?(): NormalOrPromise<void>;
    /** Hook called before the window starts opening/ Хук, вызываемый перед началом открытия окна */
    beforeOpening?(): NormalOrPromise<boolean>;
    /** Hook called while the window is opening/ Хук, вызываемый во время открытия окна */
    opening?(): NormalOrPromise<boolean>;
    /** Hook called before the window starts closing/ Хук, вызываемый перед началом закрытия окна */
    beforeClosing?(): NormalOrPromise<boolean>;
    /** Hook called while the window is closing/ Хук, вызываемый во время закрытия окна */
    closing?(): NormalOrPromise<boolean>;
    /** Style/ Стили */
    /** Whether to enable the context menu/ Включено ли контекстное меню */
    contextmenu?: boolean;
    /** Whether to enable static mode/ Включен ли статический режим */
    staticMode?: boolean;
    /** The element over which the window is displayed/ Элемент, над которым отображается окно */
    overElement?: ElementOrString<HTMLElement>;
    /** Whether to automatically close the window/ Автоматически ли закрывать окно */
    autoClose?: boolean;
    /** Whether the window is persistent (cannot be closed by clicking outside)/ Является ли окно постоянным (нельзя закрыть кликом вне) */
    persistent?: boolean;
    /** Whether to use a flash effect/ Использовать ли эффект вспышки */
    flash?: boolean;
    /** Whether the window should be in the DOM/ Должно ли окно находиться в DOM */
    inDom?: boolean;
    /** Indent from the control element/ Отступ от управляющего элемента */
    indent?: number;
    /** Whether to show a divider/ Показывать ли разделитель */
    divider?: boolean;
    /** Whether to show a close button/ Показывать ли кнопку закрытия */
    closeButton?: boolean;
    /** Icon for the close button/ Иконка для кнопки закрытия */
    iconClose?: IconValue<Icon>;
    /** Technical/ Технические */
    /** Whether the window is inert/ Является ли окно инертным */
    inert?: boolean;
    /** Whether to automatically manage tab index/ Автоматически ли управлять tab-index */
    autoTabIndex?: boolean;
    /** Whether to close the window on Esc key press/ Закрывать ли окно при нажатии Esc */
    closeOnEsc?: boolean;
    /** Whether to open the window on Arrow Down key press/ Открывать ли окно при нажатии стрелки вниз */
    openOnArrowDown?: boolean;
    /**
     * The window will be displayed inside the current parent element/
     * Окно будет отображаться внутри текущего родительского элемента
     */
    embedded?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type WindowProps = WindowPropsBasic & WindowPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
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
