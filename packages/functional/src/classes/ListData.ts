import { computed, isRef, watch } from 'vue'

import { forEach } from '../functions/forEach'
import { getRef } from '../functions/ref/getRef'
import { isObjectNotArray } from '../functions/isObjectNotArray'
import { isObject } from '../functions/isObject'
import { isSelected } from '../functions/isSelected'
import { getExp } from '../functions/getExp'
import { getColumn } from '../functions/getColumn'

import type { RefOrNormal, RefType } from '../types/refTypes'
import type {
  ListDataFull,
  ListDataItem,
  ListList,
  ListListInput,
  ListListInputItem,
  ListNames,
  ListSelectedItem,
  ListSelectedList
} from '../types/listTypes'

/**
 * Class for managing the data list.
 *
 * Класс для управления списком данных.
 */
export class ListData {
  protected subList: Record<any, ListData> = {}

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
  constructor(
    protected readonly list: RefOrNormal<ListListInput | undefined>,
    protected readonly focus?: RefType<ListSelectedItem | undefined>,
    protected readonly highlight?: RefType<string | undefined>,
    protected readonly highlightLengthStart?: RefType<number | undefined>,
    protected readonly selected?: RefType<ListSelectedList | undefined>,
    protected readonly keyValue?: RefType<string | undefined>,
    protected readonly keyLabel?: RefType<string | undefined>,
    protected readonly lite?: RefType<number | undefined>,
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
   * Returns a list of records with all additional data.
   *
   * Возвращает список записей со всеми дополнительными данными.
   */
  readonly fullData = computed<ListDataFull>(() => {
    const focus = this.getFocus()
    const highlight = this.getHighlight()
    const selected = this.getSelected()

    return forEach(
      this.data.value,
      item => ({
        ...item,
        focus: focus === item.index,
        highlight,
        selected: isSelected(item.index, selected)
      })
    )
  })

  /**
   * Returns a map of all entries.
   *
   * Возвращает карту всех записей.
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

  /**
   * Returns a list consisting only of values for selection.
   *
   * Возвращает список, состоящий только из значений для выбора.
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
   */
  readonly highlightFirstItem = computed<number>(() => {
    const highlight = this.getHighlight()
    const exp = highlight
      && highlight.length >= this.getHighlightLengthStart()
      && getExp(highlight, 'i')

    if (exp) {
      return this.map.value.findIndex(
        item => item.label?.toString().match(exp)
          || item.index?.toString().match(exp)
          || item.search?.toString().match(exp)
      )
    }

    return -1
  })

  /**
   * Is there a selected item.
   *
   * Есть ли выбранный элемент.
   */
  readonly isSelected = computed<boolean>(() => {
    const selected = this.getSelected()

    return Boolean(selected)
      && this.map.value.findIndex(item => isSelected(item.index, selected)) !== -1
  })

  /**
   * Returns a list of selected items on the map.
   *
   * Возвращает список выделенных элементов на карте.
   */
  readonly selectedList = computed<ListList>(() => {
    const selected = this.getSelected()

    if (
      selected
      && this.isSelected.value
    ) {
      return this.map.value.filter(item => isSelected(item.index, selected))
    }

    return []
  })

  /**
   * Returns a list of selected items on the map.
   *
   * Возвращает список выделенных элементов на карте.
   */
  readonly selectedNames = computed<ListNames>(() => {
    return getColumn(this.selectedList.value, 'label')
  })

  /**
   * Returns a list of selected item values on the map.
   *
   * Возвращает список значений выделенных элементов на карте.
   */
  readonly selectedValues = computed<any[]>(() => {
    return getColumn(this.selectedList.value, 'value')
  })

  /**
   * Checks whether it is necessary to first display a simplified version.
   *
   * Проверяет, надо ли сначала вывести упрощенную версию.
   */
  isLite(): boolean {
    return Boolean(this.lite?.value && this.data.value.length > this.lite.value)
  }

  /**
   * Checks if an element is in focus.
   *
   * Проверяет, есть ли элемент в фокусе.
   */
  isFocus(): boolean {
    const focus = this.getFocus()
    return Boolean(focus && this.map.value.findIndex(item => item.index === focus) !== -1)
  }

  /**
   * Checks if there is a selected item.
   *
   * Проверяет, есть ли выделенный элемент.
   */
  isHighlight(): boolean {
    return this.highlightFirstItem.value !== -1
  }

  /**
   * Returns the number of records.
   *
   * Возвращает количество записей.
   */
  getLength(): number {
    return this.data.value.length
  }

  /**
   * Returns the number of all available records.
   *
   * Возвращает количество всех доступных записей.
   */
  getLengthByMap(): number {
    return this.map.value.length
  }

  /**
   * Returns the number of all available records.
   *
   * Возвращает количество всех доступных записей.
   */
  getLengthByItems(): number {
    return this.items.value.length
  }

  /**
   * Returns the values in focus.
   *
   * Возвращает значения в фокусе.
   */
  getFocus(): ListSelectedItem | undefined {
    return this.focus?.value
  }

  /**
   * Returns the selected value.
   *
   * Возвращает выделенного значение.
   */
  getHighlight(): string | undefined {
    return this.highlight?.value
  }

  /**
   * Returns the minimum length for highlight to start.
   *
   * Возвращает минимальную длину для начала выделения.
   */
  getHighlightLengthStart(): number {
    return this.highlightLengthStart?.value ?? 2
  }

  /**
   * Returns the selected value.
   *
   * Возвращает выбранное значение.
   */
  getSelected(): ListSelectedList | undefined {
    return this.selected?.value
  }

  /**
   * Returns an item by its index.
   *
   * Возвращает элемент по его индексу.
   * @param index item index/ индекс элемента
   */
  getItemByIndex(index?: string): { key: number, item: ListDataItem } | undefined {
    const item = this.map.value.findIndex(item => item.index === index)

    if (item !== -1) {
      return {
        key: item,
        item: this.map.value[item]
      }
    }

    return undefined
  }

  /**
   * Returns an item by its key.
   *
   * Возвращает элемент по его ключу.
   * @param key item key/ ключ элемента
   */
  getItemByKey(key: number): ListDataItem | undefined {
    return this.map.value?.[key]
  }

  /**
   * Returns the first item with the specified parent.
   *
   * Возвращает первый элемент с указанным родителем.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   */
  getFirstItemByParent(parent: string): ListDataItem | undefined {
    return this.map.value
      .find(item => this.isInParent(parent, item))
  }

  /**
   * Returns the last item with the specified parent.
   *
   * Возвращает последний элемент с указанным родителем.
   * @param parent parent identifier to search for / идентификатор родителя для поиска
   */
  getLastItemByParent(parent: string): ListDataItem | undefined {
    return this.map.value
      .filter(item => this.isInParent(parent, item))
      .pop()
  }

  /**
   * Returns a sublist object for a group item.
   *
   * Возвращает объект подсписка для группового элемента.
   * @param item List item data/ данные элемента списка
   */
  getSubList(item: ListDataItem): ListData {
    if (!(item.index in this.subList)) {
      this.subList[item.index] = new ListData(
        item.value,
        this.focus,
        this.highlight,
        this.highlightLengthStart,
        this.selected,
        this.keyValue,
        this.keyLabel,
        this.lite,
        item.index
      )
    }

    return this.subList[item.index]
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

  protected isInParent(parent: string, item: ListDataItem): boolean {
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
