// md5:6b2f9181df17a95bc29f526d2b8d1607 true
export type SortDir = 'asc' | 'desc';
/** Column sort specification. @keywords sort, column, order */
export type SortColumnItem = {
    column?: string;
    dir?: SortDir;
};
/** Custom comparator function for sorting items. @keywords sort, comparator, sort-function */
export type SortFunction<T = Record<string, unknown>> = (a: T, b: T, column?: string, dir?: SortDir) => number;