// md5:b6213dc930d0b927ab657bf40f8db6c4 true
import type { ConstrStyles } from '@dxtmisha/functional';

/** Col element attributes for table colgroup. @keywords table, col, colgroup */
export type TableColumnCol = {
    'key': string;
    'style'?: ConstrStyles;
    'data-col': string;
};

/** Table header record mapping. @keywords table, header */
export type TableHeader<TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = Record<string, TableRecordValue<TableHeaderItem>>;

/** Multiple table header rows. @keywords table, headers, rows */
export type TableHeaders<TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableHeader<TableHeaderItem>[];

/** List of table row records. @keywords table, list, records, rows */
export type TableList<TableItem extends TableItemPropsBasic = TableItemPropsBasic> = (Partial<Record<string, TableRecordValue<TableItem>>> | Record<string, any> | any)[];