// md5:4999a73fbc0485a46848355a94751284
import { IconPropsBasic, IconPropsInclude } from '../Icon';
import { BadgePropsBasic, BadgePropsInclude } from '../Badge';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { SkeletonPropsInclude } from '../Skeleton';
import { AriaRolePropsInclude } from '../../types/ariaTypes';
import { LabelProps } from '../../types/labelTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { EventClickProps } from '../../types/eventClickTypes';
export type NavigationRailItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    divider?: boolean;
};
/**
 * Basic props interface for NavigationRailItem component /
 * Базовый интерфейс свойств для компонента NavigationRailItem
 */
export type NavigationRailItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & IconPropsInclude<Icon> & BadgePropsInclude<Badge> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
    /** Item index / Индекс элемента */
    index?: any;
    /** URL address for links / URL-адрес для ссылок */
    href?: string;
    /** HTML tag for the list item / HTML-тег для элемента списка */
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
    /** Whether to show a divider / Показывать ли разделитель */
    divider?: boolean;
    /** Selection style / Стиль выбора */
    selectionStyle?: 'radio' | 'checkbox' | 'checkmark' | 'none';
    /** Tab index for keyboard navigation / Индекс табуляции для навигации с клавиатуры */
    tabindex?: number | string;
    /** Item type / Тип элемента */
    type?: string;
    /** Parent identifier / Идентификатор родителя */
    parent?: string;
    /** List identifier / Идентификатор списка */
    listId?: number;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type NavigationRailItemProps = NavigationRailItemPropsBasic & NavigationRailItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsNavigationRailItem: {
    tabindex: string;
    role: string;
};
