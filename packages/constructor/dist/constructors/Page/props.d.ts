import { IconPropsBasic } from '../Icon';
import { BlockPropsBasic } from '../Block';
export type PagePropsToken = {};
export type PagePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = BlockPropsBasic<Icon>;
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
    tag: string;
    tagHeader: string;
};
