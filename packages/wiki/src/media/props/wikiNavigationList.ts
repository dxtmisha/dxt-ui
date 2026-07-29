import type { StorybookArgsToList } from '../../types/storybookTypes'

import { wikiList } from './wikiList'

/**
 * The wikiNavigationList object contains descriptions of all properties for the NavigationList component
 *
 * Объект wikiNavigationList содержит описание всех свойств для компонента NavigationList
 */
export const wikiNavigationList: StorybookArgsToList = {
  'navigationList.focus': wikiList['list.focus'],
  'navigationList.inputSearchAttrs': wikiList['list.inputSearchAttrs'],
  'navigationList.itemAttrs': wikiList['list.itemAttrs'],
  'navigationList.itemGroupAttrs': wikiList['list.itemGroupAttrs'],
  'navigationList.itemManagementAttrs': wikiList['list.itemManagementAttrs'],
  'navigationList.itemMenuAttrs': wikiList['list.itemMenuAttrs'],
  'navigationList.list': wikiList['list.list'],
  'navigationList.lite': wikiList['list.lite'],
  'navigationList.liteThreshold': wikiList['list.liteThreshold'],
  'navigationList.selected': wikiList['list.selected']
}
