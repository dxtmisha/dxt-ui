export type RipplePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type RipplePropsBasic = {
  disabled?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type RippleProps = RipplePropsBasic & RipplePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsRipple = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
