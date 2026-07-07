import type { ConstrBind } from '@dxtmisha/functional'
import type { TableHeaderItemPropsBasic } from './props'

/**
 * Type describing components for nested table header items. /
 * Тип, описывающий компоненты для вложенных ячеек шапки таблицы.
 */
export type TableHeaderItemComponentInclude = {
  /** TableHeaderItem component configuration / Конфигурация компонента ячейки шапки таблицы */
  tableHeaderItem?: object
}

/**
 * Type describing properties for nested table header items. /
 * Тип, описывающий свойства для вложенных ячеек шапки таблицы.
 */
export type TableHeaderItemPropsInclude<
  TableHeaderItemProps extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic
> = {
  /** Orientation of the table header cell / Ориентация ячейки шапки таблицы */
  vertical?: string

  /** Additional attributes for TableHeaderItem component / Дополнительные атрибуты для компонента TableHeaderItem */
  tableHeaderItemAttrs?: ConstrBind<TableHeaderItemProps>

  /** Additional attributes for TableHeaderItem column components / Дополнительные атрибуты для компонентов колонок TableHeaderItem */
  tableHeaderItemColumnAttrs?: Record<string, ConstrBind<TableHeaderItemProps>>
}
