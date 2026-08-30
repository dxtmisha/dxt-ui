// md5:05cbbf17e462fa7d94b64a02355c9b1c true
type AvatarPropsToken = {
    focus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
};
/** Basic properties for the Avatar component. @keywords avatar, props, basic */
export type AvatarPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & ImagePropsInclude<Image> & BadgePropsInclude<Badge> & SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
    /** Whether to shorten the text */
    reduction?: boolean;
    /** Tabindex property */
    tabindex?: string | number;
};
/** Incoming properties for the Avatar component. @keywords avatar, props */
export type AvatarProps = AvatarPropsBasic & AvatarPropsToken;
/** Default property values for Avatar component. @keywords avatar, defaults */
export declare const defaultsAvatar: {
    reduction: boolean;
    tabindex: string;
};