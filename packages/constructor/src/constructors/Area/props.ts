type AreaPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing basic properties for the Area component.
 *
 * Тип, описывающий основные свойства компонента Area.
 */
export type AreaPropsBasic = {
  /** Default area slot name when no area is injected / Имя слота области по умолчанию при отсутствии инъекции */
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
