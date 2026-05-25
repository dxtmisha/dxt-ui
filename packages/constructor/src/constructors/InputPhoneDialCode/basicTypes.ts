import type { ConstrBind } from '@dxtmisha/functional'

import type { InputPhoneDialCodeExpose } from './types'
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
 * Type for input phone dial code expose functionality.
 *
 * Тип для функциональности экспорта input phone dial code.
 */
export interface InputPhoneDialCodeExposeInclude extends InputPhoneDialCodeExpose {
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
  /** Additional attributes for the InputPhoneDialCode component / Дополнительные атрибуты для компонента InputPhoneDialCode */
  inputPhoneDialCodeAttrs?: ConstrBind<InputPhoneDialCode>
}
