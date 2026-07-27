import {
  type StorybookArgsToItem,
  type StorybookArgsToList
} from '../../types/storybookTypes'

import { wikiTableRecord } from './wikiTableRecord'

/**
 * The wikiTableFlexRecord object contains descriptions of all properties for the TableFlexRecord component
 *
 * Объект wikiTableFlexRecord содержит описание всех свойств для компонента TableFlexRecord
 */
export const wikiTableFlexRecord: StorybookArgsToList = {
  'tableFlexRecord.columns': wikiTableRecord['tableRecord.columns'] as StorybookArgsToItem,
  'tableFlexRecord.isHeader': wikiTableRecord['tableRecord.isHeader'] as StorybookArgsToItem,
  'tableFlexRecord.item': wikiTableRecord['tableRecord.item'] as StorybookArgsToItem
}
