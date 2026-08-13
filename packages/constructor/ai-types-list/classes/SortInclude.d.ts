// md5:1fe042344215b3e5babe723436360a02 true
import { ComputedRef } from 'vue';
import { SortColumnItem, SortDir } from '@dxtmisha/functional';

/** Sort properties configuration interface. @keywords sort props configuration */
export type SortPropsInclude<T = any> = {
    sort?: SortIncludeSort | undefined;
    sortDir?: SortIncludeSortDir | undefined;
    list?: T[] | (() => T[] | undefined) | undefined;
    compare?: ((a: T, b: T, column: string, dir: SortDir) => number) | undefined;
};

/** Fallback sort column definition type. @keywords sort column definition */
export type SortIncludeSort = string | string[] | SortColumnItem | SortColumnItem[] | Ref<string | string[] | SortColumnItem | SortColumnItem[] | undefined> | (() => string | string[] | SortColumnItem | SortColumnItem[] | undefined);

/** Fallback sort direction definition type. @keywords sort direction definition */
export type SortIncludeSortDir = SortDir | Ref<SortDir | undefined> | (() => SortDir | undefined);

/** Manages multi-column sorting for lists by keys, directions, or custom compare functions. @keywords sort include list manager */
export declare class SortInclude<T = any> {
    /** @keywords constructor */
    constructor(props: SortPropsInclude<T>, targetList?: any[] | (() => any[] | undefined) | undefined, sort?: SortIncludeSort | undefined, sortDir?: SortIncludeSortDir | undefined);
    /** Normalized column sorting specifications list. @keywords columns sort specs */
    readonly columns: ComputedRef<SortColumnItem[]>;
    /** Sorted list of items. @keywords sorted list items */
    readonly sortedList: ComputedRef<T[]>;
    /** Primary sort column key. @keywords column key getter */
    get column(): string | undefined;
    /** Primary sort direction. @keywords dir direction getter */
    get dir(): SortDir;
    /** Checks if sorting is active. @keywords isSort active state */
    isSort(): boolean;
    /** Returns sorted or original list. @keywords getList items */
    getList(): T[];
}