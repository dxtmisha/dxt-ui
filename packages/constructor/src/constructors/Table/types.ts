import type { ConstrClass } from '@dxtmisha/functional'

import type { CaptionSlots } from '../../types/captionTypes'

import type { ScrollStickyComponentInclude } from '../ScrollSticky'
import type { TableRecordComponentInclude, TableRecordEmits, TableRecordItemSlots } from '../TableRecord'

export type TableComponents = TableRecordComponentInclude & ScrollStickyComponentInclude

/**
 * Type describing available events. /
 * Тип, описывающий доступные события.
 */
export type TableEmits = TableRecordEmits

/**
 * Type describing available properties. /
 * Тип, описывающий доступные свойства.
 */
export type TableExpose = {}

/**
 * Type describing available slots. /
 * Тип, описывающий доступные слоты.
 */
export type TableSlots<
  Item = any,
  Value = any
> = CaptionSlots
  & TableRecordItemSlots<Item, Value>
  & {
    /**
     * Slot for custom table header content /
     * Слот для пользовательского содержимого шапки таблицы
     */
    header?(props: {
      /** Column index names / Имена индексов колонок */
      columns: string[]
    }): any

    /**
     * Slot for custom table footer content /
     * Слот для пользовательского содержимого подвала таблицы
     */
    foot?(props: {
      /** Column index names / Имена индексов колонок */
      columns: string[]
    }): any

    /**
     * Slot for custom table items content /
     * Слот для пользовательского содержимого элементов таблицы
     */
    items?(props: {
      /** Column index names / Имена индексов колонок */
      columns: string[]
    }): any

    /**
     * Slot for custom table body content /
     * Слот для пользовательского содержимого тела таблицы
     */
    body?(props: any): any
  }

/**
 * Type describing subclasses. /
 * Тип, описывающий подклассы.
 */
export type TableClasses = {
  /** Main element class name / Основное имя класса элемента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  table: string
  colgroup: string
  col: string
  header: string
  foot: string
  items: string
  caption: string
  // :classes [!] System label / Системная метка
}
