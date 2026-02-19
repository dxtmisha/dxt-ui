import type {TabItemPropsBasic} from '../TabItem'
import {defaultsTabsNavigation, type TabsNavigationPropsBasic} from '../TabsNavigation'
import type {MotionAxisPropsBasic, MotionAxisPropsInclude} from '../MotionAxis'

type TabsPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type TabsPropsBasic<
  TabItem extends TabItemPropsBasic = TabItemPropsBasic,
  MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic
> = TabsNavigationPropsBasic<TabItem>
  & MotionAxisPropsInclude<MotionAxis>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TabsProps = TabsPropsBasic & TabsPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTabs = {
  ...defaultsTabsNavigation,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
