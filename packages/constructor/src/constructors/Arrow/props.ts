interface ArrowPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface ArrowPropsBasic {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface ArrowProps extends ArrowPropsBasic, ArrowPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsArrow = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
