import type { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes'

type ClientOnlyPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type ClientOnlyPropsBasic = ClientOnlyPropsInclude

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ClientOnlyProps = ClientOnlyPropsBasic & ClientOnlyPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsClientOnly = {
  clientOnly: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
