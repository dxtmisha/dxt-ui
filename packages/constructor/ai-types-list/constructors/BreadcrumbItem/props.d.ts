// md5:b83e2801d9e10a10fc963319cc7c1ff2
import { IconLitePropsInclude, IconPropsBasic } from '../Icon';
import { SkeletonPropsInclude } from '../Skeleton';
import { EnabledProps } from '../../types/enabledTypes';
import { EventClickProps } from '../../types/eventClickTypes';
import { LabelProps } from '../../types/labelTypes';
type BreadcrumbItemPropsToken = {
    disabled?: boolean;
    readonly?: boolean;
    back?: boolean;
};
export type BreadcrumbItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic> = LabelProps & IconLitePropsInclude<Icon> & EnabledProps & EventClickProps & SkeletonPropsInclude & {
    /** Left arrow icon / Иконка стрелки влево */
    iconArrowLeft?: string;
    /** Right arrow icon / Иконка стрелки вправо */
    iconArrowRight?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BreadcrumbItemProps = BreadcrumbItemPropsBasic & BreadcrumbItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsBreadcrumbItem: {};
export {};
