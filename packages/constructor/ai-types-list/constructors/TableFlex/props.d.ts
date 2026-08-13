// md5:98085a9eb908555b96421f02075a02bd
import { TablePropsBasic } from '../Table';
import { TableFlexHeaderItemPropsBasic } from '../TableFlexHeaderItem';
import { TableFlexItemPropsBasic } from '../TableFlexItem';
import { TableFlexRecordPropsBasic } from '../TableFlexRecord';
/**
 * Type describing token properties for TableFlex component.
 *
 * Тип, описывающий токен-свойства для компонента TableFlex.
 */
type TableFlexPropsToken = {
    headerTop?: boolean;
    captionBottom?: boolean;
    bleed?: boolean;
};
/**
 * Basic type describing flex table properties.
 *
 * Базовый тип, описывающий свойства флекс-таблицы.
 */
export type TableFlexPropsBasic<TableItem extends TableFlexItemPropsBasic = TableFlexItemPropsBasic, TableHeaderItem extends TableFlexHeaderItemPropsBasic = TableFlexHeaderItemPropsBasic, TableRecord extends TableFlexRecordPropsBasic<TableItem, TableHeaderItem> = TableFlexRecordPropsBasic<TableItem, TableHeaderItem>> = TablePropsBasic<TableItem, TableHeaderItem, TableRecord>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableFlexProps = TableFlexPropsBasic & TableFlexPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTableFlex: {
    lazy: boolean;
    page: number;
    stickyScrollBottom: boolean;
};
export {};
