// md5:779d8bd6da89e794e9246dd67ca7c0a9 true
import type { ConstrClass } from '@dxtmisha/functional';

export type TableFlexComponents = TableComponents;
export type TableFlexEmits = TableEmits;
export interface TableFlexExpose extends TableExpose {}
export type TableFlexSlots<Item = any, Value = any> = TableSlots<Item, Value>;
/** Table flex sub-elements CSS class definitions. @keywords table, flex, classes */
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