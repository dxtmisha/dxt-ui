import { MenuPropsBasic } from '@dxtmisha/constructor/Menu';
export declare const propsValues: {
    barsAdaptive: string[];
};
type PropsToken = {
    hideList?: boolean;
    barsAdaptive?: 'showAlways' | 'showSm' | 'showMd' | 'showLg' | 'showXl' | 'show2xl';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type MenuProps = MenuPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
