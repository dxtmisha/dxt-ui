// md5:036470c099de17ee2ceee231876d1233
import { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes';
export type ScrollbarPropsToken = {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
};
export type ScrollbarPropsBasic = ClientOnlyPropsInclude & {
    /** HTML tag for the scrollbar element/ HTML-тег для элемента скроллбара */
    tag?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ScrollbarProps = ScrollbarPropsBasic & ScrollbarPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsScrollbar: {
    clientOnly: boolean;
    tag: string;
};
