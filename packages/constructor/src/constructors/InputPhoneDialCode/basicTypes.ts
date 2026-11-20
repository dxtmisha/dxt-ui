import type { ConstrBind } from '@dxtmisha/functional'

import type { InputPhoneDialCodePropsBasic } from './props'

/**
 * Interface for describing which components need to be connected for InputPhoneDialCode work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы InputPhoneDialCode.
 */
export type InputPhoneDialCodeComponentInclude = {
  /** InputPhoneDialCode component configuration / Конфигурация компонента InputPhoneDialCode */
  inputPhoneDialCode?: object
}

/**
 * Interface for input phone dial code include props.
 *
 * Интерфейс для свойств включения input phone dial code.
 */
export type InputPhoneDialCodePropsInclude<
  InputPhoneDialCode extends InputPhoneDialCodePropsBasic = InputPhoneDialCodePropsBasic
> = {
  /** Whether the input phone dial code is disabled / Отключено ли input phone dial code */
  disabled?: boolean
  /** Whether the input phone dial code is read-only / Только ли для чтения input phone dial code */
  readonly?: boolean
  /** Allowed list of country codes (ISO 3166-1 alpha-2) / Список разрешённых кодов стран (ISO 3166-1 alpha-2) */
  countryList?: string[]
  /** Additional attributes for the InputPhoneDialCode component / Дополнительные атрибуты для компонента InputPhoneDialCode */
  inputPhoneDialCodeAttrs?: ConstrBind<InputPhoneDialCode>
}
