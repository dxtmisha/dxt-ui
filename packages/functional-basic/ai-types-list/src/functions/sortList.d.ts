// md5:7f609bbad4d4dc96ca0147eda500438a true
/** Sorts an array of items by one or more column criteria or a custom comparison function. @keywords sort, order, list, multi-column, comparator */
export declare function sortList<T = any>(list: T[], sortColumns: SortColumnItem[], customSort?: SortFunction<T>): T[];