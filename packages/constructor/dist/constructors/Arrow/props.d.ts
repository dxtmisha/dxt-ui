interface ArrowPropsToken {
    position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    inverse?: boolean;
}
export interface ArrowPropsBasic {
    elementTarget?: HTMLElement | string;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ArrowProps extends ArrowPropsBasic, ArrowPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsArrow: {
    position: string;
};
export {};
