import { LabelProps } from '../../types/labelTypes';
import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { BadgePropsBasic, BadgePropsInclude } from '../Badge';
import { SkeletonPropsInclude } from '../Skeleton';
import { EnabledProps } from '../../types/enabledTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { AriaRolePropsInclude } from '../../types/ariaTypes';
type TabItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    disabled?: boolean;
};
export type TabItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & IconPropsInclude<Icon> & BadgePropsInclude<Badge> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
    index?: any;
    href?: string;
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TabItemProps = TabItemPropsBasic & TabItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTabItem: {
    tag: string;
    role: string;
};
export {};
