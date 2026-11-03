// md5:4d4ecdb4bef56565d5fe057eafb2dc11 true
/** Reactive list model for normalization, nested groups, selection, focus, and search matching. @keywords list, model, selection, focus, search */
export declare class ListDataRef {
  /** Initializes ListDataRef with list input and reactive state options. @keywords constructor, init, list_data */
  constructor(list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, filterMode?: RefType<boolean | undefined> | undefined, selected?: RefType<ListSelectedList | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined, min?: RefOrNormal<number | string | undefined>, max?: RefOrNormal<number | string | undefined>, parent?: string | undefined);
  /** Normalized entries at the current level. @keywords data, current_level */
  readonly data: import("vue").ComputedRef<ListList>;
  /** Reduced entries when exceeding lite threshold; otherwise full normalized data. @keywords lite_data, threshold */
  readonly liteData: import("vue").ComputedRef<ListList>;
  /** Current-level entries enriched with focus, highlight, filterMode, selection, and disabled state. @keywords full_data, enriched */
  readonly fullData: import("vue").ComputedRef<ListDataFull>;
  /** Flattened entries retaining group headers. @keywords map, flattened */
  readonly map: import("vue").ComputedRef<ListList>;
  /** Flattened leaf item entries. @keywords map_items, leaves */
  readonly mapItems: import("vue").ComputedRef<ListList>;
  /** Flattened item, group, and menu entries. @keywords items, list_items */
  readonly items: import("vue").ComputedRef<ListList>;
  /** First matching map position, or -1 for no match or query below threshold. @keywords highlight, search_match */
  readonly highlightFirstItem: import("vue").ComputedRef<number>;
  /** Whether at least one leaf matches the selected input. @keywords is_selected, selection */
  readonly isSelected: import("vue").ComputedRef<boolean>;
  /** True when current-group selections reach minimum limit. @keywords min_selection */
  readonly isSelectedMin: import("vue").ComputedRef<boolean>;
  /** True when current-group selections reach maximum limit. @keywords max_selection */
  readonly isSelectedMax: import("vue").ComputedRef<boolean>;
  /** Selected leaves across the flattened map. @keywords selected_list, leaves */
  readonly selectedList: import("vue").ComputedRef<ListList>;
  /** Selected entries at the current level. @keywords selected_group */
  readonly selectedListInGroup: import("vue").ComputedRef<ListList>;
  /** Labels of selected leaves. @keywords selected_names, labels */
  readonly selectedNames: import("vue").ComputedRef<ListNames>;
  /** Values of selected leaves. @keywords selected_values */
  readonly selectedValues: import("vue").ComputedRef<any[]>;
  /** Checks if current-level length exceeds nonzero lite threshold. @keywords is_lite, threshold */
  isLite(): boolean;
  /** Checks whether focused index exists in flattened map. @keywords is_focus */
  isFocus(): boolean;
  /** Reports whether search query matched an entry. @keywords is_highlight, search_found */
  isHighlight(): boolean;
  /** True when search query is below threshold or has at least one match. @keywords is_highlight_active */
  isHighlightActive(): boolean;
  /** Returns current-level item count. @keywords length, count */
  getLength(): number;
  /** Returns flattened map count including group headers. @keywords length_map */
  getLengthByMap(): number;
  /** Returns item, group, and menu count from flattened map. @keywords length_items */
  getLengthByItems(): number;
  /** Returns active focus value. @keywords get_focus */
  getFocus(): ListSelectedItem | undefined;
  /** Finds focused entry at the current level. @keywords get_focus_item */
  getFocusItem(): ListDataItem | undefined;
  /** Returns active search query text. @keywords get_highlight, query */
  getHighlight(): string | undefined;
  /** Returns minimum search query length threshold. @keywords search_length, threshold */
  getHighlightLengthStart(): number;
  /** Returns raw selection value or list. @keywords get_selected */
  getSelected(): ListSelectedList | undefined;
  /** Navigates from first selected leaf by signed step. @keywords selected_step, navigate */
  getSelectedByStep(step: number): ListSelectedItem | undefined;
  /** Returns next selected leaf index with wrapping. @keywords selected_next */
  getSelectedNext(): ListSelectedItem | undefined;
  /** Returns previous selected leaf index with wrapping. @keywords selected_prev */
  getSelectedPrev(): ListSelectedItem | undefined;
  /** Navigates leaf map from specified item by signed step. @keywords item_step, navigate */
  getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined;
  /** Returns next leaf after specified item with boundary wrapping. @keywords item_next */
  getItemNext(item: ListDataItem): ListDataItem | undefined;
  /** Returns previous leaf before specified item with boundary wrapping. @keywords item_prev */
  getItemPrev(item: ListDataItem): ListDataItem | undefined;
  /** Resolves index and navigates leaf items by signed step. @keywords index_step, navigate */
  getIndexByStep(index: string, step: number): ListDataItem | undefined;
  /** Resolves index and returns next leaf item. @keywords index_next */
  getIndexNext(index: string): ListDataItem | undefined;
  /** Resolves index and returns previous leaf item. @keywords index_prev */
  getIndexPrev(index: string): ListDataItem | undefined;
  /** Resolves map key and item by index string. @keywords item_by_index, lookup */
  getItemByIndex(index?: string): {
    key: number;
    item: ListDataItem;
  } | undefined;
  /** Returns entry at flattened map position. @keywords item_by_key, lookup */
  getItemByKey(key: number): ListDataItem | undefined;
  /** Returns first entry matching parent identifier. @keywords first_item, parent */
  getFirstItemByParent(parent: string | undefined): ListDataItem | undefined;
  /** Returns last entry matching parent identifier. @keywords last_item, parent */
  getLastItemByParent(parent: string | undefined): ListDataItem | undefined;
  /** Returns cached sub-list model for a nested group entry. @keywords sub_list, child_model */
  getSubList(item: ListDataItem): ListDataRef;
}