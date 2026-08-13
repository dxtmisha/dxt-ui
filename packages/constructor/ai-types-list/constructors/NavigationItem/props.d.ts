// md5:580e83911ed0fb070f1fced089b604d8
import { ListItemPropsBasic } from '../ListItem';
import { IconPropsBasic } from '../Icon';
import { BadgePropsBasic } from '../Badge';
import { ProgressPropsBasic } from '../Progress';
import { CheckboxPropsBasic } from '../Checkbox';
import { RadioPropsBasic } from '../Radio';
type NavigationItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    iconTop?: boolean;
    iconAlign?: 'center' | 'edge';
    controlPosition?: 'start' | 'end';
    fill?: string | 'custom';
    divider?: boolean;
};
/**
 * Basic props interface for NavigationItem component /
 * Базовый интерфейс свойств для компонента NavigationItem
 */
export type NavigationItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Checkbox extends CheckboxPropsBasic = CheckboxPropsBasic, Radio extends RadioPropsBasic = RadioPropsBasic> = ListItemPropsBasic<Icon, Badge, Progress, Checkbox, Radio>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type NavigationItemProps = NavigationItemPropsBasic & NavigationItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsNavigationItem: {
    iconAlign: string;
    controlPosition: string;
    tag: string;
    tabindex: string;
    role: string;
    selectionStyle: string;
};
export {};
