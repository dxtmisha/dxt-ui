// md5:fe399461ed1fd651972f3b0a4e822202 true
type TableRecordPropsToken = {
    disabled?: boolean;
    selected?: boolean;
};

export type TableRecordPropsBasic<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableItemPropsInclude<TableItem> & {
    item?: Record<string, TableRecordValue<TableItem | TableHeaderItem> | any>;
    columns?: string[];
    isHeader?: boolean;
    index?: string;
};

export type TableRecordProps = TableRecordPropsBasic & TableRecordPropsToken;

/** Default table record values @keywords defaultsTableRecord, table, record */
export declare const defaultsTableRecord: {};