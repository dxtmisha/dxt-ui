import { type AlertPropsBasic, defaultsAlert } from '@dxtmisha/constructor/Alert'
import type { IconProps } from '../Icon'
import type { AlertLinkProps } from '../AlertLink'
import type { ActionsProps } from '../Actions'
import type { ButtonProps } from '../Button'

export const propsValues = {
  // :values [!] System label / Системная метка
  palette: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  itemCenter?: boolean
  primary?: boolean
  secondary?: boolean
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type AlertProps = AlertPropsBasic<
  IconProps,
  AlertLinkProps,
  ActionsProps,
  ButtonProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsAlert,
  iconClose: 'close',
  ...{
    // :default [!] System label / Системная метка
    secondary: true
    // :default [!] System label / Системная метка
  }
}
