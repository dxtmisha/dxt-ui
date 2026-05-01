import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { LabelNumberProps } from '../../types/labelTypes';
import { AriaLabelPropsInclude } from '../../types/ariaTypes';
export type BadgePropsToken = {
    selected?: boolean;
    hide?: boolean;
    dot?: boolean;
    overlap?: string | 'rectangular' | 'circular' | 'static';
    vertical?: string | 'top' | 'center' | 'bottom';
    horizontal?: string | 'right' | 'center' | 'left';
};
export type BadgePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & LabelNumberProps & AriaLabelPropsInclude & {
    /** Whether to show as a dot/ Отображать как точку */
    dot?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BadgeProps = BadgePropsBasic & BadgePropsToken;
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
