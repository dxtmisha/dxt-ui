import { type TabsPropsBasic, defaultsTabs } from '@dxtmisha/constructor/Tabs'

import type { TabItemProps } from '../TabItem'
import type { TabsNavigationProps } from '../TabsNavigation'
import type { MotionAxisProps } from '../MotionAxis'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type TabsProps = TabsPropsBasic<TabItemProps, TabsNavigationProps, MotionAxisProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsTabs,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
