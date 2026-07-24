import type { SearchOptions } from '@dxtmisha/functional'
import type { TableItemPropsBasic } from '../TableItem'
import type { TableRecordPropsBasic, TableRecordPropsInclude } from '../TableRecord'
import type { TableHeaderItemPropsBasic } from '../TableHeaderItem'
import type { TableHeader, TableHeaders, TableList } from './basicTypes'

type TablePropsToken = {
  // :type [!] System label / Системная метка
  headerTop?: boolean
  // :type [!] System label / Системная метка
}

export type TablePropsBasic<
  TableItem extends TableItemPropsBasic = TableItemPropsBasic,
  TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic,
  TableRecord extends TableRecordPropsBasic<TableItem, TableHeaderItem> = TableRecordPropsBasic<TableItem, TableHeaderItem>
> = TableRecordPropsInclude<TableItem, TableRecord>
  & {
    /** Column index names / Имена индексов колонок */
    columns?: string[]

    /** Table header data / Данные шапки таблицы */
    header?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>

    /** List of row records / Список записей строк */
    list?: TableList<TableItem>

    /** Current page / Текущая страница */
    page?: number | string

    /** Number of records to display per page / Количество отображаемых записей на странице */
    rows?: number | string

    /** Enable bottom sticky scrollbar / Включить прилипающий нижний скроллбар */
    scrollBottomSticky?: boolean

    /** Search string query / Строка поиска */
    search?: string

    /** Columns to search in / Колонки, по которым ведется поиск */
    searchColumns?: string[]

    /** Additional search options / Дополнительные настройки поиска */
    searchOptions?: SearchOptions
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
  lazy: true,
  page: 1,
  scrollBottomSticky: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
