import { type TabsNavigationPropsBasic, defaultsTabsNavigation } from '@dxtmisha/constructor/TabsNavigation'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TabsNavigationProps =  TabsNavigationPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTabsNavigation,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
