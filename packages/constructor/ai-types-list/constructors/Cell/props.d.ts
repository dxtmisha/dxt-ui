// md5:7d5b120019908379c8a196f7164e885c true
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
    tag?: string;
    divider?: boolean;
    dynamic?: boolean;
};
/** Cell properties combining basic and token properties. @keywords cell properties props token basic */
export type CellProps = CellPropsBasic & CellPropsToken;
/** Default values for cell properties. @keywords cell defaults default values */
export declare const defaultsCell: {
    divider: boolean;
    tag: string;
};