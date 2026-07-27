import {
  type StorybookArgsToItem,
  type StorybookArgsToList
} from '../../types/storybookTypes'

import { wikiTable } from './wikiTable'

/**
 * The wikiTableFlex object contains descriptions of all properties for the TableFlex component
 *
 * Объект wikiTableFlex содержит описание всех свойств для компонента TableFlex
 */
export const wikiTableFlex: StorybookArgsToList = {
  'tableFlex.caption': wikiTable['table.caption'] as StorybookArgsToItem,
  'tableFlex.captionBottom': wikiTable['table.captionBottom'] as StorybookArgsToItem,
  'tableFlex.columns': wikiTable['table.columns'] as StorybookArgsToItem,
  'tableFlex.columnsWidth': wikiTable['table.columnsWidth'] as StorybookArgsToItem,
  'tableFlex.foot': wikiTable['table.foot'] as StorybookArgsToItem,
  'tableFlex.header': wikiTable['table.header'] as StorybookArgsToItem,
  'tableFlex.headerTop': wikiTable['table.headerTop'] as StorybookArgsToItem,
  'tableFlex.list': wikiTable['table.list'] as StorybookArgsToItem,
  'tableFlex.rows': wikiTable['table.rows'] as StorybookArgsToItem,
  'tableFlex.selected': wikiTable['table.selected'] as StorybookArgsToItem
}
