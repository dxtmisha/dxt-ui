// md5:b50983c4a178989d6437a118fb49d215 true
/** Pagination properties for components and includes. @keywords pagination, props, list, page, rows */
export type PaginationPropsInclude<T = any> = {
    list?: T[];
    page?: number | string;
    rows?: number | string;
};