// md5:12f191cf3795b6fbef4e26b2cc1c0661 true
import { ListSelectedList } from '@dxtmisha/functional';
type TabsPropsToken = {};
export type TabsPropsBasic<TabItem extends TabItemPropsBasic = TabItemPropsBasic, TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic, MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic> = TabsNavigationPropsInclude<TabItem, TabsNavigation> & MotionAxisPropsInclude<MotionAxis> & ModelPropsSelected<ListSelectedList>;
/** Incoming properties for tabs component. @keywords tabs properties config */
export type TabsProps = TabsPropsBasic & TabsPropsToken;
/** Default values for tabs properties. @keywords tabs defaults configuration */
export declare const defaultsTabs: {};
export {};