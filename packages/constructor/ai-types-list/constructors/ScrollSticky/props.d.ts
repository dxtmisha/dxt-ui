// md5:d7e2e1c12d918e14d7579b5a456ffa89
/**
 * Shape of tokens for ScrollSticky component. /
 * Структура токенов для компонента ScrollSticky.
 */
type ScrollStickyPropsToken = {};
/**
 * Basic props for ScrollSticky component. /
 * Базовые свойства для компонента ScrollSticky.
 */
export type ScrollStickyPropsBasic = {
    /** Whether the scrollbar is visible / Виден ли скроллбар */
    visible?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ScrollStickyProps = ScrollStickyPropsBasic & ScrollStickyPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsScrollSticky: {
    visible: boolean;
};
export {};
