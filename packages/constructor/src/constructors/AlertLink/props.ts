import type { LabelProps } from '../../types/labelTypes'
import type { EventClickProps } from '../../types/eventClickTypes'

/** Type describing tokens of incoming properties / Тип, описывающий токены входящих свойств */
type AlertLinkPropsToken = {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

/** Basic type describing incoming properties / Базовый тип, описывающий входящие свойства */
export type AlertLinkPropsBasic = LabelProps
  & EventClickProps

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AlertLinkProps = AlertLinkPropsBasic & AlertLinkPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsAlertLink = {
  // TODO: Location for a user-defined default value / Место для пользовательского значения по умолчанию
  ...{
    // :default [!] System label / Системная метка
    divider: true
    // :default [!] System label / Системная метка
  }
}
