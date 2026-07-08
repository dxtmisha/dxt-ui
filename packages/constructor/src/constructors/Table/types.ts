import type { ConstrClass } from '@dxtmisha/functional'
import type { ScrollStickyComponentInclude } from '../ScrollSticky'
import type { TableRecordComponentInclude, TableRecordItemSlots } from '../TableRecord'

/**
 * Interface for describing which components need to be connected for work. /
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type TableComponents = TableRecordComponentInclude & ScrollStickyComponentInclude

/**
 * Type describing available events. /
 * Тип, описывающий доступные события.
 */
export type TableEmits = {}

/**
 * Type describing available properties. /
 * Тип, описывающий доступные свойства.
 */
export type TableExpose = {}

/**
 * Type describing available slots. /
 * Тип, описывающий доступные слоты.
 */
export type TableSlots = TableRecordItemSlots
  & {
    /**
     * Slot for custom table body content /
     * Слот для пользовательского содержимого тела таблицы
     */
    body?(props: {
      /** Column index names / Имена индексов колонок */
      columns: string[]
    }): any
  }

/**
 * Type describing subclasses. /
 * Тип, описывающий подклассы.
 */
export type TableClasses = {
  /** Main element class name / Основное имя класса элемента */
  main: ConstrClass
  // :classes [!] System label / Системная метка
  header: string
  items: string
  // :classes [!] System label / Системная метка
}
