/** Token properties for ListGroup / Токен-свойства для ListGroup */
export type ListGroupPropsToken = {
  // :type [!] System label / Системная метка
  open?: boolean
  divider?: boolean
  // :type [!] System label / Системная метка
}

/** Basic properties for ListGroup / Базовые свойства для ListGroup */
export type ListGroupPropsBasic = {
  /** Whether to show a divider/ Показывать ли разделитель */
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
