// md5:485e8af3375a31fc74c493437d884aed true
import { ApiFetch, ConstrBind, ListRecord, ListSelectedList, NormalOrPromise } from '@dxtmisha/functional';
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
/** Menu component input properties @keywords menu, props, properties */
export type MenuProps = MenuPropsBasic & MenuPropsToken;
/** Default configuration values for menu component @keywords menu, defaults, configuration */
export declare const defaultsMenu: {
    liteThreshold: number;
    barsHide: boolean;
    barsBackHide: boolean;
    tag: string;
    step: number;
    autoClose: boolean;
};