import type { TextNotificationsPropsInclude } from '../../types/textTypes'

type SnackbarPropsToken = {
  // :type [!] System label / Системная метка
  full?: boolean
  all?: boolean
  limit?: string | '1' | '2' | '4' | '6' | '8'
  vertical?: string | 'top' | 'bottom'
  horizontal?: string | 'right' | 'left' | 'block'
  origin?: string | 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight'
  // :type [!] System label / Системная метка
}

export type SnackbarPropsBasic
  = TextNotificationsPropsInclude
    & {
      /** Delay before auto-closing the notification/ Задержка перед автоматическим закрытием уведомления */
      delay?: number
    }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SnackbarProps = SnackbarPropsBasic & SnackbarPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSnackbar = {
  delay: 8_000,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
