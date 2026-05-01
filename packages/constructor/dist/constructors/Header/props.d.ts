import { AreaProps } from '../../types/areaTypes';
import { CaptionProps } from '../../types/captionTypes';
import { LabelProps } from '../../types/labelTypes';
import { IconPropsBasic, IconPropsInclude } from '../Icon';
type HeaderPropsToken = {
    tag?: string | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};
export type HeaderPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & AreaProps;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type HeaderProps = HeaderPropsBasic & HeaderPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsHeader: {
    tag: string;
    area: string;
};
export {};
