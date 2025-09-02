interface FieldCounterPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface FieldCounterPropsBasic {
  // Style
  counter?: string | number
  maxlength?: string | number

  template?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface FieldCounterProps extends FieldCounterPropsBasic, FieldCounterPropsToken {
}

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsFieldCounter = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
