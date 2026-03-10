import { computed, isRef, watch } from 'vue'
import {
  forEach,
  getColumn,
  getExp,
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
 * Class for managing the data list.
 *
 * Класс для управления списком данных.
 */
export class ListDataRef {
  protected subList: Record<any, ListDataRef> = {}

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
        this.subList = {}
      })
    }
  }

  /**
   * Returns a list for forming a list.
   *
   * Возвращает список для формирования списка.
   * @returns reactive list of items/ реактивный список элементов
   */
  readonly data = computed<ListList>(
    () => forEach(
      getRef(this.list) as ListListInputItem || [],
      (item, key) => this.initItem(key, item)
    )
  )

  /**
   * Returns a simplified list for quick loading.
   *
   * Возвращает упрощенный список для быстрой загрузки.
   * @returns simplified reactive list/ упрощенный реактивный список
   */
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

  /**
   * Returns a list of records with all additional data (focus, selection, disabled status).
   *
   * Возвращает список записей со всеми дополнительными данными (фокус, выделение, статус активности).
   * @returns full reactive list/ полный реактивный список
   */
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

  /**
   * Returns a flat map of all entries including sublists.
   *
   * Возвращает плоскую карту всех записей, включая подсписки.
   * @returns reactive flat list/ реактивный плоский список
   */
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

  /**  Returns a list consisting only of items/ Возвращает список, состоящий только из элементов. */
  readonly mapItems = computed<ListList>(() => {
    return this.map.value.filter(item => item.type === 'item')
  })

  /**
   * Returns a list consisting only of values for selection (item, group, menu).
   *
   * Возвращает список, состоящий только из значений для выбора (item, group, menu).
   * @returns reactive list/ реактивный список
   */
  readonly items = computed<ListList>(() => {
    return this.map.value.filter(
      item => item.type === 'item'
        || item.type === 'group'
        || item.type === 'menu'
    )
  })

  /**
   * Finds the first element that meets the search conditions.
   *
   * Находит первый элемент, соответствующий условиям поиска.
   * @returns first found index/ первый найденный индекс
   */
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

  /**
   * Is there a selected item.
   *
   * Есть ли выбранный элемент.
   * @returns true if selection exists/ true, если есть выбор
   */
  readonly isSelected = computed<boolean>(() => {
    const selected = this.getSelected()

    return Boolean(selected)
      && this.mapItems.value.findIndex(item => isSelected(item.index, selected)) !== -1
  })

  /**
   * Is the minimum selection reached.
   *
   * Достигнуто ли минимальное выделение.
   * @returns true if minimum reached/ true, если минимум достигнут
   */
  readonly isSelectedMin = computed<boolean>(() => {
    const min = Number(getRef(this.min) || 0)

    if (min > 0) {
      return this.selectedListInGroup.value.length >= min
    }

    return false
  })

  /**
   * Is the maximum selection reached.
   *
   * Достигнуто ли максимальное выделение.
   * @returns true if maximum reached/ true, если максимум достигнут
   */
  readonly isSelectedMax = computed<boolean>(() => {
    const max = Number(getRef(this.max) || 9_999_999)

    if (max > 0) {
      return this.selectedListInGroup.value.length >= max
    }

    return false
  })

  /**
   * Returns a list of selected items on the map.
   *
   * Возвращает список выделенных элементов на карте.
   * @returns reactive list of selected items/ реактивный список выделенных элементов
   */
  readonly selectedList = computed<ListList>(() => {
    const selected = this.getSelected()

    if (
      selected
      && this.isSelected.value
    ) {
      return this.mapItems.value.filter(item => isSelected(item.index, selected))
    }

    return []
  })

  /**
   * Returns a list of selected items in the current group.
   *
   * Возвращает список выделенных элементов в текущей группе.
   * @returns reactive list of selected items in group/ реактивный список выделенных элементов в группе
   */
  readonly selectedListInGroup = computed<ListList>(() => {
    const selected = this.getSelected()

    if (
      selected
      && this.isSelected.value
    ) {
      return this.data.value.filter(item => isSelected(item.index, selected))
    }

    return []
  })

  /**
   * Returns a list of selected labels on the map.
   *
   * Возвращает список названий выделенных элементов на карте.
   * @returns reactive list of labels/ реактивный список названий
   */
  readonly selectedNames = computed<ListNames>(() => {
    return getColumn(this.selectedList.value, 'label')
  })

  /**
   * Returns a list of selected values on the map.
   *
   * Возвращает список значений выделенных элементов на карте.
   * @returns reactive list of values/ реактивный список значений
   */
  readonly selectedValues = computed<any[]>(() => {
    return getColumn(this.selectedList.value, 'value')
  })

  /**
   * Checks whether it is necessary to first display a simplified version.
   *
   * Проверяет, надо ли сначала вывести упрощенную версию.
   * @returns true if lite mode is active/ true, если активен облегченный режим
   */
  isLite(): boolean {
    return Boolean(this.lite?.value && this.data.value.length > this.lite.value)
  }

  /**
   * Checks if an element is in focus.
   *
   * Проверяет, есть ли элемент в фокусе.
   * @returns true if focus exists/ true, если есть фокус
   */
  isFocus(): boolean {
    const focus = this.getFocus()
    return Boolean(focus && this.map.value.findIndex(item => item.index === focus) !== -1)
  }

  /**
   * Checks if there is a highlighted item (search results).
   *
   * Проверяет, есть ли найденный элемент (результаты поиска).
   * @returns true if highlight exists/ true, если есть совпадения
   */
  isHighlight(): boolean {
    return this.highlightFirstItem.value !== -1
  }

  /**
   * Checks if highlighting is active (minimum length reached).
   *
   * Проверяет, активно ли выделение (достигнута минимальная длина).
   * @returns true if active/ true, если активно
   */
  isHighlightActive(): boolean {
    return (this.getHighlight()?.length ?? 0) < this.getHighlightLengthStart()
      || this.isHighlight()
  }

  /**
   * Returns the number of records in the current list.
   *
   * Возвращает количество записей в текущем списке.
   * @returns length/ количество
   */
  getLength(): number {
    return this.data.value.length
  }

  /**
   * Returns the number of all available records in the map.
   *
   * Возвращает количество всех доступных записей в карте.
   * @returns length/ количество
   */
  getLengthByMap(): number {
    return this.map.value.length
  }

  /**
   * Returns the number of all available records (items).
   *
   * Возвращает количество всех доступных записей (элементы).
   * @returns length/ количество
   */
  getLengthByItems(): number {
    return this.items.value.length
  }

  /**
   * Returns the identifier in focus.
   *
   * Возвращает идентификатор в фокусе.
   * @returns focus identifier/ идентификатор в фокусе
   */
  getFocus(): ListSelectedItem | undefined {
    return this.focus?.value
  }

  /**
   * Returns the highlight text.
   *
   * Возвращает текст для выделения.
   * @returns text/ текст
   */
  getHighlight(): string | undefined {
    return this.highlight?.value
  }

  /**
   * Returns the minimum length for highlight to start.
   *
   * Возвращает минимальную длину для начала выделения.
   * @returns length/ длина
   */
  getHighlightLengthStart(): number {
    return this.highlightLengthStart?.value ?? 2
  }

  /**
   * Returns the selected identifiers list.
   *
   * Возвращает список выбранных идентификаторов.
   * @returns list/ список
   */
  getSelected(): ListSelectedList | undefined {
    return this.selected?.value
  }

  /**
   * Returns an item by moving a certain number of steps from the selected item.
   *
   * Возвращает элемент, перемещаясь на определенное количество шагов от выбранного элемента.
   * @param step number of steps/ количество шагов
   * @returns target item index/ индекс целевого элемента
   */
  getSelectedByStep(step: number): ListSelectedItem | undefined {
    const selected = this.selectedList.value?.[0]

    if (selected) {
      return this.getItemByStep(selected, step)?.index
    }

    return this.mapItems.value[0]?.index
  }

  /**
   * Returns the next item from the selected one.
   *
   * Возвращает следующий элемент от выбранного.
   * @returns next item index/ индекс следующего элемента
   */
  getSelectedNext(): ListSelectedItem | undefined {
    return this.getSelectedByStep(1)
  }

  /**
   * Returns the previous item from the selected one.
   *
   * Возвращает предыдущий элемент от выбранного.
   * @returns previous item index/ индекс предыдущего элемента
   */
  getSelectedPrev(): ListSelectedItem | undefined {
    return this.getSelectedByStep(-1)
  }

  /**
   * Returns an item by moving a certain number of steps from the specified item.
   *
   * Возвращает элемент, перемещаясь на определенное количество шагов от указанного элемента.
   * @param item item/ элемент
   * @param step number of steps/ количество шагов
   * @returns target item/ целевой элемент
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
   * Returns the next item from the specified one.
   *
   * Возвращает следующий элемент от указанного.
   * @param item item/ элемент
   * @returns next item/ следующий элемент
   */
  getItemNext(item: ListDataItem): ListDataItem | undefined {
    return this.getItemByStep(item, 1)
  }

  /**
   * Returns the previous item from the specified one.
   *
   * Возвращает предыдущий элемент от указанного.
   * @param item item/ элемент
   * @returns previous item/ предыдущий элемент
   */
  getItemPrev(item: ListDataItem): ListDataItem | undefined {
    return this.getItemByStep(item, -1)
  }

  /**
   * Returns an item by moving a certain number of steps from the specified index.
   *
   * Возвращает элемент, перемещаясь на определенное количество шагов от указанного индекса.
   * @param index item index/ индекс элемента
   * @param step number of steps/ количество шагов
   * @returns target item/ целевой элемент
   */
  getIndexByStep(index: string, step: number): ListDataItem | undefined {
    const item = this.getItemByIndex(index)

    if (item) {
      return this.getItemByStep(item.item, step)
    }

    return undefined
  }

  /**
   * Returns the next item from the specified index.
   *
   * Возвращает следующий элемент от указанного индекса.
   * @param index item index/ индекс элемента
   * @returns next item/ следующий элемент
   */
  getIndexNext(index: string): ListDataItem | undefined {
    return this.getIndexByStep(index, 1)
  }

  /**
   * Returns the previous item from the specified index.
   *
   * Возвращает предыдущий элемент от указанного индекса.
   * @param index item index/ индекс элемента
   * @returns previous item/ предыдущий элемент
   */
  getIndexPrev(index: string): ListDataItem | undefined {
    return this.getIndexByStep(index, -1)
  }

  /**
   * Returns an item by its index.
   *
   * Возвращает элемент по его индексу.
   * @param index item index/ индекс элемента
   * @returns found item details/ информация о найденном элементе
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
   * Returns an item by its key.
   *
   * Возвращает элемент по его ключу.
   * @param key item key/ ключ элемента
   * @returns found item/ найденный элемент
   */
  getItemByKey(key: number): ListDataItem | undefined {
    return this.map.value?.[key]
  }

  /**
   * Returns the first item with the specified parent.
   *
   * Возвращает первый элемент с указанным родителем.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   * @returns first item/ первый элемент
   */
  getFirstItemByParent(parent: string | undefined): ListDataItem | undefined {
    return this.map.value
      .find(item => this.isInParent(parent, item))
  }

  /**
   * Returns the last item with the specified parent.
   *
   * Возвращает последний элемент с указанным родителем.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   * @returns last item/ последний элемент
   */
  getLastItemByParent(parent: string | undefined): ListDataItem | undefined {
    return this.map.value
      .filter(item => this.isInParent(parent, item))
      .pop()
  }

  /**
   * Returns a sublist object for a group item.
   *
   * Возвращает объект подсписка для группового элемента.
   * @param item List item data/ данные элемента списка
   * @returns sublist instance/ экземпляр подсписка
   */
  getSubList(item: ListDataItem): ListDataRef {
    if (!(item.index in this.subList)) {
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
   */
  protected getIndex(
    index: string | number | undefined,
    value: any,
    key: string | number | undefined,
    label: string | number | undefined
  ) {
    if (index && !isObject(index)) {
      return index
    }

    if (value && !isObject(value)) {
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
