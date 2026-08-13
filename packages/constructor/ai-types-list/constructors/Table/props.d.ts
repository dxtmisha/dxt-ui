// md5:a2e740ebdad09992c8638fae98f89390 true
type TablePropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};
export type TablePropsBasic<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic, TableRecord extends TableRecordPropsBasic<TableItem, TableHeaderItem> = TableRecordPropsBasic<TableItem, TableHeaderItem>> = CaptionProps & SearchPropsInclude<TableItem> & SortPropsInclude<TableItem> & PaginationPropsInclude<TableItem> & StickyScrollBottomPropsInclude & TableRecordPropsInclude<TableItem, TableRecord> & {
    columns?: string[];
    columnsWidth?: Record<string, string | number>;
    header?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>;
    foot?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>;
    list?: TableList<TableItem>;
    page?: number | string;
    rows?: number | string;
};
export type TableProps = TablePropsBasic & TablePropsToken;
/** Default table configuration properties. @keywords defaults, table, config */
export declare const defaultsTable: {
    lazy: boolean;
    page: number;
    stickyScrollBottom: boolean;
};