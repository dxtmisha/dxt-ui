// md5:a38bb83ae28ff4c77d709cdff8cc0547 true
export type SortDir = 'asc' | 'desc';
export type SortColumnItem = {
    column?: string;
    dir?: SortDir;
};
/** Custom comparison function for sorting items. @keywords sort, comparator, order */
export type SortFunction<T = any> = (a: T, b: T, column?: string, dir?: SortDir) => number;