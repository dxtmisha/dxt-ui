import { type SnackbarPropsBasic, defaultsSnackbar } from '@dxtmisha/constructor/Snackbar'

export const propsValues = {
  // :values [!] System label / Системная метка
  limit: ['1', '2', '4', '6', '8'],
  vertical: ['top', 'bottom'],
  horizontal: ['right', 'left', 'block'],
  origin: ['topToBottom', 'bottomToTop', 'rightToLeft', 'leftToRight']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  full?: boolean
  all?: boolean
  limit?: string | '1' | '2' | '4' | '6' | '8'
  vertical?: string | 'top' | 'bottom'
  horizontal?: string | 'right' | 'left' | 'block'
  origin?: string | 'topToBottom' | 'bottomToTop' | 'rightToLeft' | 'leftToRight'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type SnackbarProps = SnackbarPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSnackbar,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
