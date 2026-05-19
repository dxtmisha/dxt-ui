import type { LabelProps } from '../../types/labelTypes'

type TextLabelPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type TextLabelPropsBasic = LabelProps & {
  /** html tag for wrapping the text/html тег для оборачивания текста */
  tag?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TextLabelProps = TextLabelPropsBasic & TextLabelPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTextLabel = {
  tag: 'div',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
