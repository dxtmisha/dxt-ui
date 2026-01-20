import { ApiFetch, ConstrBind, ListRecord, ListSelectedList, NormalOrPromise } from '@dxtmisha/functional';
import { ListPropsBasic } from '../List';
import { ListItemProps, ListItemPropsBasic } from '../ListItem';
import { BarsPropsBasic, BarsPropsInclude } from '../Bars';
import { WindowPropsBasic, WindowPropsInclude } from '../Window';
import { ModelPropsSelected } from '../../types/modelTypes';
import { RoleType } from '../../types/roleTypes';
export type MenuPropsToken = {
    hideList?: boolean;
    barsAdaptive?: 'showAlways';
};
export type MenuPropsBasic<List extends ListPropsBasic = ListPropsBasic, ListItem extends ListItemPropsBasic = ListItemPropsBasic, Bars extends BarsPropsBasic = BarsPropsBasic, Window extends WindowPropsBasic = WindowPropsBasic> = BarsPropsInclude<Bars> & WindowPropsInclude<Window> & ModelPropsSelected & {
    selected?: ListSelectedList;
    hideList?: boolean;
    list?: ListRecord<ListItem>;
    liteThreshold?: number;
    highlight?: string;
    highlightLengthStart?: number;
    filterMode?: boolean;
    ajax?: string | (() => NormalOrPromise<ListRecord<ListItem>>);
    request?: ApiFetch;
    cache?: boolean;
    keyLabel?: string;
    keyValue?: string;
    max?: string | number;
    tag?: ListItemProps['tag'];
    step?: string | number;
    listAttrs?: ConstrBind<List>;
    itemAttrs?: ConstrBind<ListItem>;
    roleItem?: RoleType;
    isSelectedByValue?: boolean;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type MenuProps = MenuPropsBasic & MenuPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMenu: {
    liteThreshold: number;
    barsHide: boolean;
    barsBackHide: boolean;
    tag: string;
    step: number;
    autoClose: boolean;
    roleItem: string;
};
