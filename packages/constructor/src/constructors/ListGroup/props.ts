export type ListGroupPropsToken = {
  // :type [!] System label / Системная метка
  open?: boolean
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type ListGroupPropsBasic = {
  divider?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ListGroupProps = ListGroupPropsBasic & ListGroupPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsListGroup = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
