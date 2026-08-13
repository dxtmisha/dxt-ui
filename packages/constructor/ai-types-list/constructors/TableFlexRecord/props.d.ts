// md5:ccae247be5d1ae986014b62c2db3cd6c true
export type TableFlexRecordPropsBasic<TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic, TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic> = TableRecordPropsBasic<TableItem, TableHeaderItem> & {
    lazy?: boolean;
    defaultHeight?: string | number;
};
export type TableFlexRecordProps = TableFlexRecordPropsBasic & {
    disabled?: boolean;
    selected?: boolean;
};
/** Default values for TableFlexRecord properties @keywords table flex record defaults */
export declare const defaultsTableFlexRecord: {
    lazy: boolean;
};