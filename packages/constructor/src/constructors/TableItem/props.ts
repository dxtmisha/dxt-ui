import type { ConstrBind } from '@dxtmisha/functional'
import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { TooltipProps, TooltipPropsInclude } from '../Tooltip'
import type { IconPropsBasic } from '../Icon'
import type { SkeletonPropsInclude } from '../Skeleton'

type TableItemPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  selected?: boolean
  header?: boolean
  vertical?: 'always' | 'none'
  right?: boolean
  basis?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto'
  labelClamp?: boolean
  stickyLeft?: boolean
  // :type [!] System label / Системная метка
}

export type TableItemPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Tooltip extends TooltipProps = TooltipProps
> = LabelProps
  & DescriptionProps
  & TooltipPropsInclude<Tooltip>
  & SkeletonPropsInclude
  & {
    // Value
    /** Custom label for table header / Пользовательский заголовок для шапки таблицы */
    headerLabel?: string
    /** Trailing characters for header label / Завершающие символы для заголовка шапки */
    headerLabelEnd?: string
    /** Value of the table cell / Значение ячейки таблицы */
    value?: string
    /** Column/field index name / Имя индекса колонки/поля */
    index?: string

    // Style
    /** HTML tag / HTML-тег */
    tag?: string
    /** Tooltip control icon / Иконка управления подсказкой */
    iconTooltip?: string | ConstrBind<Icon>
    /** Whether to show header label in vertical layout / Показывать ли заголовок шапки при вертикальном расположении */
    verticalHeader?: boolean
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TableItemProps = TableItemPropsBasic & TableItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTableItem = {
  tag: 'div',
  headerLabelEnd: ':',
  verticalHeader: true,
  ...{
    // :default [!] System label / Системная метка
    vertical: 'none',
    basis: '1'
    // :default [!] System label / Системная метка
  }
}
