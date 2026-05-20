import type { DescriptionProps } from '../../types/descriptionTypes'

type TextDescriptionPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type TextDescriptionPropsBasic = DescriptionProps & {
  /** html tag for wrapping the description/html тег для оборачивания описания */
  tag?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TextDescriptionProps = TextDescriptionPropsBasic & TextDescriptionPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTextDescription = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
