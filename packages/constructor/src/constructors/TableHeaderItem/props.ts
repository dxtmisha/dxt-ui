import type { ConstrBind, SortDir } from '@dxtmisha/functional'

import type { ChipPropsBasic, ChipPropsInclude } from '../Chip'
import type { IconPropsBasic } from '../Icon'
import type { TableItemPropsBasic } from '../TableItem'
import type { TooltipProps, TooltipPropsInclude } from '../Tooltip'

type TableHeaderItemPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  selected?: boolean
  align?: 'left' | 'center' | 'right'
  alignVertical?: 'top' | 'center' | 'bottom'
  dividerX?: boolean
  dividerY?: boolean
  labelClamp?: boolean
  stickyTop?: boolean
  stickyLeft?: boolean
  // :type [!] System label / Системная метка
}

export type TableHeaderItemPropsBasic<
  Chip extends ChipPropsBasic = ChipPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Tooltip extends TooltipProps = TooltipProps
> = TableItemPropsBasic
  & ChipPropsInclude<Chip>
  & TooltipPropsInclude<Tooltip>
  & {
    /** Whether to show sorting/ Показывать ли сортировку */
    showSort?: boolean

    /** Current sorted column index name / Имя индекса текущей отсортированной колонки */
    sortColumn?: string | number

    /** Sorting direction / Направление сортировки */
    sortDir?: SortDir

    /** Tooltip control icon / Иконка управления подсказкой */
    iconTooltip?: string | ConstrBind<Icon>

    /** Icon for sorting / Иконка сортировки */
    iconSort?: string | ConstrBind<Icon>

    /** Arrow up icon for ascending sorting / Иконка стрелки вверх для сортировки по возрастанию */
    iconArrowUp?: string | ConstrBind<Icon>

    /** Arrow down icon for descending sorting / Иконка стрелки вниз для сортировки по убыванию */
    iconArrowDown?: string | ConstrBind<Icon>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableHeaderItemProps = TableHeaderItemPropsBasic & TableHeaderItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTableHeaderItem = {
  tag: 'th',
  ...{
    // :default [!] System label / Системная метка
    align: 'left',
    alignVertical: 'center'
    // :default [!] System label / Системная метка
  }
}
