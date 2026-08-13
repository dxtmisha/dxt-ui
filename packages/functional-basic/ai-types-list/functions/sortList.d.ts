// md5:e6194cb6f460fa62e6b747318f827d85 true
/** Sorts an array of items by specified columns or custom comparison function. @keywords sort, order, array */
export declare function sortList<T = any>(list: T[], sortColumns: SortColumnItem[], customSort?: SortFunction<T>): T[];