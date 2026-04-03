import { SnackbarPropsBasic } from '@dxtmisha/constructor/Snackbar';
export declare const propsValues: {
    limit: string[];
    vertical: string[];
    horizontal: string[];
    origin: string[];
};
type PropsToken = {
    full?: boolean;
    all?: boolean;
    limit?: '1' | '2' | '4' | '6' | '8';
    vertical?: 'top' | 'bottom';
    horizontal?: 'right' | 'left' | 'block';
    origin?: 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type SnackbarProps = SnackbarPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
