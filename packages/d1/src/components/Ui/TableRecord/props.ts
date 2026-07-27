import { type TableRecordPropsBasic, defaultsTableRecord } from '@dxtmisha/constructor/TableRecord'

import type { TableItemProps } from '../TableItem'
import type { TableHeaderItemProps } from '../TableHeaderItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  selected?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TableRecordProps = TableRecordPropsBasic<TableItemProps, TableHeaderItemProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTableRecord,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
