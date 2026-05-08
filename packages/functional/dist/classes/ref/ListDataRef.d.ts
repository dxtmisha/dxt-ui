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
    protected readonly filterMode?: RefType<boolean | undefined> | undefined;
    protected readonly selected?: RefType<ListSelectedList | undefined> | undefined;
    protected readonly keyValue?: RefType<string | undefined> | undefined;
    protected readonly keyLabel?: RefType<string | undefined> | undefined;
    protected readonly lite?: RefType<number | undefined> | undefined;
    protected readonly min: RefOrNormal<number | string | undefined>;
    protected readonly max: RefOrNormal<number | string | undefined>;
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
     * @param filterMode Filter mode / режим фильтрации
     * @param selected Selected items / выбранные элементы
     * @param keyValue Key for getting item value / ключ для получения значения элемента
     * @param keyLabel Key for getting item label / ключ для получения метки элемента
     * @param lite Threshold for lite mode / порог для облегченного режима
     * @param min Minimum number of selections / минимальное количество выделений
     * @param max Maximum number of selections / максимальное количество выделений
     * @param parent Parent identifier / идентификатор родителя
     */
    constructor(list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, filterMode?: RefType<boolean | undefined> | undefined, selected?: RefType<ListSelectedList | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined, min?: RefOrNormal<number | string | undefined>, max?: RefOrNormal<number | string | undefined>, parent?: string | undefined);
    /**
     * Returns a list for forming a list.
     *
     * Возвращает список для формирования списка.
     * @returns reactive list of items/ реактивный список элементов
     */
    readonly data: ComputedRef<ListList>;
    /**
     * Returns a simplified list for quick loading.
     *
     * Возвращает упрощенный список для быстрой загрузки.
     * @returns simplified reactive list/ упрощенный реактивный список
     */
    readonly liteData: ComputedRef<ListList>;
    /**
     * Returns a list of records with all additional data (focus, selection, disabled status).
     *
     * Возвращает список записей со всеми дополнительными данными (фокус, выделение, статус активности).
     * @returns full reactive list/ полный реактивный список
     */
    readonly fullData: ComputedRef<ListDataFull>;
    /**
     * Returns a flat map of all entries including sublists.
     *
     * Возвращает плоскую карту всех записей, включая подсписки.
     * @returns reactive flat list/ реактивный плоский список
     */
    readonly map: ComputedRef<ListList>;
    /**  Returns a list consisting only of items/ Возвращает список, состоящий только из элементов. */
    readonly mapItems: ComputedRef<ListList>;
    /**
     * Returns a list consisting only of values for selection (item, group, menu).
     *
     * Возвращает список, состоящий только из значений для выбора (item, group, menu).
     * @returns reactive list/ реактивный список
     */
    readonly items: ComputedRef<ListList>;
    /**
     * Finds the first element that meets the search conditions.
     *
     * Находит первый элемент, соответствующий условиям поиска.
     * @returns first found index/ первый найденный индекс
     */
    readonly highlightFirstItem: ComputedRef<number>;
    /**
     * Is there a selected item.
     *
     * Есть ли выбранный элемент.
     * @returns true if selection exists/ true, если есть выбор
     */
    readonly isSelected: ComputedRef<boolean>;
    /**
     * Is the minimum selection reached.
     *
     * Достигнуто ли минимальное выделение.
     * @returns true if minimum reached/ true, если минимум достигнут
     */
    readonly isSelectedMin: ComputedRef<boolean>;
    /**
     * Is the maximum selection reached.
     *
     * Достигнуто ли максимальное выделение.
     * @returns true if maximum reached/ true, если максимум достигнут
     */
    readonly isSelectedMax: ComputedRef<boolean>;
    /**
     * Returns a list of selected items on the map.
     *
     * Возвращает список выделенных элементов на карте.
     * @returns reactive list of selected items/ реактивный список выделенных элементов
     */
    readonly selectedList: ComputedRef<ListList>;
    /**
     * Returns a list of selected items in the current group.
     *
     * Возвращает список выделенных элементов в текущей группе.
     * @returns reactive list of selected items in group/ реактивный список выделенных элементов в группе
     */
    readonly selectedListInGroup: ComputedRef<ListList>;
    /**
     * Returns a list of selected labels on the map.
     *
     * Возвращает список названий выделенных элементов на карте.
     * @returns reactive list of labels/ реактивный список названий
     */
    readonly selectedNames: ComputedRef<ListNames>;
    /**
     * Returns a list of selected values on the map.
     *
     * Возвращает список значений выделенных элементов на карте.
     * @returns reactive list of values/ реактивный список значений
     */
    readonly selectedValues: ComputedRef<any[]>;
    /**
     * Checks whether it is necessary to first display a simplified version.
     *
     * Проверяет, надо ли сначала вывести упрощенную версию.
     * @returns true if lite mode is active/ true, если активен облегченный режим
     */
    isLite(): boolean;
    /**
     * Checks if an element is in focus.
     *
     * Проверяет, есть ли элемент в фокусе.
     * @returns true if focus exists/ true, если есть фокус
     */
    isFocus(): boolean;
    /**
     * Checks if there is a highlighted item (search results).
     *
     * Проверяет, есть ли найденный элемент (результаты поиска).
     * @returns true if highlight exists/ true, если есть совпадения
     */
    isHighlight(): boolean;
    /**
     * Checks if highlighting is active (minimum length reached).
     *
     * Проверяет, активно ли выделение (достигнута минимальная длина).
     * @returns true if active/ true, если активно
     */
    isHighlightActive(): boolean;
    /**
     * Returns the number of records in the current list.
     *
     * Возвращает количество записей в текущем списке.
     * @returns length/ количество
     */
    getLength(): number;
    /**
     * Returns the number of all available records in the map.
     *
     * Возвращает количество всех доступных записей в карте.
     * @returns length/ количество
     */
    getLengthByMap(): number;
    /**
     * Returns the number of all available records (items).
     *
     * Возвращает количество всех доступных записей (элементы).
     * @returns length/ количество
     */
    getLengthByItems(): number;
    /**
     * Returns the identifier in focus.
     *
     * Возвращает идентификатор в фокусе.
     * @returns focus identifier/ идентификатор в фокусе
     */
    getFocus(): ListSelectedItem | undefined;
    /**
     * Returns the highlight text.
     *
     * Возвращает текст для выделения.
     * @returns text/ текст
     */
    getHighlight(): string | undefined;
    /**
     * Returns the minimum length for highlight to start.
     *
     * Возвращает минимальную длину для начала выделения.
     * @returns length/ длина
     */
    getHighlightLengthStart(): number;
    /**
     * Returns the selected identifiers list.
     *
     * Возвращает список выбранных идентификаторов.
     * @returns list/ список
     */
    getSelected(): ListSelectedList | undefined;
    /**
     * Returns an item by moving a certain number of steps from the selected item.
     *
     * Возвращает элемент, перемещаясь на определенное количество шагов от выбранного элемента.
     * @param step number of steps/ количество шагов
     * @returns target item index/ индекс целевого элемента
     */
    getSelectedByStep(step: number): ListSelectedItem | undefined;
    /**
     * Returns the next item from the selected one.
     *
     * Возвращает следующий элемент от выбранного.
     * @returns next item index/ индекс следующего элемента
     */
    getSelectedNext(): ListSelectedItem | undefined;
    /**
     * Returns the previous item from the selected one.
     *
     * Возвращает предыдущий элемент от выбранного.
     * @returns previous item index/ индекс предыдущего элемента
     */
    getSelectedPrev(): ListSelectedItem | undefined;
    /**
     * Returns an item by moving a certain number of steps from the specified item.
     *
     * Возвращает элемент, перемещаясь на определенное количество шагов от указанного элемента.
     * @param item item/ элемент
     * @param step number of steps/ количество шагов
     * @returns target item/ целевой элемент
     */
    getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined;
    /**
     * Returns the next item from the specified one.
     *
     * Возвращает следующий элемент от указанного.
     * @param item item/ элемент
     * @returns next item/ следующий элемент
     */
    getItemNext(item: ListDataItem): ListDataItem | undefined;
    /**
     * Returns the previous item from the specified one.
     *
     * Возвращает предыдущий элемент от указанного.
     * @param item item/ элемент
     * @returns previous item/ предыдущий элемент
     */
    getItemPrev(item: ListDataItem): ListDataItem | undefined;
    /**
     * Returns an item by moving a certain number of steps from the specified index.
     *
     * Возвращает элемент, перемещаясь на определенное количество шагов от указанного индекса.
     * @param index item index/ индекс элемента
     * @param step number of steps/ количество шагов
     * @returns target item/ целевой элемент
     */
    getIndexByStep(index: string, step: number): ListDataItem | undefined;
    /**
     * Returns the next item from the specified index.
     *
     * Возвращает следующий элемент от указанного индекса.
     * @param index item index/ индекс элемента
     * @returns next item/ следующий элемент
     */
    getIndexNext(index: string): ListDataItem | undefined;
    /**
     * Returns the previous item from the specified index.
     *
     * Возвращает предыдущий элемент от указанного индекса.
     * @param index item index/ индекс элемента
     * @returns previous item/ предыдущий элемент
     */
    getIndexPrev(index: string): ListDataItem | undefined;
    /**
     * Returns an item by its index.
     *
     * Возвращает элемент по его индексу.
     * @param index item index/ индекс элемента
     * @returns found item details/ информация о найденном элементе
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
     * @returns found item/ найденный элемент
     */
    getItemByKey(key: number): ListDataItem | undefined;
    /**
     * Returns the first item with the specified parent.
     *
     * Возвращает первый элемент с указанным родителем.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     * @returns first item/ первый элемент
     */
    getFirstItemByParent(parent: string | undefined): ListDataItem | undefined;
    /**
     * Returns the last item with the specified parent.
     *
     * Возвращает последний элемент с указанным родителем.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     * @returns last item/ последний элемент
     */
    getLastItemByParent(parent: string | undefined): ListDataItem | undefined;
    /**
     * Returns a sublist object for a group item.
     *
     * Возвращает объект подсписка для группового элемента.
     * @param item List item data/ данные элемента списка
     * @returns sublist instance/ экземпляр подсписка
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
    protected isInParent(parent: string | undefined, item: ListDataItem): boolean;
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
