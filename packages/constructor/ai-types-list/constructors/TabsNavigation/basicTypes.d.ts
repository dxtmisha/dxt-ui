// md5:735d741213d45c1c173925d4c101a965 true
import type { ConstrBind, ListRecord, NumberOrString } from '@dxtmisha/functional';

export type TabsNavigationIdsList = Record<NumberOrString, string>;

/** Type for including the TabsNavigation component. */
export type TabsNavigationComponentInclude = {
  /** TabsNavigation component. */
  tabsNavigation?: object;
};

/** Type for including TabsNavigation properties. */
export type TabsNavigationPropsInclude<
  TabItem extends TabItemPropsBasic = TabItemPropsBasic,
  TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic
> = {
  /** Tabs list or TabsNavigation properties. */
  tabs?: ListRecord<TabItem> | ConstrBind<TabsNavigation>;
  /** Attributes for tabs. */
  tabItemAttrs?: ConstrBind<TabItem>;
  /** Attributes for TabsNavigation. */
  tabsNavigationAttrs?: ConstrBind<TabsNavigation>;
};