import type { ButtonPropsBasic, ButtonPropsInclude } from '../Button'
import type { MenuCountryPropsBasic, MenuCountryPropsInclude } from '../MenuCountry'

type InputPhoneDialCodePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type InputPhoneDialCodePropsBasic<
  Button extends ButtonPropsBasic = ButtonPropsBasic,
  MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic
> = ButtonPropsInclude<Button>
  & MenuCountryPropsInclude<MenuCountry>
  & {
    // Value
    /** Selected country code / Выбранный код страны */
    value?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputPhoneDialCodeProps = InputPhoneDialCodePropsBasic & InputPhoneDialCodePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInputPhoneDialCode = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
