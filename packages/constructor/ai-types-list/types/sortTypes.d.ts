// md5:b6c318beca4291ae6654daf25e4c9f6b true
import type { Ref } from 'vue';
import type { SortDir, SortFunction } from '@dxtmisha/functional';
/** Target column name, array of columns, or column-direction map for sorting. @keywords sort, column, order */
export type SortColumn = string | string[] | Record<string, SortDir>;
/** Sort column value, reactive ref, or getter function. @keywords sort, column, ref, getter */
export type SortIncludeSort = SortColumn | Ref<SortColumn | undefined> | (() => SortColumn | undefined);
/** Sort direction value, reactive ref, or getter function. @keywords sort, direction, order, ref, getter */
export type SortIncludeSortDir = SortDir | Ref<SortDir | undefined> | (() => SortDir | undefined);
/** Sort configuration properties for components and composables. @keywords sort, properties, props */
export type SortPropsInclude<T = any> = {
    /** Target items to sort. */
    list?: T[];
    /** Target column(s) or property key(s) for sorting. */
    sort?: SortColumn;
    /** Sorting direction order. */
    sortDir?: SortDir;
    /** Custom sorting comparator function. */
    sortFunction?: SortFunction<T>;
};