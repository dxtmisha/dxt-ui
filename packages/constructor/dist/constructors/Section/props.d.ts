import { IconPropsBasic } from '../Icon';
import { BlockPropsBasic } from '../Block';
import { HeaderPropsBasic } from '../Header';
export type SectionPropsToken = {};
export type SectionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = BlockPropsBasic<Icon, Header>;
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
    area: string;
    tag: string;
    tagHeader: string;
};
