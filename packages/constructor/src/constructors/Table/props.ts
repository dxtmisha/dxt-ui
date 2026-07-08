import type { TableItemPropsBasic } from '../TableItem'
import type { TableRecordPropsBasic, TableRecordPropsInclude, TableRecordValue } from '../TableRecord'

type TablePropsToken = {
  // :type [!] System label / Системная метка
  headerTop?: boolean
  // :type [!] System label / Системная метка
}

export type TablePropsBasic<
  TableItem extends TableItemPropsBasic = TableItemPropsBasic,
  TableRecord extends TableRecordPropsBasic<TableItem> = TableRecordPropsBasic<TableItem>
> = TableRecordPropsInclude<TableItem, TableRecord>
  & {
    /** Column index names / Имена индексов колонок */
    columns?: string[]

    /** Table header data / Данные шапки таблицы */
    header?: Record<string, TableRecordValue<TableItem>> | string[]

    /** List of row records / Список записей строк */
    list?: (Partial<Record<string, TableRecordValue<TableItem>>> | Record<string, any> | any)[]

    /** Field name for key identification / Имя поля для идентификации ключа */
    keyValue?: string

    /** Whether to enable horizontal scroll / Включить ли горизонтальную прокрутку */
    hasHorizontalScroll?: boolean

    /** Fixed width configuration for scrollbar / Конфигурация фиксированной ширины для полосы прокрутки */
    fixWidth?: string
  }

/**
 * Type describing incoming properties. /
 * Тип, описывающий входящие свойства.
 */
export type TableProps = TablePropsBasic & TablePropsToken

/**
 * Default value for property. /
 * Значение по умолчанию для свойства.
 */
export const defaultsTable = {
  fixWidth: undefined,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
