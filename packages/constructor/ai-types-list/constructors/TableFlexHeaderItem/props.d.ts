// md5:ebae1538c00aa25187dd202c3ae8d317
import { ChipPropsBasic } from '../Chip';
import { IconPropsBasic } from '../Icon';
import { TooltipProps } from '../Tooltip';
import { TableHeaderItemPropsBasic } from '../TableHeaderItem';
/**
 * Type describing token properties for TableFlexHeaderItem component.
 *
 * Тип, описывающий токен-свойства для компонента TableFlexHeaderItem.
 */
type TableFlexHeaderItemPropsToken = {
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
 * Basic type describing flex table header item properties.
 *
 * Базовый тип, описывающий свойства ячейки шапки флекс-таблицы.
 */
export type TableFlexHeaderItemPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = TableHeaderItemPropsBasic<Chip, Icon, Tooltip>;
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableFlexHeaderItemProps = TableFlexHeaderItemPropsBasic & TableFlexHeaderItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTableFlexHeaderItem: {
    align: string;
    alignVertical: string;
    tag: string;
};
export {};
