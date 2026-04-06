import { ListPropsBasic } from '@dxtmisha/constructor/List';
export declare const propsValues: {
    axis: string[];
};
type PropsToken = {
    focus?: boolean;
    axis?: 'x' | 'y';
    divider?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ListProps = ListPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
