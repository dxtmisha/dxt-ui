import type { ListSelectedList } from '@dxtmisha/functional'

import type { ButtonPropsBasic, ButtonPropsInclude } from '../Button'
import type { MenuCountryPropsBasic, MenuCountryPropsInclude } from '../MenuCountry'
import type { IconPropsBasic, IconValue } from '../Icon'

import type { EnabledProps } from '../../types/enabledTypes'
import type { ModelPropsSelected } from '../../types/modelTypes'

/**
 * Type describing token properties for InputPhoneDialCode.
 *
 * Тип, описывающий свойства токенов для InputPhoneDialCode.
 */
type InputPhoneDialCodePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Interface describing basic properties of the InputPhoneDialCode component.
 *
 * Интерфейс, описывающий базовые свойства компонента InputPhoneDialCode.
 */
export type InputPhoneDialCodePropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic,
  MenuCountry extends MenuCountryPropsBasic = MenuCountryPropsBasic
> = EnabledProps
  & ButtonPropsInclude<Button>
  & MenuCountryPropsInclude<MenuCountry>
  & ModelPropsSelected<ListSelectedList>
  & {
    // Value
    /** Selected country code / Выбранный код страны */
    value?: string

    /** Display type for the selected country label: phone code, name, or none / Тип отображения метки выбранной страны: телефонный код, название или без метки */
    labelType?: 'name' | 'code' | 'none'

    /** Icon for the down arrow / Иконка для стрелки вниз */
    iconArrowDown?: IconValue<Icon>
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
  highlightLengthStart: 1,
  showSearch: true,
  filterMode: false,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
