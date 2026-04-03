import type { ConstrBind, ListRecord, ListSelectedList } from '@dxtmisha/functional'

import type { TabItemPropsBasic } from '../TabItem'
import type { HorizontalScrollPropsInclude } from '../HorizontalScroll'

import type { ModelPropsSelected } from '../../types/modelTypes'

type TabsNavigationPropsToken = {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

export type TabsNavigationPropsBasic<
  TabItem extends TabItemPropsBasic = TabItemPropsBasic
> = HorizontalScrollPropsInclude
  & ModelPropsSelected<ListSelectedList>
  & {
    /** Status/ Статусы */
    /** List of selected values/ Список выбранных значений */
    selected?: ListSelectedList

    /** Value/ Значения */
    /** List of tab items/ Список элементов вкладок */
    list?: ListRecord<TabItem>

    /** Style/ Стили */
    /** HTML tag for the tabs navigation/ HTML-тег для навигации вкладок */
    tag?: TabItem['tag']

    /** Options/ Опции */
    /** Key for the label/ Ключ для подписи */
    keyLabel?: string
    /** Key for the value/ Ключ для значения */
    keyValue?: string

    /** Attributes/ Атрибуты */
    /** Additional attributes for each tab item/ Дополнительные атрибуты для каждого элемента вкладки */
    itemAttrs?: ConstrBind<TabItem>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TabsNavigationProps = TabsNavigationPropsBasic & TabsNavigationPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsTabsNavigation = {
  horizontalScrollFlush: true,
  horizontalScrollAlign: 'left',
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
