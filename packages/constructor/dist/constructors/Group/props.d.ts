import { IconPropsBasic } from '../Icon';
import { BlockPropsBasic } from '../Block';
import { HeaderPropsBasic } from '../Header';
type GroupPropsToken = {};
export type GroupPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type GroupProps = GroupPropsBasic & GroupPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsGroup: {
    tag: string;
    tagHeader: string;
};
export {};
