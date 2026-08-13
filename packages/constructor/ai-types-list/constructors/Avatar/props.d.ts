// md5:be37174cf03cf79df2924513d8db6022 true
type AvatarPropsToken = {
    focus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
};
export type AvatarPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic> = LabelProps & ImagePropsInclude<Image> & BadgePropsInclude<Badge> & SkeletonPropsInclude & AriaLabelPropsInclude & EventClickProps & {
    reduction?: boolean;
    tabindex?: string | number;
};
export type AvatarProps = AvatarPropsBasic & AvatarPropsToken;
/** Default avatar property values @keywords avatar defaults, configuration */
export declare const defaultsAvatar: {
    reduction: boolean;
    tabindex: string;
};