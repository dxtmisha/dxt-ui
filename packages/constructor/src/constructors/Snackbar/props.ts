type SnackbarPropsToken = {
  // :type [!] System label / Системная метка
  full?: boolean
  all?: boolean
  limit?: '1' | '2' | '4' | '6' | '8'
  vertical?: 'top' | 'bottom'
  horizontal?: 'right' | 'left' | 'block'
  origin?: 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight'
  // :type [!] System label / Системная метка
}

export type SnackbarPropsBasic = {
  delay?: number
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SnackbarProps = SnackbarPropsBasic & SnackbarPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSnackbar = {
  delay: 8_000,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
