import type { ConstrBind } from '@dxtmisha/functional'
import type { SkeletonPropsInclude } from '../Skeleton'
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
  TableItem extends TableItemPropsBasic = TableItemPropsBasic
> = SkeletonPropsInclude
  & {
    /** Selected state of the item / Выбранное состояние элемента */
    selected?: boolean
    /** Disabled state of the item / Отключенное состояние элемента */
    disabled?: boolean

    /** Sticky top state / Закрепленное сверху состояние */
    stickyTop?: boolean
    /** List of columns sticky to the left / Список колонок, закрепленных слева */
    stickyLeft?: string[]

    /** Additional attributes for TableItem component / Дополнительные атрибуты для компонента TableItem */
    tableItemAttrs?: ConstrBind<TableItem>

    /** Additional attributes for TableItem column components / Дополнительные атрибуты для компонентов колонок TableItem */
    tableItemColumnAttrs?: Record<string, ConstrBind<TableItem>>
  }
