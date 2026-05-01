import { ContainerPropsBasic } from '@dxtmisha/constructor/Container';
export declare const propsValues: {
    align: string[];
};
type PropsToken = {
    align?: string | 'left' | 'center' | 'right';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ContainerProps = ContainerPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
