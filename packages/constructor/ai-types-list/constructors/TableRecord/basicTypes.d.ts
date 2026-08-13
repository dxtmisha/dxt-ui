// md5:5a1607da4f482ab4c13e3adb409a8cf4 true
import { ConstrBind } from '@dxtmisha/functional';

export type TableRecordValue<TableItem extends TableItemPropsBasic = TableItemPropsBasic> = string | number | ConstrBind<TableItem>;

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

export type TableRecordItemSlot<Item = any, Value = any> = (props: TableRecordItemSlotProps<Item, Value>) => any;

export type TableRecordItemSlots<Item = any, Value = any> = {
    [key: string]: TableRecordItemSlot<Item, Value> | undefined;
};

export type TableRecordComponentInclude = {
    tableRecord?: object;
};

export type TableRecordPropsInclude<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableRecord extends TableRecordPropsBasic<TableItem> = TableRecordPropsBasic<TableItem>> = Omit<TableItemPropsInclude<TableItem>, 'disabled' | 'selected' | 'stickyTop'> & {
    selected?: string | string[];
    stickyTop?: string[];
    keyValue?: string;
    lazy?: boolean;
    defaultHeight?: string | number;
    tableRecordAttrs?: ConstrBind<TableRecord>;
    tableRowAttrs?: Record<string, ConstrBind<TableRecord>>;
};