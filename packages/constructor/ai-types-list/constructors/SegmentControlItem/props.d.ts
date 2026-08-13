// md5:09ec5f78399350e9644390d63838d757
import { IconPropsBasic } from '../Icon';
import { BadgePropsBasic } from '../Badge';
import { TabItemPropsBasic } from '../TabItem';
type SegmentControlItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    adaptive?: 'iconAlways' | 'auto';
    container?: boolean;
};
export type SegmentControlItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = TabItemPropsBasic<Icon, Badge>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SegmentControlItemProps = SegmentControlItemPropsBasic & SegmentControlItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSegmentControlItem: {};
export {};
