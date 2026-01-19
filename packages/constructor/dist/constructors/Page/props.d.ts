import { IconPropsBasic } from '../Icon';
import { BlockPropsBasic } from '../Block';
interface PagePropsToken {
}
export interface PagePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> extends BlockPropsBasic<Icon> {
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface PageProps extends PagePropsBasic, PagePropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsPage: {
    tag: string;
    tagHeader: string;
};
export {};
