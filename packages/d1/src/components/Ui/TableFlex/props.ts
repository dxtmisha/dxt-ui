import { type TableFlexPropsBasic, defaultsTableFlex } from '@dxtmisha/constructor/TableFlex'

import type { TableFlexHeaderItemProps } from '../TableFlexHeaderItem'
import type { TableFlexItemProps } from '../TableFlexItem'
import type { TableFlexRecordProps } from '../TableFlexRecord'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  headerTop?: boolean
  captionBottom?: boolean
  bleed?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TableFlexProps = TableFlexPropsBasic<
  TableFlexItemProps,
  TableFlexHeaderItemProps,
  TableFlexRecordProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTableFlex,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
