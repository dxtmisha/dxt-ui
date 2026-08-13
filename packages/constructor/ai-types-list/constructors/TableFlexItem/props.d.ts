// md5:23d8c5fbf08fc3e6528101dacde968a0 true
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
/** Default properties for TableFlexItem @keywords defaults table flex item */
export declare const defaultsTableFlexItem: {
    align: string;
    alignVertical: string;
    tag: string;
};