import { type ButtonPropsBasic, defaultsButton } from '@dxt-ui/constructor/Button'
import type { IconProps } from '../Icon'
import type { ProgressProps } from '../Progress'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['iconAlways', 'block', 'auto', 'iconSm', 'iconMd', 'iconLg', 'iconXl', 'icon2xl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'full2xl'],
  container: ['iconSm', 'iconMd', 'iconLg', 'iconXl', 'icon2xl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'full2xl'],
  textAlign: ['left', 'center', 'right'],
  size: ['xs', 'sm', 'md', 'lg', 'xl'],
  palette: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  readonly?: boolean
  adaptive?: 'iconAlways' | 'block' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl'
  container?: 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl'
  inverse?: boolean
  grid?: boolean
  textAlign?: 'left' | 'center' | 'right'
  primary?: boolean
  secondary?: boolean
  outline?: boolean
  text?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  roundedFull?: boolean
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ButtonProps extends ButtonPropsBasic<IconProps, ProgressProps>, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsButton,
  ...{
    // :default [!] System label / Системная метка
    primary: true,
    size: 'md'
    // :default [!] System label / Системная метка
  }
}
