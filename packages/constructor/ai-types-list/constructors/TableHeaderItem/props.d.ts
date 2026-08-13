// md5:fdee5b10fcb84506dca0613c6645853a true
import { ConstrBind, SortDir } from '@dxtmisha/functional';
type TableHeaderItemPropsToken = {
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
export type TableHeaderItemPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = TableItemPropsBasic & ChipPropsInclude<Chip> & TooltipPropsInclude<Tooltip> & {
    scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
    showSort?: boolean;
    sortColumn?: string | number;
    sortDir?: SortDir;
    iconTooltip?: string | ConstrBind<Icon>;
    iconSort?: string | ConstrBind<Icon>;
    iconArrowUp?: string | ConstrBind<Icon>;
    iconArrowDown?: string | ConstrBind<Icon>;
};
export type TableHeaderItemProps = TableHeaderItemPropsBasic & TableHeaderItemPropsToken;
/** Default table header item properties @keywords defaults, tableHeaderItem */
export declare const defaultsTableHeaderItem: {
    align: string;
    alignVertical: string;
    tag: string;
    scope: string;
};