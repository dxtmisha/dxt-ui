// md5:149f764de6bdd9eb4aa2aeb770193b6e true
import type { ComputedRef } from 'vue';

/** Reactive list data manager handling navigation, selection, search highlighting, and hierarchic sublists. @keywords list, state, navigation, select, highlight */
export declare class ListDataRef {
    /** Initializes list data management with reactive configuration and item mappings. @keywords constructor, list, init */
    constructor(list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, filterMode?: RefType<boolean | undefined> | undefined, selected?: RefType<ListSelectedList | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined, min?: RefOrNormal<number | string | undefined>, max?: RefOrNormal<number | string | undefined>, parent?: string | undefined);
    /** Reactive list of items formatted for rendering. @keywords data, items, list */
    readonly data: ComputedRef<ListList>;
    /** Simplified reactive item list for performance-optimized initial rendering. @keywords lite, fast-load, list */
    readonly liteData: ComputedRef<ListList>;
    /** Full reactive list entries enriched with focus, selection, and disabled states. @keywords full-data, enriched, state */
    readonly fullData: ComputedRef<ListDataFull>;
    /** Flat map of all list entries across all sublists and hierarchies. @keywords flat-map, hierarchy, all-items */
    readonly map: ComputedRef<ListList>;
    /** Flat list containing only selectable item records. @keywords map-items, flat */
    readonly mapItems: ComputedRef<ListList>;
    /** List containing selectable values including items, groups, and menus. @keywords items, selectable, values */
    readonly items: ComputedRef<ListList>;
    /** Index of the first item matching the active search query. @keywords highlight, search, first-index */
    readonly highlightFirstItem: ComputedRef<number>;
    /** Whether at least one item is currently selected. @keywords is-selected, selection, status */
    readonly isSelected: ComputedRef<boolean>;
    /** Whether the minimum selection threshold has been satisfied. @keywords is-selected-min, min-selection */
    readonly isSelectedMin: ComputedRef<boolean>;
    /** Whether the maximum selection limit has been reached. @keywords is-selected-max, max-selection */
    readonly isSelectedMax: ComputedRef<boolean>;
    /** List of currently selected item records across the map. @keywords selected-list, selection */
    readonly selectedList: ComputedRef<ListList>;
    /** List of selected items located within the active group. @keywords selected-group, group-selection */
    readonly selectedListInGroup: ComputedRef<ListList>;
    /** Map of labels corresponding to selected items. @keywords selected-names, labels */
    readonly selectedNames: ComputedRef<ListNames>;
    /** Array of values corresponding to selected items. @keywords selected-values, values */
    readonly selectedValues: ComputedRef<any[]>;
    /** Checks if simplified initial render mode is active. @keywords is-lite, performance */
    isLite(): boolean;
    /** Checks whether an item currently has focus. @keywords is-focus, focus-state */
    isFocus(): boolean;
    /** Checks whether any items match the active search highlight query. @keywords is-highlight, search-match */
    isHighlight(): boolean;
    /** Checks whether search highlighting is active based on minimum query length. @keywords is-highlight-active, search-active */
    isHighlightActive(): boolean;
    /** Gets the total count of items in the primary list. @keywords length, count */
    getLength(): number;
    /** Gets the count of all records present across the flat map. @keywords length-map, total-count */
    getLengthByMap(): number;
    /** Gets the count of all available selectable item records. @keywords length-items, item-count */
    getLengthByItems(): number;
    /** Gets the identifier of the currently focused item. @keywords get-focus, focus-id */
    getFocus(): ListSelectedItem | undefined;
    /** Gets the data object of the currently focused item. @keywords get-focus-item, focused-item */
    getFocusItem(): ListDataItem | undefined;
    /** Gets the current search highlight query string. @keywords get-highlight, search-text */
    getHighlight(): string | undefined;
    /** Gets the minimum query length required to trigger highlighting. @keywords highlight-min-length, search-threshold */
    getHighlightLengthStart(): number;
    /** Gets the list of selected item identifiers. @keywords get-selected, selected-ids */
    getSelected(): ListSelectedList | undefined;
    /** Finds a selected item identifier relative to selection by a step offset. @keywords selected-step, step-navigation */
    getSelectedByStep(step: number): ListSelectedItem | undefined;
    /** Gets the next selected item identifier. @keywords selected-next, next-selection */
    getSelectedNext(): ListSelectedItem | undefined;
    /** Gets the previous selected item identifier. @keywords selected-prev, prev-selection */
    getSelectedPrev(): ListSelectedItem | undefined;
    /** Retrieves an item offset by a specific step relative to the given item. @keywords item-by-step, relative-item */
    getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined;
    /** Retrieves the item following the given item. @keywords item-next, next-item */
    getItemNext(item: ListDataItem): ListDataItem | undefined;
    /** Retrieves the item preceding the given item. @keywords item-prev, prev-item */
    getItemPrev(item: ListDataItem): ListDataItem | undefined;
    /** Retrieves an item offset by a step relative to the given string index. @keywords index-step, step-index */
    getIndexByStep(index: string, step: number): ListDataItem | undefined;
    /** Retrieves the item following the specified index. @keywords index-next, next-by-index */
    getIndexNext(index: string): ListDataItem | undefined;
    /** Retrieves the item preceding the specified index. @keywords index-prev, prev-by-index */
    getIndexPrev(index: string): ListDataItem | undefined;
    /** Retrieves an item and its numeric key by index identifier. @keywords item-by-index, find-by-index */
    getItemByIndex(index?: string): {
        key: number;
        item: ListDataItem;
    } | undefined;
    /** Retrieves an item record by its numeric key. @keywords item-by-key, find-by-key */
    getItemByKey(key: number): ListDataItem | undefined;
    /** Retrieves the first child item belonging to the specified parent. @keywords first-child, parent-first */
    getFirstItemByParent(parent: string | undefined): ListDataItem | undefined;
    /** Retrieves the last child item belonging to the specified parent. @keywords last-child, parent-last */
    getLastItemByParent(parent: string | undefined): ListDataItem | undefined;
    /** Instantiates or retrieves a child ListDataRef manager for a group item. @keywords sub-list, group-children */
    getSubList(item: ListDataItem): ListDataRef;
}