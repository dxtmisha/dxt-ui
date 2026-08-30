// md5:d0ca156d19c2e9bbcd2f75441aea7922 true
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
/** Basic properties for the NavigationItem component. @keywords navigation, item, props */
export type NavigationItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Checkbox extends CheckboxPropsBasic = CheckboxPropsBasic, Radio extends RadioPropsBasic = RadioPropsBasic> = ListItemPropsBasic<Icon, Badge, Progress, Checkbox, Radio>;
/** NavigationItem component properties. @keywords navigation, item, properties */
export type NavigationItemProps = NavigationItemPropsBasic & NavigationItemPropsToken;
/** Default property values for the NavigationItem component. @keywords defaults, navigation, item */
export declare const defaultsNavigationItem: {
    iconAlign: string;
    controlPosition: string;
    tag: string;
    tabindex: string;
    role: string;
    selectionStyle: string;
};