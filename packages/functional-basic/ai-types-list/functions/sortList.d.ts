// md5:1d1406452f2037c6042d8b2f70f14fbf true
/** Sorts an array of items by one or more column paths, directions, or a custom comparison function. @keywords sort, array, list, order, comparator, multi-column */
export declare function sortList<T = Record<string, unknown>>(list?: T[] | null, sortColumns?: SortColumnItem[] | null, customSort?: SortFunction<T> | null): T[];