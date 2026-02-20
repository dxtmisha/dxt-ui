import type { ListSelectedList } from '@dxtmisha/functional'

import type { TabItemPropsBasic } from '../TabItem'
import { type TabsNavigationPropsBasic, type TabsNavigationPropsInclude } from '../TabsNavigation'
import type { MotionAxisPropsBasic, MotionAxisPropsInclude } from '../MotionAxis'

import type { ModelPropsSelected } from '../../types/modelTypes'

type TabsPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type TabsPropsBasic<
  TabItem extends TabItemPropsBasic = TabItemPropsBasic,
  TabsNavigation extends TabsNavigationPropsBasic = TabsNavigationPropsBasic,
  MotionAxis extends MotionAxisPropsBasic = MotionAxisPropsBasic
> = TabsNavigationPropsInclude<TabItem, TabsNavigation>
  & MotionAxisPropsInclude<MotionAxis>
  & ModelPropsSelected<ListSelectedList>

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
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
