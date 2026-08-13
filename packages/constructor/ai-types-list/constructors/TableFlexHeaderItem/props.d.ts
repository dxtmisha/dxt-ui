// md5:ebae1538c00aa25187dd202c3ae8d317 true
export type TableFlexHeaderItemPropsToken = {
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
/** Default values for TableFlexHeaderItem component properties. @keywords table flex header item defaults */
export declare const defaultsTableFlexHeaderItem: {
    align: string;
    alignVertical: string;
    tag: string;
};