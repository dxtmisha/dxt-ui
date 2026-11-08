// md5:69d10a2d2a1ae770b24914133d5dc4c3 true
/** Icon design token and modifier properties. @keywords icon, tokens, modifiers */
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
/** Base properties for the icon component. @keywords icon, properties, base */
export type IconPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic> = SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
    /** Active state of the icon. */
    active?: boolean;
    /** Main icon value. */
    icon?: ImageValue<Image>;
    /** Active state icon value. */
    iconActive?: ImageValue<Image>;
    /** ARIA role for accessibility. */
    role?: RoleType;
    /** Tab index for keyboard navigation. */
    tabindex?: number | string;
};
/** Complete icon component properties combining basic and token settings. @keywords icon, props */
export type IconProps = IconPropsBasic & IconPropsToken;
/** Default property values for the icon component. @keywords icon, defaults */
export declare const defaultsIcon: {
    animationType: string;
};