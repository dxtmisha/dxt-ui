// md5:fe399461ed1fd651972f3b0a4e822202
import { TableItemPropsBasic, TableItemPropsInclude } from '../TableItem';
import { TableHeaderItemPropsBasic } from '../TableHeaderItem';
import { TableRecordValue } from './basicTypes';
/**
 * Type describing token properties for TableRecord component.
 *
 * Тип, описывающий токен-свойства для компонента TableRecord.
 */
type TableRecordPropsToken = {
    disabled?: boolean;
    selected?: boolean;
};
/**
 * Basic type describing table record properties.
 *
 * Базовый тип, описывающий свойства записи таблицы.
 */
export type TableRecordPropsBasic<TableItem extends TableItemPropsBasic = TableItemPropsBasic, TableHeaderItem extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableItemPropsInclude<TableItem> & {
    /** Row data / Данные строки */
    item?: Record<string, TableRecordValue<TableItem | TableHeaderItem> | any>;
    /** Column indexes / Индексы колонок */
    columns?: string[];
    /** Whether the row represents a table header / Является ли строка заголовком таблицы */
    isHeader?: boolean;
    /** Unique rendering key / Уникальный ключ рендеринга */
    index?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableRecordProps = TableRecordPropsBasic & TableRecordPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTableRecord: {};
export {};
