// md5:b097fb602a6dd4c37629cc9064a86181 true
type TableFlexPropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};
/** Basic properties for flex table component. @keywords table flex props */
export type TableFlexPropsBasic<TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic, TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic, TableRecord extends TableFlexRecordPropsBasic<TableItem, TableHeaderItem> = TableFlexRecordPropsBasic<TableItem, TableHeaderItem>> = TablePropsBasic<TableItem, TableHeaderItem, TableRecord>;
export type TableFlexProps = TableFlexPropsBasic & TableFlexPropsToken;
/** Default properties for TableFlex. @keywords defaults table flex */
export declare const defaultsTableFlex: {
    lazy: boolean;
    page: number;
    stickyScrollBottom: boolean;
};