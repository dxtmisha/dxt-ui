import type { StorybookArgsToList } from '../../types/storybookTypes'

import { wikiListItem } from './wikiListItem'

/**
 * The wikiNavigationItem object contains descriptions of all properties for the NavigationItem component
 *
 * Объект wikiNavigationItem содержит описание всех свойств для компонента NavigationItem
 */
export const wikiNavigationItem: StorybookArgsToList = {
  'navigationItem.isItemMenu': wikiListItem['listItem.isItemMenu'],
  'navigationItem.isMenu': wikiListItem['listItem.isMenu'],
  'navigationItem.listId': wikiListItem['listItem.listId'],
  'navigationItem.open': wikiListItem['listItem.open'],
  'navigationItem.parent': wikiListItem['listItem.parent'],
  'navigationItem.search': wikiListItem['listItem.search'],
  'navigationItem.selectedChild': wikiListItem['listItem.selectedChild'],
  'navigationItem.type': wikiListItem['listItem.type']
}
