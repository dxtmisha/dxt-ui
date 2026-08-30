// md5:14b97e0a282db0c2819f526a2e38295d true
type TabItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    adaptive?: 'iconAlways' | 'auto';
    container?: boolean;
};
export type TabItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & IconPropsInclude<Icon> & BadgePropsInclude<Badge> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
    /** Item index. @keywords index */
    index?: any;
    /** URL address for link navigation. @keywords href, url, link */
    href?: string;
    /** HTML tag for the tab item element. @keywords tag, element */
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
};
/** Tab item component properties. @keywords tab, item, props */
export type TabItemProps = TabItemPropsBasic & TabItemPropsToken;
/** Default properties for tab item. @keywords defaults, tabItem */
export declare const defaultsTabItem: {
    role: string;
};