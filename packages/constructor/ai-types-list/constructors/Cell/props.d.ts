// md5:3cfd02dad56a930a5113f2e85be74469 true
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
/** Properties for the Cell component. @keywords cell, props */
export type CellProps = CellPropsBasic & CellPropsToken;
/** Default property values for the Cell component. @keywords cell, defaults */
export declare const defaultsCell: {
    divider: boolean;
    tag: string;
};