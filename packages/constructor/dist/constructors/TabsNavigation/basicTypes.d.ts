import { ConstrBind, ListRecord, NumberOrString } from '@dxtmisha/functional';
import { TabItemPropsBasic } from '../TabItem';
import { TabsNavigationPropsBasic } from './props';
/** List of identifiers for the tabs/ Список идентификаторов для вкладок */
export type TabsNavigationIdsList = Record<NumberOrString, string>;
/**
 * Type for including the TabsNavigation component.
 *
 * Тип для подключения компонента TabsNavigation.
 */
export type TabsNavigationComponentInclude = {
    /** TabsNavigation component/ Компонент TabsNavigation */
    tabsNavigation?: object;
};
/**
 * Type for including TabsNavigation properties.
 *
 * Тип для подключения свойств TabsNavigation.
 */
export type TabsNavigationPropsInclude<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic> = {
    /** Tabs list or TabsNavigation properties/ Список вкладок или свойства TabsNavigation */
    tabs?: ListRecord<TabItem> | ConstrBind<TabsNavigation>;
    /** Attributes for tabs/ Атрибуты для вкладок */
    tabItemAttrs?: ConstrBind<TabItem>;
    /** Attributes for TabsNavigation/ Атрибуты для TabsNavigation */
    tabsNavigationAttrs?: ConstrBind<TabsNavigation>;
};
