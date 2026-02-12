import { type TabItemPropsBasic, defaultsTabItem } from '@dxtmisha/constructor/TabItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['iconAlways', 'auto', 'iconSm', 'iconMd', 'iconLg', 'iconXl', 'icon2xl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'full2xl'],
  container: ['iconSm', 'iconMd', 'iconLg', 'iconXl', 'icon2xl', 'fullSm', 'fullMd', 'fullLg', 'fullXl', 'full2xl']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  open?: boolean
  selected?: boolean
  disabled?: boolean
  adaptive?: 'iconAlways' | 'auto' | 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl'
  container?: 'iconSm' | 'iconMd' | 'iconLg' | 'iconXl' | 'icon2xl' | 'fullSm' | 'fullMd' | 'fullLg' | 'fullXl' | 'full2xl'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TabItemProps =  TabItemPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTabItem,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
