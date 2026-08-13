// md5:580e83911ed0fb070f1fced089b604d8 true
type NavigationItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    iconTop?: boolean;
    iconAlign?: 'center' | 'edge';
    controlPosition?: 'start' | 'end';
    fill?: string | 'custom';
    divider?: boolean;
};
export type NavigationItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Checkbox extends CheckboxPropsBasic = CheckboxPropsBasic, Radio extends RadioPropsBasic = RadioPropsBasic> = ListItemPropsBasic<Icon, Badge, Progress, Checkbox, Radio>;
export type NavigationItemProps = NavigationItemPropsBasic & NavigationItemPropsToken;
/** Default properties for NavigationItem component. @keywords defaultsNavigationItem, navigation_item_defaults */
export declare const defaultsNavigationItem: {
    iconAlign: string;
    controlPosition: string;
    tag: string;
    tabindex: string;
    role: string;
    selectionStyle: string;
};