import { BlockPropsBasic } from '@dxtmisha/constructor/Block';
import { HeaderProps } from '../Header';
import { IconProps } from '../Icon';
export declare const propsValues: {};
type PropsToken = {};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type BlockProps = BlockPropsBasic<IconProps, HeaderProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
export {};
