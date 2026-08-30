// md5:ec87083092edb984ac8ceb20b9667d9e true
type TablePropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};
/** Basic table component properties @keywords table, props, basic */
export type TablePropsBasic<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic, TableRecord extends TableRecordPropsBasic<TableItem, TableHeaderItem> = TableRecordPropsBasic<TableItem, TableHeaderItem>> = CaptionProps & SearchPropsInclude<TableItem> & SortPropsInclude<TableItem> & PaginationPropsInclude<TableItem> & StickyScrollBottomPropsInclude & TableRecordPropsInclude<TableItem, TableRecord> & {
    /** Column index names */
    columns?: string[];
    /** Column widths for colgroup */
    columnsWidth?: Record<string, string | number>;
    /** Table header data */
    header?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>;
    /** Table footer data */
    foot?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>;
    /** List of row records */
    list?: TableList<TableItem>;
    /** Current active page */
    page?: number | string;
    /** Number of records per page */
    rows?: number | string;
};
/** Table component properties combining base configuration and style tokens @keywords table, props */
export type TableProps = TablePropsBasic & TablePropsToken;
/** Default property values for the table component @keywords table, defaults */
export declare const defaultsTable: {
    lazy: boolean;
    page: number;
    stickyScrollBottom: boolean;
};