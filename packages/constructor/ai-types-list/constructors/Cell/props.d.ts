// md5:48dfb973242868b46e0133a6995be423 true
export type CellPropsToken = {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    dynamic?: boolean;
    dynamicHover?: boolean;
    divider?: boolean;
    dividerLabel?: 'always' | 'none';
    iconTop?: boolean;
};
export type CellPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & CaptionProps & EnabledProps & IconTrailingPropsInclude<Icon> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EventClickProps & AriaRolePropsInclude & {
    /** HTML tag for the cell container. */
    tag?: string;
    /** Whether to show the divider. */
    divider?: boolean;
    /** Whether the cell has dynamic hover and active behavior. */
    dynamic?: boolean;
};
/** Cell component properties. @keywords cell, props */
export type CellProps = CellPropsBasic & CellPropsToken;
/** Default property values for the cell. @keywords cell, defaults */
export declare const defaultsCell: {
    divider: boolean;
};