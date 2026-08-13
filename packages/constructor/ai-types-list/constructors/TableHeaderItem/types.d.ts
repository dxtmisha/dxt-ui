// md5:b521b6d995dfb6db5383a3b3ac5b31ed true
import { ConstrClass, SortColumnItem } from '@dxtmisha/functional';

export type TableHeaderItemComponents = ChipComponentInclude & IconComponentInclude & TooltipComponentInclude;

/** @keywords events, table, sort */
export type TableHeaderItemEmits = {
    /** @keywords sort, click */
    sort: [item: SortColumnItem];
};

export interface TableHeaderItemExpose {
}

/** @keywords slots, table, tooltip */
export interface TableHeaderItemSlots extends TableItemSlots {
    /** @keywords tooltip, slot */
    tooltip?(): any;
}

/** @keywords classes, styling, table */
export type TableHeaderItemClasses = {
    main: ConstrClass;
    label: string;
    description: string;
    body: string;
    sort: string;
    tooltip: string;
};