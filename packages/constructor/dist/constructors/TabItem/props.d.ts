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
    adaptive?: string | 'iconAlways' | 'auto';
    container?: boolean;
};
export type TabItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & IconPropsInclude<Icon> & BadgePropsInclude<Badge> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
    /** Value/ Значения */
    /** Item index/ Индекс элемента */
    index?: any;
    /** URL address for links/ URL-адрес для ссылок */
    href?: string;
    /** Style/ Стили */
    /** HTML tag for the tab item/ HTML-тег для элемента вкладки */
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
    role: string;
};
export {};
