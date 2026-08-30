// md5:1fa2b0f01d3fb97f590d0fec7e133b71 true
type TableFlexItemPropsToken = {
    disabled?: boolean;
    selected?: boolean;
    align?: 'left' | 'center' | 'right';
    alignVertical?: 'top' | 'center' | 'bottom';
    dividerX?: boolean;
    dividerY?: boolean;
    labelClamp?: boolean;
    stickyTop?: boolean;
    stickyLeft?: boolean;
};
export type TableFlexItemPropsBasic = TableItemPropsBasic;
export type TableFlexItemProps = TableFlexItemPropsBasic & TableFlexItemPropsToken;
/** Default property values for TableFlexItem component. @keywords table flex item, defaults */
export declare const defaultsTableFlexItem: {
    align: string;
    alignVertical: string;
    tag: string;
};