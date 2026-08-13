// md5:09afbe064ff290d13124796a439a3fea true
export type BadgePropsToken = {
    selected?: boolean;
    hide?: boolean;
    dot?: boolean;
    overlap?: 'rectangular' | 'circular' | 'static';
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'right' | 'center' | 'left';
};
export type BadgePropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & LabelNumberProps & AriaLabelPropsInclude & {
    /** Whether to show as a dot @keywords badge dot indicator */
    dot?: boolean;
};
export type BadgeProps = BadgePropsBasic & BadgePropsToken;
/** Default values for badge properties @keywords defaults badge config */
export declare const defaultsBadge: {
    overlap: string;
    vertical: string;
    horizontal: string;
};