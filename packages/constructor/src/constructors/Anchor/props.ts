interface AnchorPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface AnchorPropsBasic {
  name?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface AnchorProps extends AnchorPropsBasic, AnchorPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsAnchor = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
