import { HorizontalScrollPropsBasic } from '@dxtmisha/constructor/HorizontalScroll';
export declare const propsValues: {
    align: string[];
};
type PropsToken = {
    flush?: boolean;
    align?: 'block' | 'center' | 'left' | 'right';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type HorizontalScrollProps = HorizontalScrollPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
