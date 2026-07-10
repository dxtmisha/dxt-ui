import { type TablePropsBasic, defaultsTable } from '@dxtmisha/constructor/Table'
import type { TableItemProps } from '../TableItem'
import type { TableRecordProps } from '../TableRecord'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  headerTop?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TableProps = TablePropsBasic<TableItemProps, TableRecordProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTable,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
