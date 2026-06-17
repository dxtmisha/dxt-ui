type SelectableAreaPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type SelectableAreaPropsBasic = {
  // TODO: Location for a custom property / Место для пользовательского свойства
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SelectableAreaProps = SelectableAreaPropsBasic & SelectableAreaPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSelectableArea = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
