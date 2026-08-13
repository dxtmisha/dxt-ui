// md5:2ccc8c73dfa549dd65ff38044c5fe01e true
import { ConstrClass } from '@dxtmisha/functional';
export type TableComponents = TableRecordComponentInclude & ScrollStickyComponentInclude;
export type TableEmits = TableRecordEmits;
export type TableExpose = {};
export type TableSlots<Item = any, Value = any> = CaptionSlots & TableRecordItemSlots<Item, Value> & {
    /** Custom table header slot @keywords header, slot */
    header?(props: {
        columns: string[];
    }): any;
    /** Custom table footer slot @keywords foot, footer, slot */
    foot?(props: {
        columns: string[];
    }): any;
    /** Custom table items slot @keywords items, slot */
    items?(props: {
        columns: string[];
    }): any;
    /** Custom table body slot @keywords body, slot */
    body?(props: any): any;
};
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