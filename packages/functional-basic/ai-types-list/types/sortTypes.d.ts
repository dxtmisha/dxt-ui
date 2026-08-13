// md5:a38bb83ae28ff4c77d709cdff8cc0547 true
/** Sort direction @keywords sort direction asc desc */
export type SortDir = 'asc' | 'desc';
/** Single column sorting specification item @keywords sort column item */
export type SortColumnItem = {
    /** Column or property key for sorting @keywords sort column property */
    column?: string;
    /** Sorting direction @keywords sort dir */
    dir?: SortDir;
};
/** Custom sort function signature @keywords custom sort function */
export type SortFunction<T = any> = (a: T, b: T, column?: string, dir?: SortDir) => number;