// md5:97227e1345ee20e62c02d91b3f834ec6 true
import type { ConstrClass, SortColumnItem } from '@dxtmisha/functional';

/** Components required for table header item sub-elements @keywords components, table-header */
export type TableHeaderItemComponents = ChipComponentInclude & IconComponentInclude & TooltipComponentInclude;

/** Event signatures emitted by table header item @keywords emits, events, table-header */
export type TableHeaderItemEmits = {
    sort: [item: SortColumnItem];
};

export interface TableHeaderItemExpose {}

/** Slot definitions for table header item @keywords slots, table-header */
export interface TableHeaderItemSlots extends TableItemSlots {
    tooltip?(): any;
}

/** CSS class names structure for table header item elements @keywords classes, styling */
export type TableHeaderItemClasses = {
    main: ConstrClass;
    label: string;
    description: string;
    body: string;
    sort: string;
    tooltip: string;
};