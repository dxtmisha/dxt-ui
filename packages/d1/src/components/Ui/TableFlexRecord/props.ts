import { type TableFlexRecordPropsBasic, defaultsTableFlexRecord } from '@dxtmisha/constructor/TableFlexRecord'

import type { TableFlexItemProps } from '../TableFlexItem'
import type { TableFlexHeaderItemProps } from '../TableFlexHeaderItem'

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
export type TableFlexRecordProps = TableFlexRecordPropsBasic<TableFlexItemProps, TableFlexHeaderItemProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTableFlexRecord,
  defaultHeight: 28,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
