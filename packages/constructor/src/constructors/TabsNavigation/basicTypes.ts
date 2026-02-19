import type {ConstrBind} from '@dxtmisha/functional'
import type {TabsNavigationPropsBasic} from "./props";

export type TabsNavigationComponentInclude = {
  tabsNavigation?: object
}

export type TabsNavigationPropsInclude<
  TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic
> = {
  tabsNavigationAttrs?: ConstrBind<TabsNavigation>
}
