/** Arrow position and direction tokens/ Токены позиционирования и направления стрелки */
export type ArrowPropsToken = {
    position?: string | 'auto' | 'top' | 'bottom' | 'left' | 'right';
    inverse?: boolean;
};
/** Basic properties of the arrow component/ Основные свойства компонента стрелки */
export type ArrowPropsBasic = {
    /** The HTML element or its selector that the arrow points to/ HTML-элемент или его селектор, на который указывает стрелка */
    elementTarget?: HTMLElement | string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ArrowProps = ArrowPropsBasic & ArrowPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsArrow: {
    position: string;
};
