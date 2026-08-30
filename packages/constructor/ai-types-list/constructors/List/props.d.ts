// md5:18a1fcb1a5c522dd2be1f8d52fc2567f true
import type { ConstrBind, ListRecord, ListSelectedItem, ListSelectedList } from '@dxtmisha/functional';
export type ListPropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type ListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic, Input extends InputPropsBasic = InputPropsBasic> = AriaRolePropsInclude & AriaMultiselectablePropsInclude & TextNotFoundPropsInclude & {
    /** Currently focused item @keywords focus, active */
    focus?: ListSelectedItem;
    /** List of selected items @keywords selected, selection */
    selected?: ListSelectedList;
    /** Whether the list is disabled @keywords disabled */
    disabled?: boolean;
    /** Whether to use simplified list rendering mode @keywords lite, performance */
    lite?: boolean;
    /** Data list records @keywords data, items */
    list?: ListRecord<ListItem>;
    /** Threshold item count for enabling lite mode @keywords threshold, optimization */
    liteThreshold?: number;
    /** Search query string to highlight matching text @keywords highlight, search */
    highlight?: string;
    /** Minimum search length to trigger highlighting @keywords highlight, threshold */
    highlightLengthStart?: number;
    /** Whether to display the search input @keywords search, filter */
    showSearch?: boolean;
    /** Whether client-side filtering mode is enabled @keywords filter */
    filterMode?: boolean;
    /** Property key for item labels @keywords key, label */
    keyLabel?: string;
    /** Property key for item values @keywords key, value */
    keyValue?: string;
    /** Maximum number of items to display @keywords max, limit */
    max?: string | number;
    /** HTML tag for the container element @keywords tag, html */
    tag?: 'div' | 'button' | 'a' | 'span' | string;
    /** Layout direction axis @keywords axis, layout, direction */
    axis?: 'x' | 'y';
    /** Whether to render dividers between items @keywords divider, separator */
    divider?: boolean;
    /** Visual selection style @keywords style, selection */
    selectionStyle?: ListItem['selectionStyle'];
    /** Additional attributes for list items @keywords attrs, item */
    itemAttrs?: ConstrBind<ListItem>;
    /** Additional attributes for item management component @keywords management, attrs */
    itemManagementAttrs?: ConstrBind<ListItem>;
    /** Additional attributes for item group component @keywords group, attrs */
    itemGroupAttrs?: ConstrBind<ListItem>;
    /** Additional attributes for item menu component @keywords menu, attrs */
    itemMenuAttrs?: ConstrBind<ListItem>;
    /** Additional attributes for search input component @keywords search, input, attrs */
    inputSearchAttrs?: ConstrBind<Input>;
    /** Icon for the down arrow indicator @keywords icon, arrow */
    iconArrowDown?: IconValue<Icon>;
    /** Icon for the right arrow indicator @keywords icon, arrow */
    iconArrowRight?: IconValue<Icon>;
    /** Icon for the search field @keywords icon, search */
    iconSearch?: IconValue<Icon>;
    /** ARIA role for list items @keywords aria, role, a11y */
    roleItem?: RoleType;
    /** HTML tabindex attribute for keyboard navigation @keywords tabindex, focus, a11y */
    tabindex?: string | number;
    /** Whether component is externally controlled @keywords control */
    control?: boolean;
};
/** Complete list component properties @keywords list, props */
export type ListProps = ListPropsBasic & ListPropsToken;
/** Default configuration values for list component @keywords defaults, list */
export declare const defaultsList: {
    axis: string;
    keyLabel: string;
    keyValue: string;
    tag: string;
    role: string;
    tabindex: number;
};