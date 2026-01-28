import { MaskPropsBasic } from '@dxtmisha/constructor/Mask';
export declare const propsValues: {
    align: string[];
    dir: string[];
};
export type PropsToken = {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type MaskProps = MaskPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
