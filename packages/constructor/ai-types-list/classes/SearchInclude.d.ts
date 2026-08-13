// md5:0239856caad16d3b434c06635f052713 true
import { SearchColumns, SearchFormatList, SearchItem } from '@dxtmisha/functional';

export type SearchPropsInclude<T extends SearchItem = any> = {
    search?: string | (() => string);
    list?: T[] | (() => T[]);
    searchColumns?: SearchColumns<T> | (() => SearchColumns<T>);
    loading?: boolean | (() => boolean);
};

/** Manages search logic, wrapping useSearchRef to filter lists. @keywords SearchInclude search filter list */
export declare class SearchInclude<T extends SearchItem = any> {
    readonly item: ReturnType<typeof import('@dxtmisha/functional').useSearchRef<T, SearchColumns<T>>>;
    /** Creates SearchInclude instance. @keywords constructor SearchInclude */
    constructor(props: SearchPropsInclude<T>, columns?: (SearchColumns<T> | (() => SearchColumns<T>)) | undefined);
    /** Gets filtered search list. @keywords list getter SearchInclude */
    get list(): SearchFormatList<T, SearchColumns<T>>;
    /** Gets search results count. @keywords length getter SearchInclude */
    get length(): number;
    /** Gets current search query string. @keywords search getter SearchInclude */
    get search(): string;
    /** Gets loading state. @keywords loading getter SearchInclude */
    get loading(): boolean;
    /** Checks if search is active. @keywords isSearch SearchInclude */
    isSearch(): boolean;
}