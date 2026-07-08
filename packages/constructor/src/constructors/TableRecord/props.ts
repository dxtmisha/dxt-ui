import type { ConstrBind } from '@dxtmisha/functional'
import type { SkeletonPropsInclude } from '../Skeleton'
import type { TableItemPropsBasic, TableItemPropsInclude } from '../TableItem'

type TableRecordPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  selected?: boolean
  // :type [!] System label / Системная метка
}

export type TableRecordPropsBasic<
  TableItem extends TableItemPropsBasic = TableItemPropsBasic
> = TableItemPropsInclude<TableItem>
  & SkeletonPropsInclude
  & {
    /** Row data / Данные строки */
    item?: Record<string, string | number | ConstrBind<TableItem> | any>
    /** Column indexes / Индексы колонок */
    columns?: string[]

    isHeader?: boolean

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
    // :default [!] System label / Системная метка
  }
}
