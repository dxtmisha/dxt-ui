// md5:149f764de6bdd9eb4aa2aeb770193b6e true
/** Reactive data list management with search, focus, selection, and navigation. @keywords list, data, reactive, selection, focus */
export declare class ListDataRef {
    /** Initializes list data manager with reactive configurations. @keywords constructor, init */
    constructor(list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, filterMode?: RefType<boolean | undefined> | undefined, selected?: RefType<ListSelectedList | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined, min?: RefOrNormal<number | string | undefined>, max?: RefOrNormal<number | string | undefined>, parent?: string | undefined);
    /** Reactive list formatted for display. @keywords data, items, list */
    readonly data: import("vue").ComputedRef<ListList>;
    /** Simplified reactive list for fast rendering. @keywords lite, fast-load */
    readonly liteData: import("vue").ComputedRef<ListList>;
    /** Detailed reactive records including selection and focus state. @keywords full-data, records */
    readonly fullData: import("vue").ComputedRef<ListDataFull>;
    /** Flat map containing all records including sublists. @keywords map, flat */
    readonly map: import("vue").ComputedRef<ListList>;
    /** Flat list containing item-type entries only. @keywords map-items, entries */
    readonly mapItems: import("vue").ComputedRef<ListList>;
    /** Reactive selectable list items. @keywords items, selectable */
    readonly items: import("vue").ComputedRef<ListList>;
    /** Index of first item matching search highlight criteria. @keywords highlight, search-index */
    readonly highlightFirstItem: import("vue").ComputedRef<number>;
    /** Indicates whether any item is currently selected. @keywords selected, check */
    readonly isSelected: import("vue").ComputedRef<boolean>;
    /** Indicates whether minimum selection threshold is satisfied. @keywords min-selection, limit */
    readonly isSelectedMin: import("vue").ComputedRef<boolean>;
    /** Indicates whether maximum selection threshold is reached. @keywords max-selection, limit */
    readonly isSelectedMax: import("vue").ComputedRef<boolean>;
    /** List of currently selected items across full map. @keywords selected-list */
    readonly selectedList: import("vue").ComputedRef<ListList>;
    /** List of currently selected items within active group. @keywords selected-group */
    readonly selectedListInGroup: import("vue").ComputedRef<ListList>;
    /** List of display labels for selected items. @keywords labels, selected-names */
    readonly selectedNames: import("vue").ComputedRef<ListNames>;
    /** Array of raw values for selected items. @keywords values, selected-values */
    readonly selectedValues: import("vue").ComputedRef<any[]>;
    /** Checks if lite rendering mode is enabled. @keywords lite-check */
    isLite(): boolean;
    /** Checks if any item is focused. @keywords focus-check */
    isFocus(): boolean;
    /** Checks if search highlight matches exist. @keywords highlight-check */
    isHighlight(): boolean;
    /** Checks if search query meets minimum highlight length. @keywords highlight-active */
    isHighlightActive(): boolean;
    /** Total count of records in current view. @keywords length, count */
    getLength(): number;
    /** Total count of all mapped records. @keywords map-length, count */
    getLengthByMap(): number;
    /** Total count of selectable items. @keywords items-length, count */
    getLengthByItems(): number;
    /** Returns identifier of currently focused item. @keywords get-focus */
    getFocus(): ListSelectedItem | undefined;
    /** Returns record of currently focused item. @keywords get-focus-item */
    getFocusItem(): ListDataItem | undefined;
    /** Returns active highlight search string. @keywords get-highlight */
    getHighlight(): string | undefined;
    /** Returns minimum query length required to trigger highlight. @keywords highlight-length */
    getHighlightLengthStart(): number;
    /** Returns list of selected item identifiers. @keywords get-selected */
    getSelected(): ListSelectedList | undefined;
    /** Finds selected identifier offset by given step. @keywords selected-step */
    getSelectedByStep(step: number): ListSelectedItem | undefined;
    /** Finds next selected identifier. @keywords selected-next */
    getSelectedNext(): ListSelectedItem | undefined;
    /** Finds previous selected identifier. @keywords selected-prev */
    getSelectedPrev(): ListSelectedItem | undefined;
    /** Finds item offset by step count relative to given item. @keywords item-step */
    getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined;
    /** Finds next sequential item from given item. @keywords item-next */
    getItemNext(item: ListDataItem): ListDataItem | undefined;
    /** Finds previous sequential item from given item. @keywords item-prev */
    getItemPrev(item: ListDataItem): ListDataItem | undefined;
    /** Finds item offset by step count relative to given index. @keywords index-step */
    getIndexByStep(index: string, step: number): ListDataItem | undefined;
    /** Finds next sequential item after given index. @keywords index-next */
    getIndexNext(index: string): ListDataItem | undefined;
    /** Finds previous sequential item before given index. @keywords index-prev */
    getIndexPrev(index: string): ListDataItem | undefined;
    /** Retrieves item record and key by index identifier. @keywords item-by-index */
    getItemByIndex(index?: string): {
        key: number;
        item: ListDataItem;
    } | undefined;
    /** Retrieves item record by numeric key. @keywords item-by-key */
    getItemByKey(key: number): ListDataItem | undefined;
    /** Retrieves first child item under specified parent. @keywords first-child, parent */
    getFirstItemByParent(parent: string | undefined): ListDataItem | undefined;
    /** Retrieves last child item under specified parent. @keywords last-child, parent */
    getLastItemByParent(parent: string | undefined): ListDataItem | undefined;
    /** Creates sublist manager for group item. @keywords sublist, group */
    getSubList(item: ListDataItem): ListDataRef;
}