import { BarsPropsBasic } from '@dxtmisha/constructor/Bars';
import { IconProps } from '../Icon';
import { ButtonProps } from '../Button';
export declare const propsValues: {
    padding: string[];
};
type PropsToken = {
    padding?: string | 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type BarsProps = BarsPropsBasic<IconProps, ButtonProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
