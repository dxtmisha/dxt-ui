// md5:e38f2815897b493ec61d2b319ae9b989 true
type TableItemPropsToken = {
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
export type TableItemPropsBasic = LabelProps & DescriptionProps & SkeletonPropsInclude & {
    value?: string;
    tag?: string;
    colspan?: string | number;
    rowspan?: string | number;
    keyItem?: string;
    index?: string | number;
};
export type TableItemProps = TableItemPropsBasic & TableItemPropsToken;
/** Default properties for the TableItem component. @keywords table, item, cell, defaults */
export declare const defaultsTableItem: {
    align: string;
    alignVertical: string;
    tag: string;
};