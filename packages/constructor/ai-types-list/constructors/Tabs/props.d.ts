// md5:bf5b4d1cecc9585abac53724439f2a6a true
import type { ListSelectedList } from '@dxtmisha/functional';

type TabsPropsToken = {};

export type TabsPropsBasic<
  TabItem extends TabItemPropsBasic = TabItemPropsBasic,
  TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic,
  MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic
> = TabsNavigationPropsInclude<TabItem, TabsNavigation> &
  MotionAxisPropsInclude<MotionAxis> &
  ModelPropsSelected<ListSelectedList>;

/** Tabs component properties. @keywords tabs, props */
export type TabsProps = TabsPropsBasic & TabsPropsToken;

/** Default property values for tabs. @keywords tabs, defaults */
export declare const defaultsTabs: {};