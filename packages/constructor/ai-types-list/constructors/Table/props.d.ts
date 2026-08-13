// md5:a2e740ebdad09992c8638fae98f89390
import { CaptionProps } from '../../types/captionTypes';
import { PaginationPropsInclude } from '../../types/paginationTypes';
import { SearchPropsInclude } from '../../types/searchTypes';
import { SortPropsInclude } from '../../types/sortTypes';
import { StickyScrollBottomPropsInclude } from '../../types/stickyTypes';
import { TableItemPropsBasic } from '../TableItem';
import { TableRecordPropsBasic, TableRecordPropsInclude } from '../TableRecord';
import { TableHeaderItemPropsBasic } from '../TableHeaderItem';
import { TableHeader, TableHeaders, TableList } from './basicTypes';
/**
 * Type describing token properties.
 *
 * Тип, описывающий токен-свойства.
 */
type TablePropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};
/**
 * Basic type describing table properties.
 *
 * Базовый тип, описывающий свойства таблицы.
 */
export type TablePropsBasic<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic, TableRecord extends TableRecordPropsBasic<TableItem, TableHeaderItem> = TableRecordPropsBasic<TableItem, TableHeaderItem>> = CaptionProps & SearchPropsInclude<TableItem> & SortPropsInclude<TableItem> & PaginationPropsInclude<TableItem> & StickyScrollBottomPropsInclude & TableRecordPropsInclude<TableItem, TableRecord> & {
    /** Column index names / Имена индексов колонок */
    columns?: string[];
    /** Widths of columns via colgroup / Ширина колонок через colgroup */
    columnsWidth?: Record<string, string | number>;
    /** Table header data / Данные шапки таблицы */
    header?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>;
    /** Table footer data / Данные подвала таблицы */
    foot?: TableHeader<TableHeaderItem> | TableHeaders<TableHeaderItem>;
    /** List of row records / Список записей строк */
    list?: TableList<TableItem>;
    /** Current page / Текущая страница */
    page?: number | string;
    /** Number of records to display per page / Количество отображаемых записей на странице */
    rows?: number | string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableProps = TablePropsBasic & TablePropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTable: {
    lazy: boolean;
    page: number;
    stickyScrollBottom: boolean;
};
export {};
