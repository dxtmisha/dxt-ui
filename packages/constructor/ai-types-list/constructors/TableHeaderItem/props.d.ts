// md5:fdee5b10fcb84506dca0613c6645853a
import { ConstrBind, SortDir } from '@dxtmisha/functional';
import { ChipPropsBasic, ChipPropsInclude } from '../Chip';
import { IconPropsBasic } from '../Icon';
import { TableItemPropsBasic } from '../TableItem';
import { TooltipProps, TooltipPropsInclude } from '../Tooltip';
/**
 * Type describing token properties for TableHeaderItem component.
 *
 * Тип, описывающий токен-свойства для компонента TableHeaderItem.
 */
type TableHeaderItemPropsToken = {
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
 * Basic type describing table header item properties.
 *
 * Базовый тип, описывающий свойства ячейки шапки таблицы.
 */
export type TableHeaderItemPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic, Icon extends IconPropsBasic = IconPropsBasic, Tooltip extends TooltipProps = TooltipProps> = TableItemPropsBasic & ChipPropsInclude<Chip> & TooltipPropsInclude<Tooltip> & {
    /** Header scope / Область видимости заголовка */
    scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
    /** Whether to show sorting / Показывать ли сортировку */
    showSort?: boolean;
    /** Current sorted column index name / Имя индекса текущей отсортированной колонки */
    sortColumn?: string | number;
    /** Sorting direction / Направление сортировки */
    sortDir?: SortDir;
    /** Tooltip control icon / Иконка управления подсказкой */
    iconTooltip?: string | ConstrBind<Icon>;
    /** Icon for sorting / Иконка сортировки */
    iconSort?: string | ConstrBind<Icon>;
    /** Arrow up icon for ascending sorting / Иконка стрелки вверх для сортировки по возрастанию */
    iconArrowUp?: string | ConstrBind<Icon>;
    /** Arrow down icon for descending sorting / Иконка стрелки вниз для сортировки по убыванию */
    iconArrowDown?: string | ConstrBind<Icon>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableHeaderItemProps = TableHeaderItemPropsBasic & TableHeaderItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTableHeaderItem: {
    align: string;
    alignVertical: string;
    tag: string;
    scope: string;
};
export {};
