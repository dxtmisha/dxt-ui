// md5:b50983c4a178989d6437a118fb49d215 true
/** Pagination properties for component inclusion @keywords pagination page rows list */
export type PaginationPropsInclude<T = any> = {
    /** Input items list */
    list?: T[];
    /** Current page */
    page?: number | string;
    /** Number of records to display per page */
    rows?: number | string;
};