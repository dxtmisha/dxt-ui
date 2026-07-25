import type { CaptionProps } from '../../types/captionTypes'
import type { PaginationPropsInclude } from '../../types/paginationTypes'
import type { SearchPropsInclude } from '../../types/searchTypes'
import type { StickyScrollBottomPropsInclude } from '../../types/stickyTypes'

import type { TableItemPropsBasic } from '../TableItem'
import type { TableRecordPropsBasic, TableRecordPropsInclude } from '../TableRecord'
import type { TableHeaderItemPropsBasic } from '../TableHeaderItem'

import type { TableHeader, TableHeaders, TableList } from './basicTypes'

type TablePropsToken = {
  // :type [!] System label / Системная метка
  headerTop?: boolean
  captionBottom?: boolean
  // :type [!] System label / Системная метка
}

export type TablePropsBasic<
  TableItem extends TableItemPropsBasic = TableItemPropsBasic,
  TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic,
  TableRecord extends TableRecordPropsBasic<TableItem, TableHeaderItem> = TableRecordPropsBasic<TableItem, TableHeaderItem>
> = CaptionProps
  & SearchPropsInclude<TableItem>
  & PaginationPropsInclude<TableItem>
  & StickyScrollBottomPropsInclude
  & TableRecordPropsInclude<TableItem, TableRecord>
  & {
    /** Column index names / Имена индексов колонок */
    columns?: string[]

    /** Widths of columns via colgroup / Ширина колонок через colgroup */
    columnsWidth?: Record<string, string | number>

    /** Table header data / Данные шапки таблицы */
    header?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>

    /** Table footer data / Данные подвала таблицы */
    foot?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>

    /** List of row records / Список записей строк */
    list?: TableList<TableItem>

    /** Current page / Текущая страница */
    page?: number | string

    /** Number of records to display per page / Количество отображаемых записей на странице */
    rows?: number | string
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
  stickyScrollBottom: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
