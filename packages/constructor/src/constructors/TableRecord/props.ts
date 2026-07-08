import type { TableItemPropsBasic, TableItemPropsInclude } from '../TableItem'

import type { TableRecordValue } from './basicTypes'

type TableRecordPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  selected?: boolean
  // :type [!] System label / Системная метка
}

export type TableRecordPropsBasic<
  TableItem extends TableItemPropsBasic = TableItemPropsBasic
> = TableItemPropsInclude<TableItem>
  & {
    /** Row data / Данные строки */
    item?: Record<string, TableRecordValue<TableItem> | any>
    /** Column indexes / Индексы колонок */
    columns?: string[]

    /** Whether the row represents a table header / Является ли строка заголовком таблицы */
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
