// md5:6e6d09fb98f71840778988a9eac24fb8 true
import { NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional-basic';

/** Type of list item @keywords list, type, item */
export type ListType = 'item' | 'space' | 'line' | 'subtitle' | 'html' | 'menu' | 'menu-group' | 'group';

/** Basic data structure for list item @keywords list, data, basic */
export type ListDataBasic = {
    label?: NumberOrString;
    value?: any;
    search?: string;
};

/** Extended list item with type and index @keywords list, item, extended */
export type ListDataItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item & {
    parent?: string;
    type: ListType;
    index: string;
    disabled?: boolean;
}>;

/** Array of list data items @keywords list, items, array */
export type ListList<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item>[];

/** List or record structure for list data @keywords list, record, structure */
export type ListRecord<Item extends ListDataBasic = ListDataBasic> = Item[] | Record<string, Item>;

/** Extended list item with additional state properties @keywords list, item, full, state */
export type ListDataFullItem<Item extends ListDataBasic = ListDataBasic> = ListDataItem<Item> & {
    focus: boolean;
    highlight?: string;
    selected: boolean;
    disabled?: boolean;
};

/** Array of extended list items with state @keywords list, data, full, state */
export type ListDataFull<Item extends ListDataBasic = ListDataBasic> = ListDataFullItem<Item>[];

/** Input item for list creation @keywords list, input, item */
export type ListListInputItem<Item extends ListDataBasic = ListDataBasic> = ConstrBind<Item>;

/** Various input formats for list creation @keywords list, input, formats */
export type ListListInput<Item extends ListDataBasic = ListDataBasic> = ListListInputItem<Item>[] | string[] | Record<string, ListListInputItem<Item>> | Record<string, string>;

/** Single selected item identifier @keywords list, selected, item */
export type ListSelectedItem = NumberOrStringOrBoolean;

/** Single or multiple selected items @keywords list, selected, list */
export type ListSelectedList = ListSelectedItem | ListSelectedItem[];

/** Name of selected list item @keywords list, name */
export type ListName = string | number | undefined;

/** Array of list item names @keywords list, names, array */
export type ListNames = ListName[];