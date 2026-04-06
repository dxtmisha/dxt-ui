import { BarsPropsBasic } from '@dxtmisha/constructor/Bars';
export declare const propsValues: {
    padding: string[];
};
type PropsToken = {
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type BarsProps = BarsPropsBasic & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
