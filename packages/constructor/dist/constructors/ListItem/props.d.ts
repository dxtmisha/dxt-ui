import { IconPropsBasic, IconTrailingPropsInclude } from '../Icon';
import { BadgePropsBasic, BadgePropsInclude } from '../Badge';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { SkeletonPropsInclude } from '../Skeleton';
import { AriaRolePropsInclude } from '../../types/ariaTypes';
import { LabelHighlightProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { PrefixProps } from '../../types/prefixTypes';
import { CaptionProps } from '../../types/captionTypes';
import { SuffixProps } from '../../types/suffixTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { EventClickProps } from '../../types/eventClickTypes';
interface ListItemPropsToken {
    focus?: boolean;
    open?: boolean;
    selected?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    iconTop?: boolean;
    iconAlign?: 'center' | 'edge';
    fill?: string | 'custom';
    divider?: boolean;
}
export interface ListItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> extends LabelHighlightProps, DescriptionProps, PrefixProps, CaptionProps, SuffixProps, IconTrailingPropsInclude<Icon>, BadgePropsInclude<Badge>, ProgressPropsInclude<Progress>, SkeletonPropsInclude, EnabledProps, EventClickProps, AriaRolePropsInclude {
    index?: any;
    href?: string;
    tag?: 'button' | 'a' | 'span' | 'div' | string;
    filterMode?: boolean;
    divider?: boolean;
    tabindex?: number | string;
    type?: string;
    parent?: string;
    listId?: number;
    search?: string;
    isMenu?: boolean;
    isItemMenu?: boolean;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ListItemProps extends ListItemPropsBasic, ListItemPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsListItem: {
    iconAlign: string;
    tabindex: string;
};
export {};
