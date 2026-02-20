import {
  type StorybookArgsToItem,
  type StorybookArgsToList
} from '../../types/storybookTypes'

import { wikiTabsNavigation } from './wikiTabsNavigation'

/**
 * The wikiTabs object contains descriptions of all properties for the Tabs component
 *
 * Объект wikiTabs содержит описание всех свойств для компонента Tabs
 */
export const wikiTabs: StorybookArgsToList = {
  'tabs.selected': wikiTabsNavigation['tabsNavigation.selected'] as StorybookArgsToItem
}
