import { HeaderPropsBasic } from '@dxtmisha/constructor/Header';
import { IconProps } from '../Icon';
export declare const propsValues: {
    tag: string[];
};
type PropsToken = {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type HeaderProps = HeaderPropsBasic<IconProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
