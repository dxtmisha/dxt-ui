// md5:7824f6bfab30969dc154f44048716ae0
import { ConstrBind } from '@dxtmisha/functional';
import { BreadcrumbItemProps } from '../BreadcrumbItem';
import { SkeletonPropsInclude } from '../Skeleton';
import { TextBreadcrumbPropsInclude } from '../../types/textTypes';
/**
 * Type describing token properties of the Breadcrumbs component.
 *
 * Тип, описывающий свойства токенов компонента Breadcrumbs.
 */
type BreadcrumbsPropsToken = {};
/**
 * Type describing basic properties of the Breadcrumbs component.
 *
 * Тип, описывающий базовые свойства компонента Breadcrumbs.
 */
export type BreadcrumbsPropsBasic<BreadcrumbItem extends BreadcrumbItemProps = BreadcrumbItemProps> = TextBreadcrumbPropsInclude & SkeletonPropsInclude & {
    /** List of breadcrumb items / Список элементов хлебных крошек */
    list?: ConstrBind<BreadcrumbItem>[];
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BreadcrumbsProps = BreadcrumbsPropsBasic & BreadcrumbsPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsBreadcrumbs: {};
export {};
