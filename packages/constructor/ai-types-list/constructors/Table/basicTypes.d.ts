// md5:f0e60425a8bbce17f5646079af3b7a24 true
import { ConstrStyles } from '@dxtmisha/functional';

export type TableColumnCol = {
    'key': string;
    'style'?: ConstrStyles;
    'data-col': string;
};

export type TableHeader<TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = Record<string, TableRecordValue<TableHeaderItem>>;

export type TableHeaders<TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableHeader<TableHeaderItem>[];

export type TableList<TableItem extends TableItemPropsBasic = TableItemPropsBasic> = (Partial<Record<string, TableRecordValue<TableItem>>> | Record<string, any> | any)[];