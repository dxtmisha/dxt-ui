import { ConstrBind, ListRecord, ListSelectedItem, ListSelectedList } from '@dxtmisha/functional';
import { IconPropsBasic, IconValue } from '../Icon';
import { RoleType } from '../../types/roleTypes';
import { ListItemPropsBasic } from '../ListItem';
interface ListPropsToken {
    axis?: 'x' | 'y';
    divider?: boolean;
}
export interface ListPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic> {
    focus?: ListSelectedItem;
    selected?: ListSelectedList;
    disabled?: boolean;
    lite?: boolean;
    list?: ListRecord<ListItem>;
    liteThreshold?: number;
    highlight?: string;
    highlightLengthStart?: number;
    filterMode?: boolean;
    keyLabel?: string;
    keyValue?: string;
    max?: string | number;
    tag?: 'div' | 'button' | 'a' | 'span' | string;
    axis?: 'x' | 'y';
    divider?: boolean;
    itemAttrs?: ConstrBind<ListItem>;
    itemManagementAttrs?: ConstrBind<ListItem>;
    itemGroupAttrs?: ConstrBind<ListItem>;
    itemMenuAttrs?: ConstrBind<ListItem>;
    iconArrowDown?: IconValue<Icon>;
    iconArrowRight?: IconValue<Icon>;
    roleItem?: RoleType;
    control?: boolean;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ListProps extends ListPropsBasic, ListPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsList: {
    axis: string;
    keyLabel: string;
    keyValue: string;
    tag: string;
};
export {};
