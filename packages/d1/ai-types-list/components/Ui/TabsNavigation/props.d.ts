// md5:a45782db55b253c1195b387766ab425c true
import { TabsNavigationPropsBasic } from '@dxtmisha/constructor/TabsNavigation';
/** Default properties configuration values @keywords props defaults config */
export declare const propsValues: {};
/** Properties token configuration containing optional divider @keywords props token divider */
type PropsToken = {
    divider?: boolean;
};
/** Combined navigation properties type extending basic navigation and tokens @keywords tabs navigation props */
export type TabsNavigationProps = TabsNavigationPropsBasic<TabItemProps> & PropsToken;
/** Default object values for the component @keywords defaults object values */
export declare const defaults: object;