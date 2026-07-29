import type { StorybookArgsToList } from '../../types/storybookTypes'

import { wikiListItem } from './wikiListItem'

/**
 * The wikiNavigationRailItem object contains descriptions of all properties for the NavigationRailItem component
 *
 * Объект wikiNavigationRailItem содержит описание всех свойств для компонента NavigationRailItem
 */
export const wikiNavigationRailItem: StorybookArgsToList = {
  'navigationRailItem.listId': wikiListItem['listItem.listId'],
  'navigationRailItem.open': wikiListItem['listItem.open'],
  'navigationRailItem.parent': wikiListItem['listItem.parent'],
  'navigationRailItem.selectedChild': wikiListItem['listItem.selectedChild'],
  'navigationRailItem.type': wikiListItem['listItem.type']
}
