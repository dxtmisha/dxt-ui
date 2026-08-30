// md5:3cd8443b9090d49bdd8234c1cdac0f13 true
import type { ConstrBind, ListRecord, ListSelectedList } from '@dxtmisha/functional';

type TabsNavigationPropsToken = {
  divider?: boolean;
};

export type TabsNavigationPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic> = HorizontalScrollPropsInclude & ModelPropsSelected<ListSelectedList> & {
  /** List of selected values. */
  selected?: ListSelectedList;
  /** List of tab items. */
  list?: ListRecord<TabItem>;
  /** HTML tag for the tabs navigation. */
  tag?: TabItem['tag'];
  /** Key for the label. */
  keyLabel?: string;
  /** Key for the value. */
  keyValue?: string;
  /** Additional attributes for each tab item. */
  itemAttrs?: ConstrBind<TabItem>;
};

export type TabsNavigationProps = TabsNavigationPropsBasic & TabsNavigationPropsToken;

/** Default property values for tabs navigation component. @keywords defaults, tabs, navigation */
export declare const defaultsTabsNavigation: {
  horizontalScrollBleed: boolean;
  horizontalScrollAlign: string;
};