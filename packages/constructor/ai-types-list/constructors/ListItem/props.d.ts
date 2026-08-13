// md5:5994f7cfbde3109c767d621fd7de02c9 true
import { ConstrBind } from '@dxtmisha/functional';
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
export type ListItemPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Badge extends BadgePropsBasic = BadgePropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Checkbox extends CheckboxPropsBasic = CheckboxPropsBasic, Radio extends RadioPropsBasic = RadioPropsBasic> = LabelHighlightProps & DescriptionProps & PrefixProps & CaptionProps & SuffixProps & IconTrailingPropsInclude<Icon> & BadgePropsInclude<Badge> & ProgressPropsInclude<Progress> & SkeletonPropsInclude & EnabledProps & EventClickProps & AriaRolePropsInclude & {
    index?: any;
    href?: string;
    tag?: 'button' | 'a' | 'span' | 'li' | 'div' | string;
    filterMode?: boolean;
    divider?: boolean;
    selectionStyle?: 'radio' | 'checkbox' | 'checkmark' | 'none';
    tabindex?: number | string;
    checkboxAttrs?: ConstrBind<Checkbox>;
    radioAttrs?: ConstrBind<Radio>;
    iconCheckbox?: IconValue<Icon>;
    type?: string;
    parent?: string;
    listId?: number;
    search?: string;
};
export type ListItemProps = ListItemPropsBasic & ListItemPropsToken;
/** Default properties configuration for list items @keywords defaults, list item, configuration */
export declare const defaultsListItem: {
    iconAlign: string;
    controlPosition: string;
    tabindex: string;
    role: string;
    selectionStyle: string;
};