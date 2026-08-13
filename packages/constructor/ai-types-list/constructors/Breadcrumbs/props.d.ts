// md5:7824f6bfab30969dc154f44048716ae0 true
import { ConstrBind } from '@dxtmisha/functional';

type BreadcrumbsPropsToken = {};

export type BreadcrumbsPropsBasic<BreadcrumbItem extends BreadcrumbItemProps = BreadcrumbItemProps> = TextBreadcrumbPropsInclude & SkeletonPropsInclude & {
    list?: ConstrBind<BreadcrumbItem>[];
};

export type BreadcrumbsProps = BreadcrumbsPropsBasic & BreadcrumbsPropsToken;

/** Default values for Breadcrumbs properties. @keywords defaults breadcrumbs */
export declare const defaultsBreadcrumbs: {};