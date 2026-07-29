import type { StorybookArgsToList } from '../../types/storybookTypes'

import { wikiList } from './wikiList'

/**
 * The wikiNavigationRail object contains descriptions of all properties for the NavigationRail component
 *
 * Объект wikiNavigationRail содержит описание всех свойств для компонента NavigationRail
 */
export const wikiNavigationRail: StorybookArgsToList = {
  'navigationRail.focus': wikiList['list.focus'],
  'navigationRail.itemAttrs': wikiList['list.itemAttrs'],
  'navigationRail.itemManagementAttrs': wikiList['list.itemManagementAttrs'],
  'navigationRail.itemMenuAttrs': wikiList['list.itemMenuAttrs'],
  'navigationRail.list': wikiList['list.list'],
  'navigationRail.selected': wikiList['list.selected']
}
