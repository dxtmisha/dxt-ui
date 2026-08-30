// md5:7900f15f1f7108f5c1ec263876d47a14 true
import type { SearchOptions } from '@dxtmisha/functional';

/** Properties for search configuration and data filtering. @keywords search, filter, query, include */
export type SearchPropsInclude<T = any> = {
    /** Input items list to search within. */
    list?: T[];
    /** Search string query. */
    search?: string;
    /** Specific columns or field names to search in. */
    searchColumns?: string[];
    /** Additional search options. */
    searchOptions?: SearchOptions;
};