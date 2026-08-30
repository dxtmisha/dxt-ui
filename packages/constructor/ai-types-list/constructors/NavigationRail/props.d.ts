// md5:29bdf5f17f3ad68269e73485da69bbf2 true
import type { ConstrBind, ListRecord, ListSelectedItem, ListSelectedList } from '@dxtmisha/functional';
type NavigationRailPropsToken = {
    divider?: boolean;
};
export type NavigationRailPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, NavigationItem extends NavigationItemPropsBasic = NavigationItemPropsBasic, NavigationRailItem extends NavigationRailItemPropsBasic = NavigationRailItemPropsBasic> = AriaRolePropsInclude & AriaMultiselectablePropsInclude & {
    /** Currently focused item */
    focus?: ListSelectedItem;
    /** List of selected items */
    selected?: ListSelectedList;
    /** Whether the list is disabled */
    disabled?: boolean;
    /** Data list */
    list?: ListRecord<NavigationRailItem | NavigationItem>;
    /** Key for the label in the data object */
    keyLabel?: string;
    /** Key for the value in the data object */
    keyValue?: string;
    /** HTML tag for the list */
    tag?: 'div' | 'button' | 'a' | 'span' | string;
    /** Whether to show dividers between items */
    divider?: boolean;
    /** Additional attributes for list items */
    itemAttrs?: ConstrBind<NavigationRailItem | NavigationItem>;
    /** Attributes for the item management component */
    itemManagementAttrs?: ConstrBind<NavigationRailItem | NavigationItem>;
    /** Attributes for the item menu component */
    itemMenuAttrs?: ConstrBind<NavigationRailItem | NavigationItem>;
    /** Icon for the right arrow */
    iconArrowRight?: IconValue<Icon>;
    /** ARIA role for items */
    roleItem?: RoleType;
    /** Tab index for keyboard navigation */
    tabindex?: string | number;
    /** Whether to enable external control */
    control?: boolean;
};
/** Navigation rail component properties. @keywords navigation, rail, props */
export type NavigationRailProps = NavigationRailPropsBasic & NavigationRailPropsToken;
/** Default property values for navigation rail. @keywords navigation, rail, defaults */
export declare const defaultsNavigationRail: {
    keyLabel: string;
    keyValue: string;
    tag: string;
    role: string;
    tabindex: number;
};