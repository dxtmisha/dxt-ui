// md5:f78e4bcedb2273b73f01875e7b5f2534 true
import type { NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional-basic';

/** Type of list item @keywords list, type, item, space, line, subtitle, html, menu, group */
export type ListType = 'item' | 'space' | 'line' | 'subtitle' | 'html' | 'menu' | 'menu-group' | 'group';

/** Basic data structure for list item @keywords list, data, basic, record */
export type ListDataBasic = {
    label?: NumberOrString;
    value?: any;
    search?: string;
};

/** Extended list item with type and index @keywords list, data, item, index, parent */
export type ListDataItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item & {
    parent?: string;
    type: ListType;
    index: string;
    disabled?: boolean;
}>;

export type ListList<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item>[];

export type ListRecord<Item extends ListDataBasic = ListDataBasic> = Item[] | Record<string, Item>;

/** Extended list item with additional state properties @keywords list, item, focus, highlight, selected */
export type ListDataFullItem<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item> & {
    focus: boolean;
    highlight?: string;
    selected: boolean;
    disabled?: boolean;
};

export type ListDataFull<Item extends ListDataBasic = ListDataBasic> = ListDataFullItem<Item>[];

export type ListListInputItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item>;

/** Various input formats for list creation @keywords list, input, format, record */
export type ListListInput<Item extends ListDataBasic = ListDataBasic> = ListListInputItem<Item>[] | string[] | Record<string, ListListInputItem<Item>> | Record<string, string>;

export type ListSelectedItem = NumberOrStringOrBoolean;

export type ListSelectedList = ListSelectedItem | ListSelectedItem[];

export type ListName = string | number | undefined;

export type ListNames = ListName[];