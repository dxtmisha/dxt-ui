// md5:fcfa31ed23b05f0aad69f4534ea484a2 true
import { ConstrClass } from '@dxtmisha/functional';

export type TableFlexComponents = TableComponents;

export type TableFlexEmits = TableEmits;

export interface TableFlexExpose extends TableExpose {
}

export type TableFlexSlots<Item = any, Value = any> = TableSlots<Item, Value>;

/** TableFlex classes definition. @keywords table flex classes */
export type TableFlexClasses = {
    main: ConstrClass;
    table: string;
    colgroup: string;
    col: string;
    header: string;
    foot: string;
    items: string;
    caption: string;
};