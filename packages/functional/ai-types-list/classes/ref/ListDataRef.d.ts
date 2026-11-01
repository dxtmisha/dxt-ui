// md5:4d4ecdb4bef56565d5fe057eafb2dc11
import type { RefOrNormal, RefType } from '../../types/refTypes';
import type { ListDataFull, ListDataItem, ListList, ListListInput, ListNames, ListSelectedItem, ListSelectedList } from '../../types/listTypes';
/**
 * Reactive list model for normalization, nested groups, selection, focus and search matching. It exposes computed top-level and flattened views without rendering UI or mutating the selected input.
 *
 * Реактивная модель списка: нормализация, вложенные группы, выбор, фокус и поиск. Предоставляет вычисляемые верхнеуровневые и плоские представления, не рисуя UI и не изменяя входное выделение.
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
    /** Cached sublists without inherited properties / Кэш подсписков без унаследованных свойств */
    protected subList: Record<string, ListDataRef | undefined>;
    /**
     * Initializes ListDataRef with the supplied configuration.
     *
     * Инициализирует ListDataRef с переданными настройками.
     * @param list Input list or record, optionally reactive. / Входной список либо словарь, может быть реактивным.
     * @param focus Focused index ref. / Ссылка на индекс фокуса.
     * @param highlight Search query ref. / Ссылка на поисковый запрос.
     * @param highlightLengthStart Minimum search-length ref; defaults to 2 when omitted. / Ссылка на минимальную длину поиска; при отсутствии 2.
     * @param filterMode Filter-mode ref copied into fullData. / Ссылка на режим фильтра, копируемый в fullData.
     * @param selected Ref with a single selected identifier or an array. / Ссылка на один выбранный идентификатор либо массив.
     * @param keyValue Value-field name ref; defaults to value. / Ссылка на имя поля значения; по умолчанию value.
     * @param keyLabel Label-field name ref; defaults to label. / Ссылка на имя поля метки; по умолчанию label.
     * @param lite Ref for the simplified-list threshold. / Ссылка на порог упрощённого списка.
     * @param min Selection minimum; defaults to 0. / Минимум выбора; по умолчанию 0.
     * @param max Selection maximum; defaults to 9_999_999. / Максимум выбора; по умолчанию 9_999_999.
     * @param parent Parent index, or undefined for the root level. / Индекс родителя либо undefined для корневого уровня.
     */
    constructor(list: RefOrNormal<ListListInput | undefined>, focus?: RefType<ListSelectedItem | undefined> | undefined, highlight?: RefType<string | undefined> | undefined, highlightLengthStart?: RefType<number | undefined> | undefined, filterMode?: RefType<boolean | undefined> | undefined, selected?: RefType<ListSelectedList | undefined> | undefined, keyValue?: RefType<string | undefined> | undefined, keyLabel?: RefType<string | undefined> | undefined, lite?: RefType<number | undefined> | undefined, min?: RefOrNormal<number | string | undefined>, max?: RefOrNormal<number | string | undefined>, parent?: string | undefined);
    /** Normalized entries at the current level. / Нормализованные записи текущего уровня. */
    readonly data: import("vue").ComputedRef<ListList>;
    /** Reduced entries only when the lite threshold is exceeded; otherwise the full normalized data. / Сокращённые записи при превышении порога lite; иначе нормализованные данные целиком. */
    readonly liteData: import("vue").ComputedRef<ListList>;
    /** Current-level entries enriched with focus, highlight, filterMode, selected and disabled. An explicit disabled value takes precedence. / Записи текущего уровня с focus, highlight, filterMode, selected и disabled. Явное disabled имеет приоритет. */
    readonly fullData: import("vue").ComputedRef<ListDataFull>;
    /** Flattened item/group/menu entries, retaining group headers. / Плоские записи item/group/menu с сохранением заголовков групп. */
    readonly map: import("vue").ComputedRef<ListList>;
    /** Leaf item entries from the flattened map. / Конечные item из плоской карты. */
    readonly mapItems: import("vue").ComputedRef<ListList>;
    /** Item/group/menu entries from the flattened map. / Записи item/group/menu из плоской карты. */
    readonly items: import("vue").ComputedRef<ListList>;
    /** First matching map position, or -1 for no match or a query below the threshold. Matches label, index or search. / Позиция первого совпадения в карте либо -1 при отсутствии совпадения или коротком запросе. Проверяет label, index и search. */
    readonly highlightFirstItem: import("vue").ComputedRef<number>;
    /** Whether at least one leaf matches the selected input. / Совпадает ли хотя бы один конечный элемент с входным выбором. */
    readonly isSelected: import("vue").ComputedRef<boolean>;
    /** True when a positive minimum is reached by current-group selections. / Истина при достижении положительного минимума выбранными элементами текущей группы. */
    readonly isSelectedMin: import("vue").ComputedRef<boolean>;
    /** True when a positive maximum is reached by current-group selections. A falsy maximum uses the default limit. / Истина при достижении положительного максимума выбранными элементами текущей группы. Ложное значение максимума использует лимит по умолчанию. */
    readonly isSelectedMax: import("vue").ComputedRef<boolean>;
    /** Selected leaves across the flattened map. / Выбранные конечные элементы всей плоской карты. */
    readonly selectedList: import("vue").ComputedRef<ListList>;
    /** Selected entries at the current level. / Выбранные записи текущего уровня. */
    readonly selectedListInGroup: import("vue").ComputedRef<ListList>;
    /** Labels of selected leaves. / Метки выбранных конечных элементов. */
    readonly selectedNames: import("vue").ComputedRef<ListNames>;
    /** Values of selected leaves, preserving zero and false. / Значения выбранных конечных элементов с сохранением нуля и false. */
    readonly selectedValues: import("vue").ComputedRef<any[]>;
    /**
     * True when the nonzero lite threshold is exceeded by the current-level length.
     *
     * Истина, если длина текущего уровня превышает ненулевой порог lite.
     * @returns Whether the described condition is satisfied. / Выполнено ли описанное условие.
     */
    isLite(): boolean;
    /**
     * Checks the focused index against the flattened map.
     *
     * Проверяет индекс фокуса в плоской карте.
     * @returns Whether the described condition is satisfied. / Выполнено ли описанное условие.
     */
    isFocus(): boolean;
    /**
     * Reports whether search found a map entry.
     *
     * Сообщает, найдено ли совпадение в карте.
     * @returns Whether the described condition is satisfied. / Выполнено ли описанное условие.
     */
    isHighlight(): boolean;
    /**
     * True when the query is below the minimum length or at least one match exists.
     *
     * Истина, если запрос короче порога либо найдено хотя бы одно совпадение.
     * @returns Whether the described condition is satisfied. / Выполнено ли описанное условие.
     */
    isHighlightActive(): boolean;
    /**
     * Returns the current-level item count.
     *
     * Возвращает количество записей текущего уровня.
     * @returns Current entry count or threshold. / Текущее количество записей либо порог.
     */
    getLength(): number;
    /**
     * Returns the flattened map count, including group and menu entries.
     *
     * Возвращает размер плоской карты, включая группы и меню.
     * @returns Current entry count or threshold. / Текущее количество записей либо порог.
     */
    getLengthByMap(): number;
    /**
     * Returns the item/group/menu count from the flattened map.
     *
     * Возвращает количество item/group/menu в плоской карте.
     * @returns Current entry count or threshold. / Текущее количество записей либо порог.
     */
    getLengthByItems(): number;
    /**
     * Returns the supplied focus value.
     *
     * Возвращает переданное значение фокуса.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getFocus(): ListSelectedItem | undefined;
    /**
     * Finds the focused entry at the current level only.
     *
     * Ищет запись в фокусе только на текущем уровне.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getFocusItem(): ListDataItem | undefined;
    /**
     * Returns the search text.
     *
     * Возвращает текст поиска.
     * @returns Requested string, or undefined when unavailable. / Запрошенная строка либо undefined при отсутствии.
     */
    getHighlight(): string | undefined;
    /**
     * Returns the search-length threshold, defaulting to 2.
     *
     * Возвращает минимальную длину поиска, по умолчанию 2.
     * @returns Current entry count or threshold. / Текущее количество записей либо порог.
     */
    getHighlightLengthStart(): number;
    /**
     * Returns the single selection or selection array supplied to the model.
     *
     * Возвращает переданное одиночное выделение либо массив выделений.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getSelected(): ListSelectedList | undefined;
    /**
     * Moves from the first selected leaf by the supplied step. Without a selected leaf, returns the first leaf index. An empty list returns `undefined`.
     *
     * Перемещается от первого выделенного конечного элемента на указанный шаг. Без выделенного элемента возвращает индекс первого. Для пустого списка возвращает `undefined`.
     * @param step Signed navigation step. / Шаг навигации со знаком.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getSelectedByStep(step: number): ListSelectedItem | undefined;
    /**
     * Returns the next selected-relative leaf index, with boundary wrapping.
     *
     * Возвращает следующий индекс конечного элемента относительно выбора с переходом через границу.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getSelectedNext(): ListSelectedItem | undefined;
    /**
     * Returns the previous selected-relative leaf index, with boundary wrapping.
     *
     * Возвращает предыдущий индекс конечного элемента относительно выбора с переходом через границу.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getSelectedPrev(): ListSelectedItem | undefined;
    /**
     * Moves in the leaf-only map. An out-of-range positive step returns the first leaf; a negative step returns the last. A zero step keeps a known item.
     *
     * Перемещается по карте конечных элементов. Положительный шаг за границу возвращает первый, отрицательный — последний элемент. Нулевой шаг сохраняет найденный элемент.
     * @param item Current list entry. / Текущая запись списка.
     * @param step Signed navigation step. / Шаг навигации со знаком.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined;
    /**
     * Returns the next leaf after an item, wrapping to the first.
     *
     * Возвращает следующий конечный элемент, с переходом к первому.
     * @param item Item or output array as specified by the signature. / Элемент либо выходной массив согласно сигнатуре.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getItemNext(item: ListDataItem): ListDataItem | undefined;
    /**
     * Returns the previous leaf before an item, wrapping to the last.
     *
     * Возвращает предыдущий конечный элемент, с переходом к последнему.
     * @param item Item or output array as specified by the signature. / Элемент либо выходной массив согласно сигнатуре.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getItemPrev(item: ListDataItem): ListDataItem | undefined;
    /**
     * Looks up an index in the map, then applies leaf navigation. An unknown index returns `undefined`.
     *
     * Находит индекс в карте, затем выполняет навигацию по конечным элементам. Неизвестный индекс возвращает `undefined`.
     * @param index Entry or modification index. / Индекс записи либо модификации.
     * @param step Signed navigation step. / Шаг навигации со знаком.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getIndexByStep(index: string, step: number): ListDataItem | undefined;
    /**
     * Resolves an index and returns its next leaf.
     *
     * Находит индекс и возвращает следующий конечный элемент.
     * @param index Entry or modification index. / Индекс записи либо модификации.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getIndexNext(index: string): ListDataItem | undefined;
    /**
     * Resolves an index and returns its previous leaf.
     *
     * Находит индекс и возвращает предыдущий конечный элемент.
     * @param index Entry or modification index. / Индекс записи либо модификации.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getIndexPrev(index: string): ListDataItem | undefined;
    /**
     * Looks up an entry in the flattened map and returns its map key and item.
     *
     * Ищет запись в плоской карте и возвращает ключ карты и элемент.
     * @param index Entry or modification index. / Индекс записи либо модификации.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getItemByIndex(index?: string): {
        key: number;
        item: ListDataItem;
    } | undefined;
    /**
     * Returns the entry at a flattened-map position, or undefined.
     *
     * Возвращает запись по позиции плоской карты либо undefined.
     * @param key Position in the flattened map. / Позиция в плоской карте.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getItemByKey(key: number): ListDataItem | undefined;
    /**
     * Returns the first item/group/menu entry with the supplied parent.
     *
     * Возвращает первую запись item/group/menu с указанным родителем.
     * @param parent Parent index, or undefined for the root level. / Индекс родителя либо undefined для корневого уровня.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getFirstItemByParent(parent: string | undefined): ListDataItem | undefined;
    /**
     * Returns the last item/group/menu entry with the supplied parent.
     *
     * Возвращает последнюю запись item/group/menu с указанным родителем.
     * @param parent Parent index, or undefined for the root level. / Индекс родителя либо undefined для корневого уровня.
     * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
     */
    getLastItemByParent(parent: string | undefined): ListDataItem | undefined;
    /**
     * Returns a cached child model sharing state refs and limits. Recreates it when the group’s source identity changes; the parent is the group index.
     *
     * Возвращает кэшированную дочернюю модель с общими ссылками состояния и лимитами. Пересоздаёт её при замене источника группы; родитель — индекс группы.
     * @param item Item or output array as specified by the signature. / Элемент либо выходной массив согласно сигнатуре.
     * @returns Cached child list model. / Кэшированная дочерняя модель списка.
     */
    getSubList(item: ListDataItem): ListDataRef;
    /**
     * Checks if the item is an item, group, or menu.
     *
     * Проверяет, является ли элемент элементом, группой или меню.
     * @param item List item data/ данные элемента списка
     * @returns calculated result / вычисленный результат
     */
    protected isItem(item: ListDataItem): boolean;
    /**
     * Checks if the item is in the specified parent.
     *
     * Проверяет, находится ли элемент в указанном родителе.
     * @param parent parent identifier to search for / идентификатор родителя для поиска
     * @param item List item data/ данные элемента списка
     * @returns calculated result / вычисленный результат
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
     * @returns calculated result / вычисленный результат
     */
    protected getIndex(index: string | number | undefined, value: any, key: string | number | undefined, label: string | number | undefined): string | number | undefined;
    /**
     * Creates an object of the record element.
     *
     * Создает объект элемента записи.
     * @param key the value of the key in the element/ значения ключа у элемента
     * @param item selected element/ выбранный элемент
     * @returns calculated result / вычисленный результат
     */
    protected initItem(key: string | number, item: any): ListDataItem;
}
