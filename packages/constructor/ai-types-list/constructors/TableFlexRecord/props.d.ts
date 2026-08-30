// md5:62c7560e88397f194a86fd73c9d24ec1 true
type TableFlexRecordPropsToken = {
    disabled?: boolean;
    selected?: boolean;
};

/** Basic flex table record properties @keywords table, flex, record, props */
export type TableFlexRecordPropsBasic<TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic, TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic> = TableRecordPropsBasic<TableItem, TableHeaderItem> & {
    /** Lazy loading of row elements */
    lazy?: boolean;
    /** Default height of the row element */
    defaultHeight?: string | number;
};

/** Flex table record component properties @keywords table, flex, record, props */
export type TableFlexRecordProps = TableFlexRecordPropsBasic & TableFlexRecordPropsToken;

/** Default values for TableFlexRecord properties @keywords table, flex, record, defaults */
export declare const defaultsTableFlexRecord: {
    lazy: boolean;
};