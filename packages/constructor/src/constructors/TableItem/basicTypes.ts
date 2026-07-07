import type { ConstrBind } from '@dxtmisha/functional'
import type { TableItemPropsBasic } from './props'

/**
 * Type describing components for nested table items. /
 * Тип, описывающий компоненты для вложенных ячеек таблицы.
 */
export type TableItemComponentInclude = {
  /** TableItem component configuration / Конфигурация компонента ячейки таблицы */
  tableItem?: object
}

/**
 * Type describing properties for nested table items. /
 * Тип, описывающий свойства для вложенных ячеек таблицы.
 */
export type TableItemPropsInclude<
  TableItemProps extends TableItemPropsBasic = TableItemPropsBasic
> = {
  /** Additional attributes for TableItem component / Дополнительные атрибуты для компонента TableItem */
  tableItemAttrs?: ConstrBind<TableItemProps>

  /** Additional attributes for TableItem column components / Дополнительные атрибуты для компонентов колонок TableItem */
  tableItemColumnAttrs?: Record<string, ConstrBind<TableItemProps>>
}
