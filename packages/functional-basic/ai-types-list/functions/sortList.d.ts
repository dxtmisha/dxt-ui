// md5:055dc2fa4776253157bdbebc165f67fc true
/** Sorts an array of items by column paths, directions, or a custom comparison function. @keywords sort, order, multi-column, comparator, array */
export declare function sortList<T = Record<string, unknown>>(list: T[], sortColumns: SortColumnItem[], customSort?: SortFunction<T>): T[];