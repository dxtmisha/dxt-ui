import { type ListGroupPropsBasic, defaultsListGroup } from '@dxtmisha/constructor/ListGroup'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  open?: boolean
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ListGroupProps extends ListGroupPropsBasic, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsListGroup,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
