// md5:127e3c1df6cb93633a8287962637719a true
export type NavigationRailItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    divider?: boolean;
};
/** Navigation rail item base properties. @keywords navigation, rail, item, props */
export type NavigationRailItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & IconPropsInclude<Icon> & BadgePropsInclude<Badge> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
    index?: any;
    href?: string;
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
    divider?: boolean;
    selectionStyle?: 'radio' | 'checkbox' | 'checkmark' | 'none';
    tabindex?: number | string;
    type?: string;
    parent?: string;
    listId?: number;
};
/** Combined navigation rail item properties. @keywords navigation, rail, item, props */
export type NavigationRailItemProps = NavigationRailItemPropsBasic & NavigationRailItemPropsToken;
/** Default properties for navigation rail item. @keywords navigation, rail, item, defaults */
export declare const defaultsNavigationRailItem: {
    tabindex: string;
    role: string;
};