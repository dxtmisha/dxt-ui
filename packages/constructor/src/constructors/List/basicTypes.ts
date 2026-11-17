import type { ComputedRef } from 'vue'
import type { ListDataItem, ListList, ListNames } from '@dxtmisha/functional'

/**
 * Interface for describing which components need to be connected for List work /
 * Интерфейс для описания, какие компоненты надо подключить для работы List
 */
export type ListComponentInclude = {
  /** List component configuration / Конфигурация компонента списка */
  list?: object
}

/**
 * Slot properties exposed by List-based containers /
 * Свойства слота, предоставляемые контейнерами на базе List
 */
export type ListSlotsInclude = {
  /** Whether at least one item is selected / Выбран ли хотя бы один элемент */
  isSelected: ComputedRef<boolean>
  /** List of selected elements / Список выбранных элементов */
  selectedList: ComputedRef<ListList>
  /** Names of selected elements / Названия выбранных элементов */
  selectedNames: ComputedRef<ListNames>
  /** Values of selected elements / Значения выбранных элементов */
  selectedValues: ComputedRef<ListDataItem['value'][]>
}
