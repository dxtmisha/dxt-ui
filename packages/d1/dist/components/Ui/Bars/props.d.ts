import { BarsPropsBasic } from '@dxtmisha/constructor/Bars';
import { ButtonProps } from '../Button';
export declare const propsValues: {
    padding: string[];
};
export type PropsToken = {
    action?: boolean;
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type BarsProps = BarsPropsBasic<ButtonProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
