import type { LabelProps } from '../../types/labelTypes'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { SkeletonPropsInclude } from '../Skeleton'

/**
 * Type describing token properties for TableItem component. /
 * Тип, описывающий токен-свойства для компонента TableItem.
 */
type TableItemPropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  selected?: boolean
  align?: 'left' | 'center' | 'right'
  alignVertical?: 'top' | 'center' | 'bottom'
  labelClamp?: boolean
  stickyTop?: boolean
  stickyLeft?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Basic properties of the TableItem component. /
 * Базовые свойства компонента TableItem.
 */
export type TableItemPropsBasic = LabelProps
  & DescriptionProps
  & SkeletonPropsInclude
  & {
    /** Value of the table cell / Значение ячейки таблицы */
    value?: string

    /** Tag name of the table cell / Имя тега ячейки таблицы */
    tag?: string
    /** Number of columns the cell should span / Количество объединяемых колонок для ячейки */
    colspan?: string | number
    /** Number of rows the cell should span / Количество объединяемых строк для ячейки */
    rowspan?: string | number

    /** Unique rendering key / Уникальный ключ рендеринга */
    keyItem?: string
    /** Column/field index name / Имя индекса колонки/поля */
    index?: string
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
  tag: 'td',
  ...{
    // :default [!] System label / Системная метка
    align: 'left',
    alignVertical: 'center'
    // :default [!] System label / Системная метка
  }
}
