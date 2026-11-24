import type { ClientOnlyPropsInclude } from '../../types/clientOnlyTypes'

/** Design token properties / Свойства дизайн-токенов */
type ClientOnlyPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing basic properties for the ClientOnly component /
 * Тип, описывающий основные свойства компонента ClientOnly
 */
export type ClientOnlyPropsBasic = ClientOnlyPropsInclude

/**
 * Type describing incoming properties /
 * Тип, описывающий входящие свойства
 */
export type ClientOnlyProps = ClientOnlyPropsBasic & ClientOnlyPropsToken

/**
 * Default value for property /
 * Значение по умолчанию для свойства
 */
export const defaultsClientOnly = {
  clientOnly: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
