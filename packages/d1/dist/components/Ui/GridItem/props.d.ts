import { GridItemPropsBasic } from '@dxtmisha/constructor/GridItem';
export declare const propsValues: {
    base: string[];
    sm: string[];
    md: string[];
    lg: string[];
    xl: string[];
    xl2: string[];
};
type PropsToken = {
    base?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    sm?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    md?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    lg?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    xl?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
    xl2?: string | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type GridItemProps = GridItemPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
