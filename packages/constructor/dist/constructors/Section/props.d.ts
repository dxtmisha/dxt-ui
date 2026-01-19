import { IconPropsBasic } from '../Icon';
import { BlockPropsBasic } from '../Block';
interface SectionPropsToken {
}
export interface SectionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> extends BlockPropsBasic<Icon> {
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface SectionProps extends SectionPropsBasic, SectionPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSection: {
    tag: string;
    tagHeader: string;
};
export {};
