// md5:2ff826b3861996503eb74245ac2c6bdc true
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
    /** Active state of the icon @keywords active state */
    active?: boolean;
    /** Value of the main icon @keywords main icon value */
    icon?: ImageValue<Image>;
    /** Value of the active icon @keywords active icon value */
    iconActive?: ImageValue<Image>;
    /** ARIA role for the icon @keywords aria role */
    role?: RoleType;
    /** Tab index for keyboard navigation @keywords tab index */
    tabindex?: number | string;
};
export type IconProps = IconPropsBasic & IconPropsToken;
/** Default icon properties configuration @keywords defaults icon config */
export declare const defaultsIcon: {
    animationType: string;
};