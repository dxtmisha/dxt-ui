import { ArrowPropsBasic } from '@dxtmisha/constructor/Arrow';
export declare const propsValues: {
    position: string[];
    size: string[];
};
export type PropsToken = {
    position?: 'auto' | 'top' | 'bottom' | 'left' | 'right';
    inverse?: boolean;
    size?: 'sm' | 'md' | 'lg';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ArrowProps = ArrowPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
