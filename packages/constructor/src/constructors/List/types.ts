import type { ConstrClass, ListList, ListNames } from '@dxtmisha/functional'
import type { EventClickEmits } from '../../types/eventClickTypes'

import type { ListItemComponentInclude } from '../ListItem'
import type { ListGroupComponentInclude } from '../ListGroup'
import type { ListMenuComponentInclude } from '../ListMenu'
import type { InputComponentInclude } from '../Input'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type ListComponents
  = ListItemComponentInclude
    & ListGroupComponentInclude
    & ListMenuComponentInclude
    & InputComponentInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type ListEmits
  = EventClickEmits
    & {
    /** Event for closing the list/ Событие закрытия списка */
      close: []
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface ListExpose {
  /** Whether at least one item is selected/ Выбран ли хотя бы один элемент */
  isSelected(): boolean
  /** List of selected elements/ Список выбранных элементов */
  getSelectedList(): ListList
  /** Names of selected elements/ Названия выбранных элементов */
  getSelectedNames(): ListNames
  /** Values of selected elements/ Значения выбранных элементов */
  getSelectedValues(): any[]
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export type ListSlots = Record<string, (props: any) => any>

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type ListClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  space: string
  line: string
  subtitle: string
  html: string
  management: string
  group: string
  menu: string
  menuGroup: string
  filterInput: string
  none: string
  // :classes [!] System label / Системная метка
}
