// md5:ef61584720c6439b3e6bbd6d86f9d969 true
/** Reactive list model for normalization, nested groups, selection, focus, and search matching. @keywords reactive, list, normalization, selection, focus, search */
export declare class ListDataRef {
    /** Initializes ListDataRef with configuration and reactive refs. @keywords constructor, init, list_config */
    constructor(list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, filterMode?: RefType<boolean | undefined> | undefined, selected?: RefType<ListSelectedList | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined, min?: RefOrNormal<number | string | undefined>, max?: RefOrNormal<number | string | undefined>, parent?: string | undefined);
    /** Normalized entries at the current list level. @keywords data, normalized, current_level */
    readonly data: import("vue").ComputedRef<ListList>;
    /** Reduced entries when exceeding the lite threshold; otherwise full normalized data. @keywords lite, threshold, performance */
    readonly liteData: import("vue").ComputedRef<ListList>;
    /** Current-level entries enriched with focus, highlight, filterMode, selection, and disabled state. @keywords full_data, enriched, state */
    readonly fullData: import("vue").ComputedRef<ListDataFull>;
    /** Flattened item, group, and menu entries retaining group headers. @keywords map, flattened, groups */
    readonly map: import("vue").ComputedRef<ListList>;
    /** Leaf item entries extracted from the flattened map. @keywords leaves, leaf_items, map */
    readonly mapItems: import("vue").ComputedRef<ListList>;
    /** Item, group, and menu entries from the flattened map. @keywords items, map, entries */
    readonly items: import("vue").ComputedRef<ListList>;
    /** Index of the first matching map entry, or -1 if none match or query is below threshold. @keywords highlight, search_match, first_item */
    readonly highlightFirstItem: import("vue").ComputedRef<number>;
    /** Checks whether at least one leaf entry matches the current selection. @keywords is_selected, selection_state */
    readonly isSelected: import("vue").ComputedRef<boolean>;
    /** Checks if current group selections meet or exceed the minimum threshold. @keywords min_selection, selection_limit */
    readonly isSelectedMin: import("vue").ComputedRef<boolean>;
    /** Checks if current group selections have reached the maximum threshold. @keywords max_selection, selection_limit */
    readonly isSelectedMax: import("vue").ComputedRef<boolean>;
    /** Selected leaf entries across the entire flattened map. @keywords selected_list, flattened, leaves */
    readonly selectedList: import("vue").ComputedRef<ListList>;
    /** Selected entries present at the current level. @keywords selected, group, current_level */
    readonly selectedListInGroup: import("vue").ComputedRef<ListList>;
    /** Labels of selected leaf entries. @keywords selected_names, labels */
    readonly selectedNames: import("vue").ComputedRef<ListNames>;
    /** Values of selected leaf entries, preserving falsy and zero values. @keywords selected_values, values */
    readonly selectedValues: import("vue").ComputedRef<any[]>;
    /** Checks whether current-level item count exceeds the nonzero lite threshold. @keywords is_lite, threshold */
    isLite(): boolean;
    /** Checks whether the focused index exists in the flattened map. @keywords is_focus, focus_state */
    isFocus(): boolean;
    /** Checks whether the search query matched any entry in the map. @keywords is_highlight, search_match */
    isHighlight(): boolean;
    /** Checks whether the query is below minimum length or has at least one match. @keywords is_highlight_active, search_status */
    isHighlightActive(): boolean;
    /** Returns the item count at the current level. @keywords get_length, count, current_level */
    getLength(): number;
    /** Returns the total entry count in the flattened map, including groups and menus. @keywords length_map, flattened_count */
    getLengthByMap(): number;
    /** Returns the count of item, group, and menu entries from the flattened map. @keywords length_items, items_count */
    getLengthByItems(): number;
    /** Returns the current focus value. @keywords get_focus, focus_value */
    getFocus(): ListSelectedItem | undefined;
    /** Finds the focused entry at the current level only. @keywords get_focus_item, current_level */
    getFocusItem(): ListDataItem | undefined;
    /** Returns the active search text. @keywords get_highlight, search_query */
    getHighlight(): string | undefined;
    /** Returns the minimum search length threshold (default 2). @keywords highlight_threshold, min_length */
    getHighlightLengthStart(): number;
    /** Returns the raw selection value or list provided to the model. @keywords get_selected, selection_ref */
    getSelected(): ListSelectedList | undefined;
    /** Navigates by a signed step relative to the first selected leaf index. @keywords get_selected_by_step, step_navigation */
    getSelectedByStep(step: number): ListSelectedItem | undefined;
    /** Returns the next leaf index relative to selection, with boundary wrapping. @keywords get_selected_next, next */
    getSelectedNext(): ListSelectedItem | undefined;
    /** Returns the previous leaf index relative to selection, with boundary wrapping. @keywords get_selected_prev, prev */
    getSelectedPrev(): ListSelectedItem | undefined;
    /** Navigates across leaf entries by a signed step with boundary wrapping. @keywords get_item_by_step, leaf_navigation */
    getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined;
    /** Returns the next leaf entry after the specified item, wrapping to the first. @keywords get_item_next, next_leaf */
    getItemNext(item: ListDataItem): ListDataItem | undefined;
    /** Returns the previous leaf entry before the specified item, wrapping to the last. @keywords get_item_prev, prev_leaf */
    getItemPrev(item: ListDataItem): ListDataItem | undefined;
    /** Resolves an index in the map and navigates leaf entries by a signed step. @keywords get_index_by_step, step_lookup */
    getIndexByStep(index: string, step: number): ListDataItem | undefined;
    /** Resolves an index and returns the subsequent leaf entry. @keywords get_index_next, next_by_index */
    getIndexNext(index: string): ListDataItem | undefined;
    /** Resolves an index and returns the preceding leaf entry. @keywords get_index_prev, prev_by_index */
    getIndexPrev(index: string): ListDataItem | undefined;
    /** Finds an entry in the flattened map by its index, returning key position and item. @keywords get_item_by_index, map_lookup */
    getItemByIndex(index?: string): {
        key: number;
        item: ListDataItem;
    } | undefined;
    /** Returns the entry at the specified flattened-map position. @keywords get_item_by_key, position_lookup */
    getItemByKey(key: number): ListDataItem | undefined;
    /** Returns the first entry matching the specified parent index. @keywords get_first_item_by_parent, parent_lookup */
    getFirstItemByParent(parent: string | undefined): ListDataItem | undefined;
    /** Returns the last entry matching the specified parent index. @keywords get_last_item_by_parent, parent_lookup */
    getLastItemByParent(parent: string | undefined): ListDataItem | undefined;
    /** Returns a cached child ListDataRef model for a group item. @keywords get_sub_list, child_model, nested_list */
    getSubList(item: ListDataItem): ListDataRef;
}