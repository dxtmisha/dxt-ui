// md5:4999a73fbc0485a46848355a94751284 true
export type NavigationRailItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    divider?: boolean;
};
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
export type NavigationRailItemProps = NavigationRailItemPropsBasic & NavigationRailItemPropsToken;
/** Default properties for NavigationRailItem @keywords navigation, rail, item, defaults */
export declare const defaultsNavigationRailItem: {
    tabindex: string;
    role: string;
};