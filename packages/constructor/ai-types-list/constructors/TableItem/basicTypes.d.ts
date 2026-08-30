// md5:2e145849a369e32eb1c7296662c8c15d true
import type { ConstrBind } from '@dxtmisha/functional';

export type TableItemComponentInclude = {
    /** TableItem component configuration @keywords table, item, component */
    tableItem?: object;
};

/** Properties for nested table item components @keywords table, item, props, sticky, selection */
export type TableItemPropsInclude<TableItem extends TableItemPropsBasic = TableItemPropsBasic> = SkeletonPropsInclude & {
    /** Selected state of the item */
    selected?: boolean;
    /** Disabled state of the item */
    disabled?: boolean;
    /** Sticky top state */
    stickyTop?: boolean;
    /** List of columns sticky to the left */
    stickyLeft?: string[];
    /** Additional attributes for TableItem component */
    tableItemAttrs?: ConstrBind<TableItem>;
    /** Additional attributes for TableItem column components */
    tableItemColumnAttrs?: Record<string, ConstrBind<TableItem>>;
};