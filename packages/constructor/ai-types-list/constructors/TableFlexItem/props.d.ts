// md5:23d8c5fbf08fc3e6528101dacde968a0
import { TableItemPropsBasic } from '../TableItem';
/**
 * Type describing token properties for TableFlexItem component.
 *
 * Тип, описывающий токен-свойства для компонента TableFlexItem.
 */
type TableFlexItemPropsToken = {
    disabled?: boolean;
    selected?: boolean;
    align?: 'left' | 'center' | 'right';
    alignVertical?: 'top' | 'center' | 'bottom';
    dividerX?: boolean;
    dividerY?: boolean;
    labelClamp?: boolean;
    stickyTop?: boolean;
    stickyLeft?: boolean;
};
/**
 * Basic type describing flex table item properties.
 *
 * Базовый тип, описывающий свойства ячейки флекс-таблицы.
 */
export type TableFlexItemPropsBasic = TableItemPropsBasic;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableFlexItemProps = TableFlexItemPropsBasic & TableFlexItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTableFlexItem: {
    align: string;
    alignVertical: string;
    tag: string;
};
export {};
