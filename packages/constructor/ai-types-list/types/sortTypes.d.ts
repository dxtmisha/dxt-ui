// md5:618ba7d3507878ba8edc3b2583a92b17 true
import { Ref } from 'vue';
import { SortDir, SortFunction } from '@dxtmisha/functional';

export type SortColumn = string | string[] | Record<string, SortDir>;

export type SortIncludeSort = SortColumn | Ref<SortColumn | undefined> | (() => SortColumn | undefined);

export type SortIncludeSortDir = SortDir | Ref<SortDir | undefined> | (() => SortDir | undefined);

/** Properties for sorting configuration in components and SortInclude. @keywords sort properties config */
export type SortPropsInclude<T = any> = {
    list?: T[];
    sort?: SortColumn;
    sortDir?: SortDir;
    sortFunction?: SortFunction<T>;
};