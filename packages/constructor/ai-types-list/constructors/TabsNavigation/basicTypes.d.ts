// md5:1f7573a9a7fea25a627f497f6e00f5b6 true
import { ConstrBind, ListRecord, NumberOrString } from '@dxtmisha/functional';
/** @keywords TabsNavigationIdsList, TabsNavigation, identifiers */
export type TabsNavigationIdsList = Record<NumberOrString, string>;
/** @keywords TabsNavigationComponentInclude, component */
export type TabsNavigationComponentInclude = {
    tabsNavigation?: object;
};
/** @keywords TabsNavigationPropsInclude, properties, tabs */
export type TabsNavigationPropsInclude<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic> = {
    tabs?: ListRecord<TabItem> | ConstrBind<TabsNavigation>;
    tabItemAttrs?: ConstrBind<TabItem>;
    tabsNavigationAttrs?: ConstrBind<TabsNavigation>;
};