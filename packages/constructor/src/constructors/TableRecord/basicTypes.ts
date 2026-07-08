import type { ConstrBind } from '@dxtmisha/functional'
import type { TableItemPropsBasic, TableItemPropsInclude } from '../TableItem'
import type { TableRecordPropsBasic } from './props'

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
