// md5:1d5def48abea07af412ac1014b034480 true
type BreadcrumbItemPropsToken = {
    disabled?: boolean;
    readonly?: boolean;
    back?: boolean;
};
export type BreadcrumbItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & IconLitePropsInclude<Icon> & EnabledProps & EventClickProps & SkeletonPropsInclude & {
    /** Left arrow icon */
    iconArrowLeft?: string;
    /** Right arrow icon */
    iconArrowRight?: string;
};
/** Breadcrumb item component properties. @keywords breadcrumb, item, props */
export type BreadcrumbItemProps = BreadcrumbItemPropsBasic & BreadcrumbItemPropsToken;
/** Default values for breadcrumb item properties. @keywords breadcrumb, item, defaults */
export declare const defaultsBreadcrumbItem: {};