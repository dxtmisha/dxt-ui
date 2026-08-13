// md5:d9cdbb95d03d7e1c021b65e517f0892c true
import { ConstrBind, ListRecord, ListSelectedItem, ListSelectedList } from '@dxtmisha/functional';
export type ListPropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
export type ListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic, Input extends InputPropsBasic = InputPropsBasic> = AriaRolePropsInclude & AriaMultiselectablePropsInclude & TextNotFoundPropsInclude & {
    focus?: ListSelectedItem;
    selected?: ListSelectedList;
    disabled?: boolean;
    lite?: boolean;
    list?: ListRecord<ListItem>;
    liteThreshold?: number;
    highlight?: string;
    highlightLengthStart?: number;
    showSearch?: boolean;
    filterMode?: boolean;
    keyLabel?: string;
    keyValue?: string;
    max?: string | number;
    tag?: 'div' | 'button' | 'a' | 'span' | string;
    axis?: 'x' | 'y';
    divider?: boolean;
    selectionStyle?: ListItem['selectionStyle'];
    itemAttrs?: ConstrBind<ListItem>;
    itemManagementAttrs?: ConstrBind<ListItem>;
    itemGroupAttrs?: ConstrBind<ListItem>;
    itemMenuAttrs?: ConstrBind<ListItem>;
    inputSearchAttrs?: ConstrBind<Input>;
    iconArrowDown?: IconValue<Icon>;
    iconArrowRight?: IconValue<Icon>;
    iconSearch?: IconValue<Icon>;
    roleItem?: RoleType;
    tabindex?: string | number;
    control?: boolean;
};
export type ListProps = ListPropsBasic & ListPropsToken;
/** Default list component properties configuration @keywords defaults, list, props */
export declare const defaultsList: {
    axis: string;
    keyLabel: string;
    keyValue: string;
    tag: string;
    role: string;
    tabindex: number;
};