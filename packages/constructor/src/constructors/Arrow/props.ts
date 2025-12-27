interface ArrowPropsToken {
  // :type [!] System label / Системная метка
  position?: 'auto' | 'top' | 'bottom' | 'left' | 'right'
  inverse?: boolean
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
  ...{
    // :default [!] System label / Системная метка
    position: 'top'
    // :default [!] System label / Системная метка
  }
}
