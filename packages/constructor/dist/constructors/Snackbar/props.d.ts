type SnackbarPropsToken = {
    full?: boolean;
    all?: boolean;
    vertical?: 'top' | 'bottom';
    horizontal?: 'right' | 'left' | 'block';
    origin?: 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight';
};
export type SnackbarPropsBasic = {
    delay?: number;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SnackbarProps = SnackbarPropsBasic & SnackbarPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSnackbar: {
    delay: number;
};
export {};
