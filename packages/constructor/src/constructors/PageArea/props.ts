import type { BlockProps } from '../Block'

type PageAreaPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type PageAreaPropsBasic = BlockProps

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type PageAreaProps = PageAreaPropsBasic & PageAreaPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsPageArea = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
