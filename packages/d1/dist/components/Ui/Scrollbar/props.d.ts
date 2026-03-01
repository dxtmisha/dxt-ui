import { ScrollbarPropsBasic } from '@dxtmisha/constructor/Scrollbar';
export declare const propsValues: {};
export type PropsToken = {
    visible?: boolean;
    divider?: boolean;
    dividerTop?: boolean;
    dividerBottom?: boolean;
    dividerHide?: boolean;
    inverse?: boolean;
    standard?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ScrollbarProps = ScrollbarPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
