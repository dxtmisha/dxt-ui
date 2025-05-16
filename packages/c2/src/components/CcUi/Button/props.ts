import { type ButtonPropsBasic, defaultsButton } from '@dxt-ui/constructor/Button'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['icon', 'block', 'auto', 'iconSm', 'iconMd', 'iconLg', 'iconXl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'blockToAutoSm', 'blockToAutoMd', 'blockToAutoLg'],
  textAlign: ['left', 'center', 'right'],
  size: ['x', 'xs', 'sm', 'md', 'lg', 'xl', 'autoMd', 'autoLg'],
  palette: ['carmine', 'iris', 'redfish', 'goldenrod', 'asparagus', 'slate', 'gray', 'alpha', 'pistachio', 'mint', 'jade', 'teal', 'celestial', 'indigo', 'orchid', 'cerise', 'informative', 'positive', 'negative', 'neutral', 'warning']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  focus?: boolean
  disabled?: boolean
  selected?: boolean
  readonly?: boolean
  adaptive?: 'icon' | 'block' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'blockToAutoSm' | 'blockToAutoMd' | 'blockToAutoLg'
  inverse?: boolean
  grid?: boolean
  textAlign?: 'left' | 'center' | 'right'
  primary?: boolean
  primaryInverse?: boolean
  secondary?: boolean
  outlined?: boolean
  ghost?: boolean
  link?: boolean
  size?: 'x' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'autoMd' | 'autoLg'
  rounded?: boolean
  palette?: 'carmine' | 'iris' | 'redfish' | 'goldenrod' | 'asparagus' | 'slate' | 'gray' | 'alpha' | 'pistachio' | 'mint' | 'jade' | 'teal' | 'celestial' | 'indigo' | 'orchid' | 'cerise' | 'informative' | 'positive' | 'negative' | 'neutral' | 'warning'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface ButtonProps extends ButtonPropsBasic, PropsToken {
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
