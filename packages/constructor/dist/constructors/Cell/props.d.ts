import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { CaptionProps } from '../../types/captionTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { SkeletonPropsInclude } from '../Skeleton';
import { EventClickProps } from '../../types/eventClickTypes';
import { IconPropsBasic, IconTrailingPropsInclude } from '../Icon';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { AriaRolePropsInclude } from '../../types/ariaTypes';
interface CellPropsToken {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    dynamic?: boolean;
    dynamicHover?: boolean;
    divider?: boolean;
    dividerLabel?: 'always' | 'none';
    iconTop?: boolean;
}
export interface CellPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends LabelProps, DescriptionProps, CaptionProps, EnabledProps, IconTrailingPropsInclude<Icon>, ProgressPropsInclude<Progress>, SkeletonPropsInclude, EventClickProps, AriaRolePropsInclude {
    tag?: string;
    divider?: boolean;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface CellProps extends CellPropsBasic, CellPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsCell: {
    divider: boolean;
    tag: string;
};
export {};
