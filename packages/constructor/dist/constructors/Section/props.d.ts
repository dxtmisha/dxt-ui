import { IconPropsBasic } from '../Icon';
import { BlockPropsBasic } from '../Block';
export type SectionPropsToken = {};
export type SectionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = BlockPropsBasic<Icon>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SectionProps = SectionPropsBasic & SectionPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSection: {
    tag: string;
    tagHeader: string;
};
