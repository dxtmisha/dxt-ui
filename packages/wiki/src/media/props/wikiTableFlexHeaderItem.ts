import {
  type StorybookArgsToItem,
  type StorybookArgsToList
} from '../../types/storybookTypes'

import { wikiTableHeaderItem } from './wikiTableHeaderItem'

/**
 * The wikiTableFlexHeaderItem object contains descriptions of all properties for the TableFlexHeaderItem component
 *
 * Объект wikiTableFlexHeaderItem содержит описание всех свойств для компонента TableFlexHeaderItem
 */
export const wikiTableFlexHeaderItem: StorybookArgsToList = {
  'tableFlexHeaderItem.scope': wikiTableHeaderItem['tableHeaderItem.scope'] as StorybookArgsToItem
}
