interface ScrollbarPropsToken {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
}
export interface ScrollbarPropsBasic {
    tag?: string;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ScrollbarProps extends ScrollbarPropsBasic, ScrollbarPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsScrollbar: {
    tag: string;
};
export {};
