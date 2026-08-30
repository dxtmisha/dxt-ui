// md5:073057f26585ae07314d6e36a354e15c true
export type BadgePropsToken = {
    selected?: boolean;
    hide?: boolean;
    dot?: boolean;
    overlap?: 'rectangular' | 'circular' | 'static';
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'right' | 'center' | 'left';
};
export type BadgePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & LabelNumberProps & AriaLabelPropsInclude & {
    dot?: boolean;
};
export type BadgeProps = BadgePropsBasic & BadgePropsToken;
/** Default property values for the badge component. @keywords badge, defaults */
export declare const defaultsBadge: {
    overlap: string;
    vertical: string;
    horizontal: string;
};