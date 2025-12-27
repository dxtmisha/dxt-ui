import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { CaptionProps } from '../../types/captionTypes';
interface BlockPropsToken {
}
export interface BlockPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> extends LabelProps, DescriptionProps, CaptionProps, IconPropsInclude<Icon> {
    headline?: string;
    tag?: string;
    tagHeader?: string;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface BlockProps extends BlockPropsBasic, BlockPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsBlock: {
    tag: string;
    tagHeader: string;
};
export {};
