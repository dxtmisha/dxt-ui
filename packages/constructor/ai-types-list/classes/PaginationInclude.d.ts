// md5:a0555e025d1b38853cf669938af5aa4a true
import { ComputedRef } from 'vue';

export type PaginationPropsInclude<T = any> = {
    page?: number | ComputedRef<number>;
    rows?: number | ComputedRef<number>;
    list?: T[] | ComputedRef<T[] | undefined> | (() => T[] | undefined);
    [key: string]: any;
};

/** Manages pagination logic, calculating page number, row limit, and list slicing. @keywords pagination page rows list slice */
export declare class PaginationInclude<T = any> {
    /** Creates pagination instance. @keywords constructor pagination */
    constructor(props: PaginationPropsInclude<T>, targetList?: T[] | (() => T[] | undefined) | undefined);
    /** Gets maximum available page number. @keywords max maximum page */
    get max(): number;
    /** Gets current page number. @keywords page current */
    get page(): number;
    /** Gets rows per page limit. @keywords rows limit size */
    get list(): T[];
    get rows(): number;
}