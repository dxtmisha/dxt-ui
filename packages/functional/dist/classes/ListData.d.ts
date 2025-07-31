import { RefType } from '../types/refTypes';
import { ListDataFull, ListDataItem, ListList, ListListInput, ListNames, ListSelectedItem } from '../types/listTypes';
import { ComputedRef } from 'vue';
/**
 * Class for managing the data list.
 *
 * Класс для управления списком данных.
 */
export declare class ListData {
    protected readonly list: RefType<ListListInput | undefined>;
    protected readonly focus?: RefType<ListSelectedItem | undefined> | undefined;
    protected readonly highlight?: RefType<string | undefined> | undefined;
    protected readonly highlightLengthStart?: RefType<number | undefined> | undefined;
    protected readonly selected?: RefType<ListSelectedItem | undefined> | undefined;
    protected readonly keyValue?: RefType<string | undefined> | undefined;
    protected readonly keyLabel?: RefType<string | undefined> | undefined;
    protected readonly lite?: RefType<number | undefined> | undefined;
    constructor(list: RefType<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, selected?: RefType<ListSelectedItem | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined);
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
    getSelected(): ListSelectedItem | undefined;
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
