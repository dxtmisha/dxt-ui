interface ListGroupPropsToken {
  // :type [!] System label / Системная метка
  open?: boolean
  divider?: boolean
  // :type [!] System label / Системная метка
}

export interface ListGroupPropsBasic {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ListGroupProps extends ListGroupPropsBasic, ListGroupPropsToken {
}

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
