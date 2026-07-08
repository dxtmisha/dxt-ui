import type { ConstrBind } from '@dxtmisha/functional'
import type { SkeletonPropsInclude } from '../Skeleton'
import type { TableItemPropsBasic, TableItemPropsInclude } from '../TableItem'

type TableRecordPropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  header?: boolean
  itemCenter?: boolean
  vertical?: 'always' | 'none'
  dynamic?: boolean
  divider?: boolean
  dense?: boolean
  stickyTop?: boolean
  // :type [!] System label / Системная метка
}

export type TableRecordPropsBasic<
  TableItem extends TableItemPropsBasic = TableItemPropsBasic
> = TableItemPropsInclude<TableItem> &
  SkeletonPropsInclude & {
    /** Column indexes / Индексы колонок */
    columns?: string[]
    /** Row data / Данные строки */
    item?: Record<string, string | number | ConstrBind<any> | any>
    /** Unique rendering key / Уникальный ключ рендеринга */
    index?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableRecordProps = TableRecordPropsBasic & TableRecordPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTableRecord = {
  ...{
    // :default [!] System label / Системная метка
    itemCenter: true,
    vertical: 'none',
    divider: true
    // :default [!] System label / Системная метка
  }
}
