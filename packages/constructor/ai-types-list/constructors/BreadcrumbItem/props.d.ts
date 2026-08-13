// md5:b83e2801d9e10a10fc963319cc7c1ff2 true
type BreadcrumbItemPropsToken = {
    disabled?: boolean;
    readonly?: boolean;
    back?: boolean;
};
export type BreadcrumbItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & IconLitePropsInclude<Icon> & EnabledProps & EventClickProps & SkeletonPropsInclude & {
    iconArrowLeft?: string;
    iconArrowRight?: string;
};
/** Breadcrumb item incoming properties. @keywords breadcrumb, item, props */
export type BreadcrumbItemProps = BreadcrumbItemPropsBasic & BreadcrumbItemPropsToken;
/** Default value for property. @keywords defaults, breadcrumb, item */
export declare const defaultsBreadcrumbItem: {};
export {};