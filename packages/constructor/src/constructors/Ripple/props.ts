interface RipplePropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface RipplePropsBasic {
  disabled?: boolean
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface RippleProps extends RipplePropsBasic, RipplePropsToken {
}

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
