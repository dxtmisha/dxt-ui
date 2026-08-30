// md5:8920bd48769973ef91b448d0e809b894 true
type TableRecordPropsToken = {
    disabled?: boolean;
    selected?: boolean;
};
export type TableRecordPropsBasic<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableItemPropsInclude<TableItem> & {
    /** Row data */
    item?: Record<string, TableRecordValue<TableItem | TableHeaderItem> | any>;
    /** Column indexes */
    columns?: string[];
    /** Whether the row represents a table header */
    isHeader?: boolean;
    /** Unique rendering key */
    index?: string;
};
export type TableRecordProps = TableRecordPropsBasic & TableRecordPropsToken;
/** Default properties for TableRecord component @keywords table, record, defaults */
export declare const defaultsTableRecord: {};