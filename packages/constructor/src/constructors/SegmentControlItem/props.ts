type SegmentControlItemPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type SegmentControlItemPropsBasic = {
  // TODO: Location for a custom property / Место для пользовательского свойства
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SegmentControlItemProps = SegmentControlItemPropsBasic & SegmentControlItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSegmentControlItem = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
