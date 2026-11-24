type BleedPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing basic properties for the Bleed component.
 *
 * Тип, описывающий основные свойства компонента Bleed.
 */
export type BleedPropsBasic = {
  // Style
  /** HTML tag name for the root element / Имя HTML-тега для корневого элемента */
  tag?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BleedProps = BleedPropsBasic & BleedPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsBleed = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
