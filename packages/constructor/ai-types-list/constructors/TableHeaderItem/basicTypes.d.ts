// md5:35d6e87cbf64d7de6e50fa5500fd53a1
import { TableItemPropsInclude } from '../TableItem';
import { TableHeaderItemPropsBasic } from './props';
/**
 * Type describing components for nested table header items.
 *
 * Тип, описывающий компоненты для вложенных ячеек шапки таблицы.
 */
export type TableHeaderItemComponentInclude = {
    /** TableHeaderItem component configuration / Конфигурация компонента ячейки шапки таблицы */
    tableHeaderItem?: object;
};
/**
 * Type describing properties for nested table header items.
 *
 * Тип, описывающий свойства для вложенных ячеек шапки таблицы.
 */
export type TableHeaderItemPropsInclude<TableHeaderItemProps extends TableHeaderItemPropsBasic = TableHeaderItemPropsBasic> = TableItemPropsInclude<TableHeaderItemProps>;
