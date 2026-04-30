import { IconPropsBasic } from '../Icon';
import { BlockPropsBasic } from '../Block';
import { HeaderPropsBasic } from '../Header';
export type PagePropsToken = {};
export type PagePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type PageProps = PagePropsBasic & PagePropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsPage: {
    area: string;
    tag: string;
    tagHeader: string;
};
