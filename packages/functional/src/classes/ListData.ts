import { computed } from 'vue'

import { forEach } from '../functions/forEach'
import { isObjectNotArray } from '../functions/isObjectNotArray'
import { isObject } from '../functions/isObject'
import { isSelected } from '../functions/isSelected'
import { getExp } from '../functions/getExp'
import { getColumn } from '../functions/getColumn'

import type { RefType } from '../types/refTypes'
import type {
  ListDataFull,
  ListDataItem,
  ListList,
  ListListInput,
  ListListInputItem,
  ListNames,
  ListSelectedItem
} from '../types/listTypes'

/**
 * Class for managing the data list.
 *
 * Класс для управления списком данных.
 */
export class ListData {
  constructor(
    protected readonly list: RefType<ListListInput | undefined>,
    protected readonly focus?: RefType<ListSelectedItem | undefined>,
    protected readonly highlight?: RefType<string | undefined>,
    protected readonly highlightLengthStart?: RefType<number | undefined>,
    protected readonly selected?: RefType<ListSelectedItem | undefined>,
    protected readonly keyValue?: RefType<string | undefined>,
    protected readonly keyLabel?: RefType<string | undefined>,
    protected readonly lite?: RefType<number | undefined>
  ) {
  }

  /**
   * Returns a list for forming a list.
   *
   * Возвращает список для формирования списка.
   */
  readonly data = computed<ListList>(
    () => forEach(
      this.list.value as ListListInputItem || [],
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
        lite.push({
          index: item.index,
          type: item.type,
          label: item.label,
          value: item.value
        })
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
        focus: focus === item.value,
        highlight,
        selected: isSelected(item.value, selected)
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
        case 'menu-group':
          map.push(
            item,
            ...new ListData(
              item.value,
              this.focus,
              this.highlight,
              this.highlightLengthStart,
              this.selected,
              this.keyValue,
              this.keyLabel,
              this.lite
            )
              .map.value
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
        || item.type === 'menu-group'
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
          || item.value?.toString().match(exp)
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
      && this.map.value.findIndex(item => isSelected(item.value, selected)) !== -1
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
      return this.map.value.filter(item => isSelected(item.value, selected))
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

    return Boolean(focus && this.map.value.findIndex(item => item.value === focus) !== -1)
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
  getSelected(): ListSelectedItem | undefined {
    return this.selected?.value
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
        index,
        type: item?.type ?? 'item',
        label,
        value
      }
    }

    return {
      index: key.toString(),
      type: 'item',
      label: item,
      value: key
    }
  }
}
