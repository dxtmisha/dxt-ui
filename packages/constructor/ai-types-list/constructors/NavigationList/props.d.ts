// md5:82ff59e31ea7262e5ac63a86212f5f6f
import { ListPropsBasic } from '../List';
import { IconPropsBasic } from '../Icon';
import { NavigationItemPropsBasic } from '../NavigationItem';
import { InputPropsBasic } from '../Input';
type NavigationListPropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
/**
 * Basic props interface for NavigationList component /
 * Базовый интерфейс свойств для компонента NavigationList
 */
export type NavigationListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, NavigationItem extends NavigationItemPropsBasic = NavigationItemPropsBasic, Input extends InputPropsBasic = InputPropsBasic> = ListPropsBasic<Icon, NavigationItem, Input>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type NavigationListProps = NavigationListPropsBasic & NavigationListPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsNavigationList: {
    axis: string;
    tag: string;
    keyLabel: string;
    keyValue: string;
    role: string;
    tabindex: number;
};
export {};
