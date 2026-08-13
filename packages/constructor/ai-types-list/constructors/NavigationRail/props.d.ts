// md5:53523327105e4aa5510e1bae9caf7f32 true
import { ConstrBind, ListRecord, ListSelectedItem, ListSelectedList } from '@dxtmisha/functional';
type NavigationRailPropsToken = {
    divider?: boolean;
};
export type NavigationRailPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, NavigationItem extends NavigationItemPropsBasic = NavigationItemPropsBasic, NavigationRailItem extends NavigationRailItemPropsBasic = NavigationRailItemPropsBasic> = AriaRolePropsInclude & AriaMultiselectablePropsInclude & {
    focus?: ListSelectedItem;
    selected?: ListSelectedList;
    disabled?: boolean;
    list?: ListRecord<NavigationRailItem | NavigationItem>;
    keyLabel?: string;
    keyValue?: string;
    tag?: 'div' | 'button' | 'a' | 'span' | string;
    divider?: boolean;
    itemAttrs?: ConstrBind<NavigationRailItem | NavigationItem>;
    itemManagementAttrs?: ConstrBind<NavigationRailItem | NavigationItem>;
    itemMenuAttrs?: ConstrBind<NavigationRailItem | NavigationItem>;
    iconArrowRight?: IconValue<Icon>;
    roleItem?: RoleType;
    tabindex?: string | number;
    control?: boolean;
};
export type NavigationRailProps = NavigationRailPropsBasic & NavigationRailPropsToken;
/** Default navigation rail properties configuration @keywords defaults, navigation, rail */
export declare const defaultsNavigationRail: {
    keyLabel: string;
    keyValue: string;
    tag: string;
    role: string;
    tabindex: number;
};