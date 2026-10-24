import { computed, isRef, watch } from 'vue'
import {
  forEach,
  getColumn,
  getExp,
  isNull,
  isObject,
  isObjectNotArray,
  isSelected
} from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'

import type { RefOrNormal, RefType } from '../../types/refTypes'
import type {
  ListDataFull,
  ListDataItem,
  ListList,
  ListListInput,
  ListListInputItem,
  ListNames,
  ListSelectedItem,
  ListSelectedList
} from '../../types/listTypes'

/**
 * Reactive list model for normalization, nested groups, selection, focus and search matching. It exposes computed top-level and flattened views without rendering UI or mutating the selected input.
 *
 * Реактивная модель списка: нормализация, вложенные группы, выбор, фокус и поиск. Предоставляет вычисляемые верхнеуровневые и плоские представления, не рисуя UI и не изменяя входное выделение.
 */
export class ListDataRef {
  /** Cached sublists without inherited properties / Кэш подсписков без унаследованных свойств */
  protected subList: Record<string, ListDataRef | undefined> = Object.create(null)

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
  constructor(
    protected readonly list: RefOrNormal<ListListInput | undefined>,
    protected readonly focus?: RefType<ListSelectedItem | undefined>,
    protected readonly highlight?: RefType<string | undefined>,
    protected readonly highlightLengthStart?: RefType<number | undefined>,
    protected readonly filterMode?: RefType<boolean | undefined>,
    protected readonly selected?: RefType<ListSelectedList | undefined>,
    protected readonly keyValue?: RefType<string | undefined>,
    protected readonly keyLabel?: RefType<string | undefined>,
    protected readonly lite?: RefType<number | undefined>,
    protected readonly min: RefOrNormal<number | string | undefined> = 0,
    protected readonly max: RefOrNormal<number | string | undefined> = 9_999_999,
    protected readonly parent?: string
  ) {
    if (isRef(list)) {
      watch(list, () => {
        this.subList = Object.create(null)
      })
    }
  }

  /** Normalized entries at the current level. / Нормализованные записи текущего уровня. */
  readonly data = computed<ListList>(
    () => forEach(
      getRef(this.list) as ListListInputItem || [],
      (item, key) => this.initItem(key, item)
    )
  )

  /** Reduced entries only when the lite threshold is exceeded; otherwise the full normalized data. / Сокращённые записи при превышении порога lite; иначе нормализованные данные целиком. */
  readonly liteData = computed<ListList>(() => {
    if (this.isLite()) {
      const lite: ListList = []

      for (const item of this.data.value) {
        const newItem = {
          parent: this.parent,
          index: item.index,
          type: item.type,
          label: item.label,
          description: item.description,
          value: item.value
        }

        if ('description' in item) {
          newItem.description = item.description
        }

        lite.push(newItem)
      }

      return lite
    }

    return this.data.value
  })

  /** Current-level entries enriched with focus, highlight, filterMode, selected and disabled. An explicit disabled value takes precedence. / Записи текущего уровня с focus, highlight, filterMode, selected и disabled. Явное disabled имеет приоритет. */
  readonly fullData = computed<ListDataFull>(() => {
    const focus = this.getFocus()
    const highlight = this.getHighlight()
    const selected = this.getSelected()

    return forEach(
      this.data.value,
      (item) => {
        const isSelectedItem = isSelected(item.index, selected)

        return {
          ...item,
          focus: focus === item.index,
          highlight,
          filterMode: this.filterMode?.value,
          selected: isSelectedItem,
          disabled: item.disabled
            ?? (
              !isSelectedItem
              && item.type === 'item'
              && this.isSelectedMax.value
            )
        }
      }
    )
  })

  /** Flattened item/group/menu entries, retaining group headers. / Плоские записи item/group/menu с сохранением заголовков групп. */
  readonly map = computed<ListList>(() => {
    const map: ListList = []

    this.data.value.forEach((item) => {
      switch (item.type) {
        case 'item':
          map.push(item)
          break
        case 'group':
        case 'menu':
          map.push(
            item,
            ...this.getSubList(item).map.value
          )
          break
      }
    })

    return map
  })

  /** Leaf item entries from the flattened map. / Конечные item из плоской карты. */
  readonly mapItems = computed<ListList>(() => {
    return this.map.value.filter(item => item.type === 'item')
  })

  /** Item/group/menu entries from the flattened map. / Записи item/group/menu из плоской карты. */
  readonly items = computed<ListList>(() => {
    return this.map.value.filter(
      item => item.type === 'item'
        || item.type === 'group'
        || item.type === 'menu'
    )
  })

  /** First matching map position, or -1 for no match or a query below the threshold. Matches label, index or search. / Позиция первого совпадения в карте либо -1 при отсутствии совпадения или коротком запросе. Проверяет label, index и search. */
  readonly highlightFirstItem = computed<number>(() => {
    const highlight = this.getHighlight()

    if (
      highlight
      && highlight.length >= this.getHighlightLengthStart()
    ) {
      const exp = getExp(highlight, 'i')

      if (exp) {
        return this.map.value.findIndex(
          item => item.label?.toString().match(exp)
            || item.index?.toString().match(exp)
            || item.search?.toString().match(exp)
        )
      }
    }

    return -1
  })

  /** Whether at least one leaf matches the selected input. / Совпадает ли хотя бы один конечный элемент с входным выбором. */
  readonly isSelected = computed<boolean>(() => {
    const selected = this.getSelected()

    return !isNull(selected)
      && this.mapItems.value.findIndex(item => isSelected(item.index, selected)) !== -1
  })

  /** True when a positive minimum is reached by current-group selections. / Истина при достижении положительного минимума выбранными элементами текущей группы. */
  readonly isSelectedMin = computed<boolean>(() => {
    const min = Number(getRef(this.min) || 0)

    if (min > 0) {
      return this.selectedListInGroup.value.length >= min
    }

    return false
  })

  /** True when a positive maximum is reached by current-group selections. A falsy maximum uses the default limit. / Истина при достижении положительного максимума выбранными элементами текущей группы. Ложное значение максимума использует лимит по умолчанию. */
  readonly isSelectedMax = computed<boolean>(() => {
    const max = Number(getRef(this.max) || 9_999_999)

    if (max > 0) {
      return this.selectedListInGroup.value.length >= max
    }

    return false
  })

  /** Selected leaves across the flattened map. / Выбранные конечные элементы всей плоской карты. */
  readonly selectedList = computed<ListList>(() => {
    const selected = this.getSelected()

    if (
      !isNull(selected)
      && this.isSelected.value
    ) {
      return this.mapItems.value.filter(item => isSelected(item.index, selected))
    }

    return []
  })

  /** Selected entries at the current level. / Выбранные записи текущего уровня. */
  readonly selectedListInGroup = computed<ListList>(() => {
    const selected = this.getSelected()

    if (
      !isNull(selected)
      && this.isSelected.value
    ) {
      return this.data.value.filter(item => isSelected(item.index, selected))
    }

    return []
  })

  /** Labels of selected leaves. / Метки выбранных конечных элементов. */
  readonly selectedNames = computed<ListNames>(() => {
    return getColumn(this.selectedList.value, 'label')
  })

  /** Values of selected leaves, preserving zero and false. / Значения выбранных конечных элементов с сохранением нуля и false. */
  readonly selectedValues = computed<any[]>(() => {
    return getColumn(this.selectedList.value, 'value')
  })

  /**
   * True when the nonzero lite threshold is exceeded by the current-level length.
   *
   * Истина, если длина текущего уровня превышает ненулевой порог lite.
   * @returns Whether the described condition is satisfied. / Выполнено ли описанное условие.
   */
  isLite(): boolean {
    return Boolean(this.lite?.value && this.data.value.length > this.lite.value)
  }

  /**
   * Checks the focused index against the flattened map.
   *
   * Проверяет индекс фокуса в плоской карте.
   * @returns Whether the described condition is satisfied. / Выполнено ли описанное условие.
   */
  isFocus(): boolean {
    const focus = this.getFocus()
    return !isNull(focus)
      && this.map.value.findIndex(item => item.index === focus) !== -1
  }

  /**
   * Reports whether search found a map entry.
   *
   * Сообщает, найдено ли совпадение в карте.
   * @returns Whether the described condition is satisfied. / Выполнено ли описанное условие.
   */
  isHighlight(): boolean {
    return this.highlightFirstItem.value !== -1
  }

  /**
   * True when the query is below the minimum length or at least one match exists.
   *
   * Истина, если запрос короче порога либо найдено хотя бы одно совпадение.
   * @returns Whether the described condition is satisfied. / Выполнено ли описанное условие.
   */
  isHighlightActive(): boolean {
    return (this.getHighlight()?.length ?? 0) < this.getHighlightLengthStart()
      || this.isHighlight()
  }

  /**
   * Returns the current-level item count.
   *
   * Возвращает количество записей текущего уровня.
   * @returns Current entry count or threshold. / Текущее количество записей либо порог.
   */
  getLength(): number {
    return this.data.value.length
  }

  /**
   * Returns the flattened map count, including group and menu entries.
   *
   * Возвращает размер плоской карты, включая группы и меню.
   * @returns Current entry count or threshold. / Текущее количество записей либо порог.
   */
  getLengthByMap(): number {
    return this.map.value.length
  }

  /**
   * Returns the item/group/menu count from the flattened map.
   *
   * Возвращает количество item/group/menu в плоской карте.
   * @returns Current entry count or threshold. / Текущее количество записей либо порог.
   */
  getLengthByItems(): number {
    return this.items.value.length
  }

  /**
   * Returns the supplied focus value.
   *
   * Возвращает переданное значение фокуса.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getFocus(): ListSelectedItem | undefined {
    return this.focus?.value
  }

  /**
   * Finds the focused entry at the current level only.
   *
   * Ищет запись в фокусе только на текущем уровне.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getFocusItem(): ListDataItem | undefined {
    return this.data.value.find(item => item.index === this.getFocus())
  }

  /**
   * Returns the search text.
   *
   * Возвращает текст поиска.
   * @returns Requested string, or undefined when unavailable. / Запрошенная строка либо undefined при отсутствии.
   */
  getHighlight(): string | undefined {
    return this.highlight?.value
  }

  /**
   * Returns the search-length threshold, defaulting to 2.
   *
   * Возвращает минимальную длину поиска, по умолчанию 2.
   * @returns Current entry count or threshold. / Текущее количество записей либо порог.
   */
  getHighlightLengthStart(): number {
    return this.highlightLengthStart?.value ?? 2
  }

  /**
   * Returns the single selection or selection array supplied to the model.
   *
   * Возвращает переданное одиночное выделение либо массив выделений.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getSelected(): ListSelectedList | undefined {
    return this.selected?.value
  }

  /**
   * Moves from the first selected leaf by the supplied step. Without a selected leaf, returns the first leaf index. An empty list returns `undefined`.
   *
   * Перемещается от первого выделенного конечного элемента на указанный шаг. Без выделенного элемента возвращает индекс первого. Для пустого списка возвращает `undefined`.
   * @param step Signed navigation step. / Шаг навигации со знаком.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getSelectedByStep(step: number): ListSelectedItem | undefined {
    const selected = this.selectedList.value?.[0]

    if (selected) {
      return this.getItemByStep(selected, step)?.index
    }

    return this.mapItems.value[0]?.index
  }

  /**
   * Returns the next selected-relative leaf index, with boundary wrapping.
   *
   * Возвращает следующий индекс конечного элемента относительно выбора с переходом через границу.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getSelectedNext(): ListSelectedItem | undefined {
    return this.getSelectedByStep(1)
  }

  /**
   * Returns the previous selected-relative leaf index, with boundary wrapping.
   *
   * Возвращает предыдущий индекс конечного элемента относительно выбора с переходом через границу.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getSelectedPrev(): ListSelectedItem | undefined {
    return this.getSelectedByStep(-1)
  }

  /**
   * Moves in the leaf-only map. An out-of-range positive step returns the first leaf; a negative step returns the last. A zero step keeps a known item.
   *
   * Перемещается по карте конечных элементов. Положительный шаг за границу возвращает первый, отрицательный — последний элемент. Нулевой шаг сохраняет найденный элемент.
   * @param item Current list entry. / Текущая запись списка.
   * @param step Signed navigation step. / Шаг навигации со знаком.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getItemByStep(item: ListDataItem, step: number): ListDataItem | undefined {
    const mapItems = this.mapItems.value
    const key = mapItems.findIndex(i => i.index === item.index)

    if (key !== -1) {
      const keyByStep = key + step

      if (keyByStep in mapItems) {
        return mapItems[keyByStep]
      }
    }

    if (step > 0) {
      return mapItems[0]
    }

    if (step < 0) {
      return mapItems[mapItems.length - 1]
    }

    return undefined
  }

  /**
   * Returns the next leaf after an item, wrapping to the first.
   *
   * Возвращает следующий конечный элемент, с переходом к первому.
   * @param item Item or output array as specified by the signature. / Элемент либо выходной массив согласно сигнатуре.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getItemNext(item: ListDataItem): ListDataItem | undefined {
    return this.getItemByStep(item, 1)
  }

  /**
   * Returns the previous leaf before an item, wrapping to the last.
   *
   * Возвращает предыдущий конечный элемент, с переходом к последнему.
   * @param item Item or output array as specified by the signature. / Элемент либо выходной массив согласно сигнатуре.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getItemPrev(item: ListDataItem): ListDataItem | undefined {
    return this.getItemByStep(item, -1)
  }

  /**
   * Looks up an index in the map, then applies leaf navigation. An unknown index returns `undefined`.
   *
   * Находит индекс в карте, затем выполняет навигацию по конечным элементам. Неизвестный индекс возвращает `undefined`.
   * @param index Entry or modification index. / Индекс записи либо модификации.
   * @param step Signed navigation step. / Шаг навигации со знаком.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getIndexByStep(index: string, step: number): ListDataItem | undefined {
    const item = this.getItemByIndex(index)

    if (item) {
      return this.getItemByStep(item.item, step)
    }

    return undefined
  }

  /**
   * Resolves an index and returns its next leaf.
   *
   * Находит индекс и возвращает следующий конечный элемент.
   * @param index Entry or modification index. / Индекс записи либо модификации.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getIndexNext(index: string): ListDataItem | undefined {
    return this.getIndexByStep(index, 1)
  }

  /**
   * Resolves an index and returns its previous leaf.
   *
   * Находит индекс и возвращает предыдущий конечный элемент.
   * @param index Entry or modification index. / Индекс записи либо модификации.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getIndexPrev(index: string): ListDataItem | undefined {
    return this.getIndexByStep(index, -1)
  }

  /**
   * Looks up an entry in the flattened map and returns its map key and item.
   *
   * Ищет запись в плоской карте и возвращает ключ карты и элемент.
   * @param index Entry or modification index. / Индекс записи либо модификации.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getItemByIndex(index?: string): { key: number, item: ListDataItem } | undefined {
    const item = this.map.value.findIndex(item => item.index === index)

    if (item !== -1) {
      return {
        key: item,
        item: this.map.value[item] as ListDataItem
      }
    }

    return undefined
  }

  /**
   * Returns the entry at a flattened-map position, or undefined.
   *
   * Возвращает запись по позиции плоской карты либо undefined.
   * @param key Position in the flattened map. / Позиция в плоской карте.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getItemByKey(key: number): ListDataItem | undefined {
    return this.map.value?.[key]
  }

  /**
   * Returns the first item/group/menu entry with the supplied parent.
   *
   * Возвращает первую запись item/group/menu с указанным родителем.
   * @param parent Parent index, or undefined for the root level. / Индекс родителя либо undefined для корневого уровня.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getFirstItemByParent(parent: string | undefined): ListDataItem | undefined {
    return this.map.value
      .find(item => this.isInParent(parent, item))
  }

  /**
   * Returns the last item/group/menu entry with the supplied parent.
   *
   * Возвращает последнюю запись item/group/menu с указанным родителем.
   * @param parent Parent index, or undefined for the root level. / Индекс родителя либо undefined для корневого уровня.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getLastItemByParent(parent: string | undefined): ListDataItem | undefined {
    return this.map.value
      .filter(item => this.isInParent(parent, item))
      .pop()
  }

  /**
   * Returns a cached child model sharing state refs and limits. Recreates it when the group’s source identity changes; the parent is the group index.
   *
   * Возвращает кэшированную дочернюю модель с общими ссылками состояния и лимитами. Пересоздаёт её при замене источника группы; родитель — индекс группы.
   * @param item Item or output array as specified by the signature. / Элемент либо выходной массив согласно сигнатуре.
   * @returns Cached child list model. / Кэшированная дочерняя модель списка.
   */
  getSubList(item: ListDataItem): ListDataRef {
    if (
      !(item.index in this.subList)
      || getRef(this.subList[item.index]?.list) !== getRef(item.value)
    ) {
      this.subList[item.index] = new ListDataRef(
        item.value,
        this.focus,
        this.highlight,
        this.highlightLengthStart,
        this.filterMode,
        this.selected,
        this.keyValue,
        this.keyLabel,
        this.lite,
        this.min,
        this.max,
        item.index
      )
    }

    return this.subList[item.index] as ListDataRef
  }

  /**
   * Checks if the item is an item, group, or menu.
   *
   * Проверяет, является ли элемент элементом, группой или меню.
   * @param item List item data/ данные элемента списка
   * @returns calculated result / вычисленный результат
   */
  protected isItem(item: ListDataItem): boolean {
    return item.type === 'item'
      || item.type === 'group'
      || item.type === 'menu'
  }

  /**
   * Checks if the item is in the specified parent.
   *
   * Проверяет, находится ли элемент в указанном родителе.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   * @param item List item data/ данные элемента списка
   * @returns calculated result / вычисленный результат
   */
  protected isInParent(parent: string | undefined, item: ListDataItem): boolean {
    return item.parent === parent && this.isItem(item)
  }

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
  protected getIndex(
    index: string | number | undefined,
    value: any,
    key: string | number | undefined,
    label: string | number | undefined
  ) {
    if (!isNull(index) && !isObject(index)) {
      return index
    }

    if (!isNull(value) && !isObject(value)) {
      return value
    }

    return key && label
  }

  /**
   * Creates an object of the record element.
   *
   * Создает объект элемента записи.
   * @param key the value of the key in the element/ значения ключа у элемента
   * @param item selected element/ выбранный элемент
   * @returns calculated result / вычисленный результат
   */
  protected initItem(
    key: string | number,
    item: any
  ): ListDataItem {
    if (isObjectNotArray(item)) {
      const value = item?.[this.keyValue?.value ?? 'value']
      const label = item?.[this.keyLabel?.value ?? 'label'] ?? value
      const index = this.getIndex(
        item?.index,
        value,
        key,
        label
      )

      return {
        ...item,
        parent: this.parent,
        index,
        type: item?.type ?? 'item',
        label,
        value
      }
    }

    return {
      parent: this.parent,
      index: key.toString(),
      type: 'item',
      label: item,
      value: key
    }
  }
}
