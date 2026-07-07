import { type TableItemPropsBasic, defaultsTableItem } from '@dxtmisha/constructor/TableItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  vertical: ['always', 'none'],
  basis: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 'auto']
  // :values [!] System label / Системная метка
}

type PropsToken = {
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

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TableItemProps = TableItemPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTableItem,
  ...{
    // :default [!] System label / Системная метка
    vertical: 'none',
    basis: '1'
    // :default [!] System label / Системная метка
  }
}
