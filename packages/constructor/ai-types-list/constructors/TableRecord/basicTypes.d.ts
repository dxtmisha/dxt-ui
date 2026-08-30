// md5:011818bdf4f894477af6ab30d09e3a1c true
import type { ConstrBind } from '@dxtmisha/functional';

/** Cell value in a table record row. @keywords table, record, value */
export type TableRecordValue<TableItem extends TableItemPropsBasic = TableItemPropsBasic> = string | number | ConstrBind<TableItem>;

/** Parameters of a table item slot in a table record. @keywords table, record, slot, props */
export type TableRecordItemSlotProps<Item = any, Value = any> = {
    item: Item;
    key: string;
    index: string;
    value: Value;
    slotsName: string;
    classes: {
        label: string;
        description: string;
    };
};

/** Render function of a table item slot in a table record. @keywords table, record, slot */
export type TableRecordItemSlot<Item = any, Value = any> = (props: TableRecordItemSlotProps<Item, Value>) => any;

/** Collection of table item slots in a table record. @keywords table, record, slots */
export type TableRecordItemSlots<Item = any, Value = any> = {
    [key: string]: TableRecordItemSlot<Item, Value> | undefined;
};

/** Component options for nested table records. @keywords table, record, component */
export type TableRecordComponentInclude = {
    tableRecord?: object;
};

/** Properties for nested table records. @keywords table, record, props */
export type TableRecordPropsInclude<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableRecord extends TableRecordPropsBasic<TableItem> = TableRecordPropsBasic<TableItem>> = Omit<TableItemPropsInclude<TableItem>, 'disabled' | 'selected' | 'stickyTop'> & {
    selected?: string | string[];
    stickyTop?: string[];
    keyValue?: string;
    lazy?: boolean;
    defaultHeight?: string | number;
    tableRecordAttrs?: ConstrBind<TableRecord>;
    tableRowAttrs?: Record<string, ConstrBind<TableRecord>>;
};