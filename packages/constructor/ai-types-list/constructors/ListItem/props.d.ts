// md5:6c6a3dd4ece35df0bc252cfa0ac0e052 true
import type { ConstrBind } from '@dxtmisha/functional';

export type ListItemPropsToken = {
    focus?: boolean;
    open?: boolean;
    selectedChild?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    iconTop?: boolean;
    iconAlign?: 'center' | 'edge';
    controlPosition?: 'start' | 'end';
    fill?: string | 'custom';
    divider?: boolean;
};

export type ListItemPropsBasic<
    Icon extends IconPropsBasic = IconPropsBasic,
    Badge extends BadgePropsBasic = BadgePropsBasic,
    Progress extends ProgressPropsBasic = ProgressPropsBasic,
    Checkbox extends CheckboxPropsBasic = CheckboxPropsBasic,
    Radio extends RadioPropsBasic = RadioPropsBasic
> = LabelHighlightProps & DescriptionProps & PrefixProps & CaptionProps & SuffixProps & IconTrailingPropsInclude<Icon> & BadgePropsInclude<Badge> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
    /** Item index. @keywords index */
    index?: any;
    /** URL address for link navigation. @keywords href, link */
    href?: string;
    /** HTML tag for the list item element. @keywords tag, html */
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
    /** Whether filtering mode is enabled. @keywords filter */
    filterMode?: boolean;
    /** Whether to display a divider line. @keywords divider, separator */
    divider?: boolean;
    /** Visual selection indicator style. @keywords selection, style */
    selectionStyle?: 'radio' | 'checkbox' | 'checkmark' | 'none';
    /** Tab index for keyboard navigation. @keywords tabindex, focus */
    tabindex?: number | string;
    /** Custom attributes for checkbox component. @keywords checkbox, attributes */
    checkboxAttrs?: ConstrBind<Checkbox>;
    /** Custom attributes for radio component. @keywords radio, attributes */
    radioAttrs?: ConstrBind<Radio>;
    /** Custom icon identifier for checkbox. @keywords icon, checkbox */
    iconCheckbox?: IconValue<Icon>;
    /** Item type identifier. @keywords type */
    type?: string;
    /** Parent element identifier in nested lists. @keywords parent, hierarchy */
    parent?: string;
    /** Identifier of the parent list container. @keywords listId */
    listId?: number;
    /** Search query string for text highlighting. @keywords search, highlight */
    search?: string;
};

export type ListItemProps = ListItemPropsBasic & ListItemPropsToken;

/** Default property values for list item components. @keywords list item, defaults */
export declare const defaultsListItem: {
    iconAlign: string;
    controlPosition: string;
    tabindex: string;
    role: string;
    selectionStyle: string;
};