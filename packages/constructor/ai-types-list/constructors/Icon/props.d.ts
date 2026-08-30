// md5:4db84df79e4468c613f698a89d12f701 true
export type IconPropsToken = {
    turn?: boolean;
    disabled?: boolean;
    hide?: boolean;
    asPalette?: boolean;
    dir?: boolean;
    overlay?: boolean;
    dynamic?: boolean;
    start?: boolean;
    end?: boolean;
    high?: boolean;
    animationType?: 'type1' | 'type2';
    animationShow?: boolean;
};
export type IconPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic> = SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
    /** Active state of the icon. */
    active?: boolean;
    /** Main icon value. */
    icon?: ImageValue<Image>;
    /** Active icon value. */
    iconActive?: ImageValue<Image>;
    /** ARIA role for the icon. */
    role?: RoleType;
    /** Tab index for keyboard navigation. */
    tabindex?: number | string;
};
/** Icon component properties. @keywords icon, properties */
export type IconProps = IconPropsBasic & IconPropsToken;
/** Default property values for the icon component. @keywords icon, defaults */
export declare const defaultsIcon: {
    animationType: string;
};