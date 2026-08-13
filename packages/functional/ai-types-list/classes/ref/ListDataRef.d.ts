// md5:6ada5b35970bb0d5a68cf461afb2990b true
import { ComputedRef } from 'vue';

/**
 * Class for managing the data list.
 * @keywords list data management collection items
 */
export declare class ListDataRef {
    /**
     * Creates an instance of ListData for managing list data.
     * @keywords list data constructor initialize
     */
    constructor(list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, filterMode?: RefType<boolean | undefined> | undefined, selected?: RefType<ListSelectedList | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined, min?: RefOrNormal<number | string | undefined>, max?: RefOrNormal<number | string | undefined>, parent?: string | undefined);
    /**
     * Returns a list for forming a list.
     * @keywords list items data reactive
     */
    readonly data: ComputedRef<ListList>;
    /**
     * Returns a simplified list for quick loading.
     * @keywords lite list fast items
     */
    readonly liteData: ComputedRef<ListList>;
    /**
     * Returns a list of records with all additional data.
     * @keywords full list data items state
     */
    readonly fullData: ComputedRef<ListDataFull>;
    /**
     * Returns a flat map of all entries including sublists.
     * @keywords map flat list items
     */
    readonly map: ComputedRef<ListList>;
    /**
     * Returns a list consisting only of items.
     * @keywords map items array
     */
    readonly mapItems: ComputedRef<ListList>;
    /**
     * Returns a list consisting only of values for selection.
     * @keywords items selection values group menu
     */
    readonly items: ComputedRef<ListList>;
    /**
     * Finds the first element that meets the search conditions.
     * @keywords highlight first item search index
     */
    readonly highlightFirstItem: ComputedRef<number>;
    /**
     * Is there a selected item.
     * @keywords is selected boolean state
     */
    readonly isSelected: ComputedRef<boolean>;
    /**
     * Is the minimum selection reached.
     * @keywords is selected min threshold
     */
    readonly isSelectedMin: ComputedRef<boolean>;
    /**
     * Is the maximum selection reached.
     * @keywords is selected max threshold
     */
    readonly isSelectedMax: ComputedRef<boolean>;
    /**
     * Returns a list of selected items on the map.
     * @keywords selected list items
     */
    readonly selectedList: ComputedRef<ListList>;
    /**
     * Returns a list of selected items in the current group.
     * @keywords selected list group items
     */
    readonly selectedListInGroup: ComputedRef<ListList>;
    /**
     * Returns a list of selected labels on the map.
     * @keywords selected names labels list
     */
    readonly selectedNames: ComputedRef<ListNames>;
    /**
     * Returns a list of selected values on the map.
     * @keywords selected values list
     */
    readonly selectedValues: ComputedRef<any[]>;
    /**
     * Checks whether it is necessary to first display a simplified version.
     * @keywords is lite mode check
     */
    isLite(): boolean;
    /**
     * Checks if an element is in focus.
     * @keywords is focus check
     */
    isFocus(): boolean;
    /**
     * Checks if there is a highlighted item (search results).
     * @keywords is highlight check search
     */
    isHighlight(): boolean;
    /**
     * Checks if highlighting is active (minimum length reached).
     * @keywords is highlight active check
     */
    isHighlightActive(): boolean;
    /**
     * Returns the number of records in the current list.
     * @keywords get length count list
     */
    getLength(): number;
    /**
     * Returns the number of all available records in the map.
     * @keywords get length map count
     */
    getLengthByMap(): number;
    /**
     * Returns the number of all available records (items).
     * @keywords get length items count
     */
    getLengthByItems(): number;
    /**
     * Returns the identifier in focus.
     * @keywords get focus identifier
     */
    getFocus(): ListSelectedItem | undefined;
    /**
     * Returns the item in focus.
     * @keywords get focus item data
     */
    getFocusItem(): ListDataItem | undefined;
    /**
     * Returns the highlight text.
     * @keywords get highlight search text
     */
    getHighlight(): string | undefined;
    /**
     * Returns the minimum length for highlight to start.
     * @keywords get highlight length start
     */
    getHighlightLengthStart(): number;
    /**
     * Returns the selected identifiers list.
     * @keywords get selected list
     */
    getSelected(): ListSelectedList | undefined;
    /**
     * Returns an item by moving a certain number of steps from the selected item.
     * @keywords get selected by step navigation
     */
    getSelectedByStep(step: number): ListSelectedItem | undefined;
    /**
     * Returns the next item from the selected one.
     * @keywords get selected next item
     */
    getSelectedNext(): ListSelectedItem | undefined;
    /**
     * Returns the previous item from the selected one.
     * @keywords get selected prev item
     */
    getSelectedPrev(): ListSelectedItem | undefined;
    /**
     * Returns an item by moving a certain number of steps from the specified item.
     * @keywords get item by step navigation
     */
    getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined;
    /**
     * Returns the next item from the specified one.
     * @keywords get item next
     */
    getItemNext(item: ListDataItem): ListDataItem | undefined;
    /**
     * Returns the previous item from the specified one.
     * @keywords get item prev
     */
    getItemPrev(item: ListDataItem): ListDataItem | undefined;
    /**
     * Returns an item by moving a certain number of steps from the specified index.
     * @keywords get index by step navigation
     */
    getIndexByStep(index: string, step: number): ListDataItem | undefined;
    /**
     * Returns the next item from the specified index.
     * @keywords get index next
     */
    getIndexNext(index: string): ListDataItem | undefined;
    /**
     * Returns the previous item from the specified index.
     * @keywords get index prev
     */
    getIndexPrev(index: string): ListDataItem | undefined;
    /**
     * Returns an item by its index.
     * @keywords get item by index
     */
    getItemByIndex(index?: string): {
        key: number;
        item: ListDataItem;
    } | undefined;
    /**
     * Returns an item by its key.
     * @keywords get item by key number
     */
    getItemByKey(key: number): ListDataItem | undefined;
    /**
     * Returns the first item with the specified parent.
     * @keywords get first item by parent
     */
    getFirstItemByParent(parent: string | undefined): ListDataItem | undefined;
    /**
     * Returns the last item with the specified parent.
     * @keywords get last item by parent
     */
    getLastItemByParent(parent: string | undefined): ListDataItem | undefined;
    /**
     * Returns a sublist object for a group item.
     * @keywords get sub list group item
     */
    getSubList(item: ListDataItem): ListDataRef;
}