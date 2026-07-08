import type { TableItemPropsInclude } from '../TableItem'

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
> = TableItemPropsInclude<TableHeaderItemProps>
