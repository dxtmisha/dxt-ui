type InputPhonePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type InputPhonePropsBasic = {
  // TODO: Location for a custom property / Место для пользовательского свойства
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputPhoneProps = InputPhonePropsBasic & InputPhonePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInputPhone = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
