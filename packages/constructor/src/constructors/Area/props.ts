type AreaPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type AreaPropsBasic = {
  areaDefault?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AreaProps = AreaPropsBasic & AreaPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsArea = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
