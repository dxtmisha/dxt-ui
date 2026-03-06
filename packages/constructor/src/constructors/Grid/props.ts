type GridPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type GridPropsBasic = {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type GridProps = GridPropsBasic & GridPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsGrid = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
