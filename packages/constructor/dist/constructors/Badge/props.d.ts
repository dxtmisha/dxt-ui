import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { LabelNumberProps } from '../../types/labelTypes';
import { AriaLabelPropsInclude } from '../../types/ariaTypes';
interface BadgePropsToken {
    selected?: boolean;
    hide?: boolean;
    dot?: boolean;
    overlap?: 'rectangular' | 'circular' | 'static';
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'right' | 'center' | 'left';
}
export interface BadgePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> extends IconPropsInclude<Icon>, LabelNumberProps, AriaLabelPropsInclude {
    dot?: boolean;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface BadgeProps extends BadgePropsBasic, BadgePropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsBadge: {
    overlap: string;
    vertical: string;
    horizontal: string;
};
export {};
