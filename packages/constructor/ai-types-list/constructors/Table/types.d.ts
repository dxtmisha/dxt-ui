// md5:d08267f9f6b498374120d38209e44a3d true
import type { ConstrClass } from '@dxtmisha/functional';

export type TableComponents = TableRecordComponentInclude & ScrollStickyComponentInclude;
export type TableEmits = TableRecordEmits;
export type TableExpose = {};

/** Table component slots @keywords table, slots, header, footer, body */
export type TableSlots<Item = any, Value = any> = CaptionSlots & TableRecordItemSlots<Item, Value> & {
    /** Custom table header content @keywords table, header */
    header?(props: {
        columns: string[];
    }): any;
    /** Custom table footer content @keywords table, foot, footer */
    foot?(props: {
        columns: string[];
    }): any;
    /** Custom table items content @keywords table, items */
    items?(props: {
        columns: string[];
    }): any;
    /** Custom table body content @keywords table, body */
    body?(props: any): any;
};

/** Class names structure for the table component @keywords table, classes, styles */
export type TableClasses = {
    main: ConstrClass;
    table: string;
    colgroup: string;
    col: string;
    header: string;
    foot: string;
    items: string;
    caption: string;
};