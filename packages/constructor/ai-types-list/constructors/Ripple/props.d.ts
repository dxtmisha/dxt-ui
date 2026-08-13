// md5:c04b8cc2c867fcd1606f1206b7c6870d
export type RipplePropsToken = {};
export type RipplePropsBasic = {
    /** Whether the ripple is disabled/ Отключена ли пульсация */
    disabled?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type RippleProps = RipplePropsBasic & RipplePropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsRipple: {};
