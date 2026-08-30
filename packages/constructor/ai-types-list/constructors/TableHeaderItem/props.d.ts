// md5:e8f905f159f4bd9e0e4da428e46852f7 true
import type { ConstrBind, SortDir } from '@dxtmisha/functional';

/** Table header item token properties. @keywords table, header, item, token */
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

/** Table header item base properties. @keywords table, header, item, sort, column */
export type TableHeaderItemPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = TableItemPropsBasic & ChipPropsInclude<Chip> & TooltipPropsInclude<Tooltip> & {
    /** Header scope. */
    scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
    /** Whether to display sorting controls. */
    showSort?: boolean;
    /** Current sorted column index or name. */
    sortColumn?: string | number;
    /** Sorting direction. */
    sortDir?: SortDir;
    /** Tooltip trigger icon. */
    iconTooltip?: string | ConstrBind<Icon>;
    /** Icon for sorting control. */
    iconSort?: string | ConstrBind<Icon>;
    /** Ascending sort indicator icon. */
    iconArrowUp?: string | ConstrBind<Icon>;
    /** Descending sort indicator icon. */
    iconArrowDown?: string | ConstrBind<Icon>;
};

/** TableHeaderItem component properties. @keywords table, header, item, props */
export type TableHeaderItemProps = TableHeaderItemPropsBasic & TableHeaderItemPropsToken;

/** Default property values for TableHeaderItem. @keywords table, header, defaults */
export declare const defaultsTableHeaderItem: {
    align: string;
    alignVertical: string;
    tag: string;
    scope: string;
};