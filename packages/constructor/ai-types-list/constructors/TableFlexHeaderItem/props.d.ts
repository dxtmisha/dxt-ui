// md5:99bde913d39c81690b8787ce8046dedf true
type TableFlexHeaderItemPropsToken = {
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
export type TableFlexHeaderItemPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = TableHeaderItemPropsBasic<Chip, Icon, Tooltip>;
export type TableFlexHeaderItemProps = TableFlexHeaderItemPropsBasic & TableFlexHeaderItemPropsToken;
/** Default properties for TableFlexHeaderItem component. @keywords table, flex, header, item, defaults */
export declare const defaultsTableFlexHeaderItem: {
    align: string;
    alignVertical: string;
    tag: string;
};