import { RefOrNormal, RefType } from '../../types/refTypes';
import { ListDataFull, ListDataItem, ListList, ListListInput, ListNames, ListSelectedItem, ListSelectedList } from '../../types/listTypes';
import { ComputedRef } from 'vue';
/**
 * Class for managing the data list.
 *
 * Класс для управления списком данных.
 */
export declare class ListDataRef {
    protected readonly list: RefOrNormal<ListListInput | undefined>;
    protected readonly focus?: RefType<ListSelectedItem | undefined> | undefined;
    protected readonly highlight?: RefType<string | undefined> | undefined;
    protected readonly highlightLengthStart?: RefType<number | undefined> | undefined;
    protected readonly selected?: RefType<ListSelectedList | undefined> | undefined;
    protected readonly keyValue?: RefType<string | undefined> | undefined;
    protected readonly keyLabel?: RefType<string | undefined> | undefined;
    protected readonly lite?: RefType<number | undefined> | undefined;
    protected readonly parent?: string | undefined;
    protected subList: Record<any, ListDataRef>;
    /**
     * Creates an instance of ListData for managing list data.
     *
     * Создает экземпляр ListData для управления данными списка.
     * @param list List data / данные списка
     * @param focus Focused item / элемент в фокусе
     * @param highlight Search text for highlighting / текст поиска для выделения
     * @param highlightLengthStart Minimum length to start highlighting / минимальная длина для начала выделения
     * @param selected Selected items / выбранные элементы
     * @param keyValue Key for getting item value / ключ для получения значения элемента
     * @param keyLabel Key for getting item label / ключ для получения метки элемента
     * @param lite Threshold for lite mode / порог для облегченного режима
     * @param parent Parent identifier / идентификатор родителя
     */
    constructor(list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, selected?: RefType<ListSelectedList | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined, parent?: string | undefined);
    /**
     * Returns a list for forming a list.
     *
     * Возвращает список для формирования списка.
     */
    readonly data: ComputedRef<ListList>;
    /**
     * Returns a simplified list for quick loading.
     *
     * Возвращает упрощенный список для быстрой загрузки.
     */
    readonly liteData: ComputedRef<ListList>;
    /**
     * Returns a list of records with all additional data.
     *
     * Возвращает список записей со всеми дополнительными данными.
     */
    readonly fullData: ComputedRef<ListDataFull>;
    /**
     * Returns a map of all entries.
     *
     * Возвращает карту всех записей.
     */
    readonly map: ComputedRef<ListList>;
    /**  Returns a list consisting only of items/ Возвращает список, состоящий только из элементов. */
    readonly mapItems: ComputedRef<ListList>;
    /**
     * Returns a list consisting only of values for selection.
     *
     * Возвращает список, состоящий только из значений для выбора.
     */
    readonly items: ComputedRef<ListList>;
    /**
     * Finds the first element that meets the search conditions.
     *
     * Находит первый элемент, соответствующий условиям поиска.
     */
    readonly highlightFirstItem: ComputedRef<number>;
    /**
     * Is there a selected item.
     *
     * Есть ли выбранный элемент.
     */
    readonly isSelected: ComputedRef<boolean>;
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    readonly selectedList: ComputedRef<ListList>;
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     */
    readonly selectedNames: ComputedRef<ListNames>;
    /**
     * Returns a list of selected item values on the map.
     *
     * Возвращает список значений выделенных элементов на карте.
     */
    readonly selectedValues: ComputedRef<any[]>;
    /**
     * Checks whether it is necessary to first display a simplified version.
     *
     * Проверяет, надо ли сначала вывести упрощенную версию.
     */
    isLite(): boolean;
    /**
     * Checks if an element is in focus.
     *
     * Проверяет, есть ли элемент в фокусе.
     */
    isFocus(): boolean;
    /**
     * Checks if there is a selected item.
     *
     * Проверяет, есть ли выделенный элемент.
     */
    isHighlight(): boolean;
    /**
     * Returns the number of records.
     *
     * Возвращает количество записей.
     */
    getLength(): number;
    /**
     * Returns the number of all available records.
     *
     * Возвращает количество всех доступных записей.
     */
    getLengthByMap(): number;
    /**
     * Returns the number of all available records.
     *
     * Возвращает количество всех доступных записей.
     */
    getLengthByItems(): number;
    /**
     * Returns the values in focus.
     *
     * Возвращает значения в фокусе.
     */
    getFocus(): ListSelectedItem | undefined;
    /**
     * Returns the selected value.
     *
     * Возвращает выделенного значение.
     */
    getHighlight(): string | undefined;
    /**
     * Returns the minimum length for highlight to start.
     *
     * Возвращает минимальную длину для начала выделения.
     */
    getHighlightLengthStart(): number;
    /**
     * Returns the selected value.
     *
     * Возвращает выбранное значение.
     */
    getSelected(): ListSelectedList | undefined;
    /**
     * Returns an item by its index.
     *
     * Возвращает элемент по его индексу.
     * @param index item index/ индекс элемента
     */
    getItemByIndex(index?: string): {
        key: number;
        item: ListDataItem;
    } | undefined;
    /**
     * Returns an item by its key.
     *
     * Возвращает элемент по его ключу.
     * @param key item key/ ключ элемента
     */
    getItemByKey(key: number): ListDataItem | undefined;
    /**
     * Returns the first item with the specified parent.
     *
     * Возвращает первый элемент с указанным родителем.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     */
    getFirstItemByParent(parent: string): ListDataItem | undefined;
    /**
     * Returns the last item with the specified parent.
     *
     * Возвращает последний элемент с указанным родителем.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     */
    getLastItemByParent(parent: string): ListDataItem | undefined;
    /**
     * Returns a sublist object for a group item.
     *
     * Возвращает объект подсписка для группового элемента.
     * @param item List item data/ данные элемента списка
     */
    getSubList(item: ListDataItem): ListDataRef;
    /**
     * Checks if the item is an item, group, or menu.
     *
     * Проверяет, является ли элемент элементом, группой или меню.
     * @param item List item data/ данные элемента списка
     */
    protected isItem(item: ListDataItem): boolean;
    /**
     * Checks if the item is in the specified parent.
     *
     * Проверяет, находится ли элемент в указанном родителе.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     * @param item List item data/ данные элемента списка
     */
    protected isInParent(parent: string, item: ListDataItem): boolean;
    /**
     * Returns the index for the list item.
     *
     * Возвращает индекс для элемента списка.
     * @param index current index / текущий индекс
     * @param value item value / значение элемента
     * @param key item key / ключ элемента
     * @param label item label / метка элемента
     */
    protected getIndex(index: string | number | undefined, value: any, key: string | number | undefined, label: string | number | undefined): string | number | undefined;
    /**
     * Creates an object of the record element.
     *
     * Создает объект элемента записи.
     * @param key the value of the key in the element/ значения ключа у элемента
     * @param item selected element/ выбранный элемент
     */
    protected initItem(key: string | number, item: any): ListDataItem;
}
