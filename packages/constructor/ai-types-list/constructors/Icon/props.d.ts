// md5:d4283a35e23a27d50ad2f539a94f9913 true
/** Icon design tokens and visual modifier properties. @keywords icon, tokens, modifiers */
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
/** Core properties for the icon component. @keywords icon, properties, basic */
export type IconPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic> = SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
    /** Active state of the icon. */
    active?: boolean;
    /** Primary icon image source or identifier. */
    icon?: ImageValue<Image>;
    /** Icon image source or identifier for the active state. */
    iconActive?: ImageValue<Image>;
    /** ARIA role (applied only when `dynamic` is enabled; static icons render `aria-hidden="true"`). */
    role?: RoleType;
    /** Tab index for keyboard navigation (applied when `dynamic` is enabled and not `disabled`). */
    tabindex?: number | string;
};
/** Complete icon component properties combining core and token properties. */
export type IconProps = IconPropsBasic & IconPropsToken;
/** Default property values for the icon component. @keywords defaults, icon */
export declare const defaultsIcon: {
    animationType: string;
};