import type { ConstrBind } from '@dxtmisha/functional'
import type { TableItemPropsBasic, TableItemPropsInclude } from '../TableItem'
import type { TableRecordPropsBasic } from './props'

/**
 * Type describing the parameters/properties of a table item slot in a table record. /
 * Тип, описывающий параметры/свойства слота элемента таблицы в записи таблицы.
 */
export type TableRecordItemSlotProps<
  Item = any,
  Value = any
> = {
  /** Row data object / Объект данных строки */
  item: Item
  /** Unique rendering key / Уникальный ключ рендеринга */
  key: string
  /** Column index / Индекс колонки */
  index: string
  /** Cell value / Значение ячейки */
  value: Value
  /** Slot name / Имя слота */
  slotsName: string
  /** Class names of elements / Имена классов элементов */
  classes: {
    /** Label element class name / Имя класса элемента метки */
    label: string
    /** Description element class name / Имя класса элемента описания */
    description: string
  }
}

/**
 * Type describing the function of a table item slot in a table record. /
 * Тип, описывающий функцию слота элемента таблицы в записи таблицы.
 */
export type TableRecordItemSlot<
  Item = any,
  Value = any
> = (props: TableRecordItemSlotProps<Item, Value>) => any

/**
 * Type describing the collection of table item slots in a table record. /
 * Тип, описывающий коллекцию слотов элементов таблицы в записи таблицы.
 */
export type TableRecordItemSlots<
  Item = any,
  Value = any
> = {
  [key: string]: TableRecordItemSlot<Item, Value> | undefined
}

/**
 * Type describing components for nested table records. /
 * Тип, описывающий компоненты для вложенных записей таблицы.
 */
export type TableRecordComponentInclude = {
  /** TableRecord component configuration / Конфигурация компонента записи таблицы */
  tableRecord?: object
}

/**
 * Type describing properties for nested table records. /
 * Тип, описывающий свойства для вложенных записей таблицы.
 */
export type TableRecordPropsInclude<
  TableItemProps extends TableItemPropsBasic = TableItemPropsBasic,
  TableRecordProps extends TableRecordPropsBasic<TableItemProps> = TableRecordPropsBasic<TableItemProps>
> = TableItemPropsInclude<TableItemProps> & {
  /** Additional attributes for TableRecord component / Дополнительные атрибуты для компонента TableRecord */
  tableRecordAttrs?: ConstrBind<TableRecordProps>

  /** Additional attributes for TableRecord row components / Дополнительные атрибуты для компонентов строк TableRecord */
  tableRowAttrs?: Record<string, ConstrBind<TableRecordProps>>

  /** Selected item identifier or list / Идентификатор выбранного элемента или список */
  selected?: string | string[]
}
