// md5:7c5bbc20137aabe83e234e25f84508e3 true
import type { ApiFetch, ConstrBind, ListRecord, ListSelectedList, NormalOrPromise } from '@dxtmisha/functional';
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
    showSearch?: boolean;
    filterMode?: boolean;
    ajax?: string | (() => NormalOrPromise<ListRecord<ListItem>>);
    request?: ApiFetch;
    cache?: boolean;
    keyLabel?: string;
    keyValue?: string;
    max?: string | number;
    tag?: ListItemProps['tag'];
    step?: string | number;
    selectionStyle?: ListItem['selectionStyle'];
    listAttrs?: ConstrBind<List>;
    itemAttrs?: ConstrBind<ListItem>;
    roleList?: RoleType;
    roleItem?: RoleType;
    isSelectedByValue?: boolean;
    embedded?: boolean;
};
/** Menu component properties. @keywords menu, props */
export type MenuProps = MenuPropsBasic & MenuPropsToken;
/** Default properties for the Menu component. @keywords menu, defaults */
export declare const defaultsMenu: {
    liteThreshold: number;
    barsHide: boolean;
    barsBackHide: boolean;
    tag: string;
    step: number;
    autoClose: boolean;
};