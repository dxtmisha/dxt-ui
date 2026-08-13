// md5:ccae247be5d1ae986014b62c2db3cd6c
import { TableFlexHeaderItemPropsBasic } from '../TableFlexHeaderItem';
import { TableFlexItemPropsBasic } from '../TableFlexItem';
import { TableRecordPropsBasic } from '../TableRecord';
/**
 * Type describing token properties for TableFlexRecord component. /
 * Тип, описывающий токен-свойства для компонента TableFlexRecord.
 */
type TableFlexRecordPropsToken = {
    disabled?: boolean;
    selected?: boolean;
};
/**
 * Basic type describing flex table record properties. /
 * Базовый тип, описывающий свойства записи флекс-таблицы.
 */
export type TableFlexRecordPropsBasic<TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic, TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic> = TableRecordPropsBasic<TableItem, TableHeaderItem> & {
    /** Lazy loading of row elements / Ленивая загрузка элементов строки */
    lazy?: boolean;
    /** Default height of the row element / Высота элемента строки по умолчанию */
    defaultHeight?: string | number;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableFlexRecordProps = TableFlexRecordPropsBasic & TableFlexRecordPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTableFlexRecord: {
    lazy: boolean;
};
export {};
