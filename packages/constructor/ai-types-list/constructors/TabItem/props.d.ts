// md5:1bdbe511fca3895672532f3eb1e10e02 true
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
    index?: any;
    href?: string;
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
};
/** Tab item properties. @keywords TabItemProps, properties, tabs */
export type TabItemProps = TabItemPropsBasic & TabItemPropsToken;
/** Default tab item configuration values. @keywords defaultsTabItem, default, config */
export declare const defaultsTabItem: {
    role: string;
};