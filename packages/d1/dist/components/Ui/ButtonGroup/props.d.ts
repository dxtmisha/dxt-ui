import { ButtonGroupPropsBasic } from '@dxtmisha/constructor/ButtonGroup';
export declare const propsValues: {
    orientation: string[];
};
type PropsToken = {
    orientation?: string | 'horizontal' | 'vertical';
    wrap?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ButtonGroupProps = ButtonGroupPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
