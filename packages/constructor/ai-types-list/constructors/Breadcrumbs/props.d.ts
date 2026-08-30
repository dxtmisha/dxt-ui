// md5:6640af0cfac6dc477d77fe82a4c12999 true
import type { ConstrBind } from '@dxtmisha/functional';

type BreadcrumbsPropsToken = {};

/** Basic properties for the Breadcrumbs component. @keywords breadcrumbs, props, navigation */
export type BreadcrumbsPropsBasic<BreadcrumbItem extends BreadcrumbItemProps = BreadcrumbItemProps> = TextBreadcrumbPropsInclude & SkeletonPropsInclude & {
    /** List of breadcrumb items. */
    list?: ConstrBind<BreadcrumbItem>[];
};

/** Complete properties for the Breadcrumbs component. @keywords breadcrumbs, props */
export type BreadcrumbsProps = BreadcrumbsPropsBasic & BreadcrumbsPropsToken;

/** Default property values for the Breadcrumbs component. @keywords breadcrumbs, defaults */
export declare const defaultsBreadcrumbs: {};