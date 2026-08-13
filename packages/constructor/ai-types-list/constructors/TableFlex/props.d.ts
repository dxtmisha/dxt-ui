// md5:98085a9eb908555b96421f02075a02bd true
type TableFlexPropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};
export type TableFlexPropsBasic<TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic, TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic, TableRecord extends TableFlexRecordPropsBasic<TableItem, TableHeaderItem> = TableFlexRecordPropsBasic<TableItem, TableHeaderItem>> = TablePropsBasic<TableItem, TableHeaderItem, TableRecord>;
/** TableFlex component incoming properties @keywords table flex props */
export type TableFlexProps = TableFlexPropsBasic & TableFlexPropsToken;
/** Default properties for TableFlex component @keywords defaults table flex */
export declare const defaultsTableFlex: {
    lazy: boolean;
    page: number;
    stickyScrollBottom: boolean;
};