export type ArrowPropsToken = {
  // :type [!] System label / Системная метка
  position?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
  inverse?: boolean
  // :type [!] System label / Системная метка
}

export type ArrowPropsBasic = {
  elementTarget?: HTMLElement | string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ArrowProps = ArrowPropsBasic & ArrowPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsArrow = {
  ...{
    // :default [!] System label / Системная метка
    position: 'auto'
    // :default [!] System label / Системная метка
  }
}
