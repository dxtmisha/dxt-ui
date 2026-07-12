import { type TableItemPropsBasic, defaultsTableItem } from '@dxtmisha/constructor/TableItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  align: ['left', 'center', 'right'],
  alignVertical: ['top', 'center', 'bottom']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  disabled?: boolean
  align?: 'left' | 'center' | 'right'
  alignVertical?: 'top' | 'center' | 'bottom'
  dividerX?: boolean
  dividerY?: boolean
  labelClamp?: boolean
  stickyTop?: boolean
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
    align: 'left',
    alignVertical: 'center'
    // :default [!] System label / Системная метка
  }
}
