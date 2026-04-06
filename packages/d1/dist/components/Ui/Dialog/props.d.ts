import { DialogPropsBasic } from '@dxtmisha/constructor/Dialog';
export declare const propsValues: {
    imagePosition: string[];
    width: string[];
};
type PropsToken = {
    success?: boolean;
    error?: boolean;
    imagePosition?: 'top' | 'left';
    width?: 'sm' | 'md' | 'lg' | 'auto';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type DialogProps = DialogPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
