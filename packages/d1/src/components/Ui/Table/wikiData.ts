import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'columns', type: 'string[]' },
  { name: 'disabled', type: 'boolean' },
  { name: 'fixWidth', type: 'string' },
  { name: 'hasHorizontalScroll', type: 'boolean' },
  { name: 'header', type: 'string[] | Record<string, TableRecordValue<TableItemPropsBasic>>' },
  { name: 'headerTop', type: 'boolean' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'any[]' },
  { name: 'selected', type: '(false & string[]) | (true & string[])' },
  { name: 'tableItemAttrs', type: 'ConstrBind<TableItemPropsBasic>' },
  { name: 'tableItemColumnAttrs', type: 'Record<string, ConstrBind<TableItemPropsBasic>>' },
  { name: 'tableRecordAttrs', type: 'ConstrBind<TableRecordPropsBasic<TableItemPropsBasic>>' },
  { name: 'tableRowAttrs', type: 'Record<string, ConstrBind<TableRecordPropsBasic<TableItemPropsBasic>>>' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', description: `Slot for custom table body content /
Слот для пользовательского содержимого тела таблицы`, properties: [{ name: 'props', type: '({ columns: string[]; }) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const TableWikiData: WikiDataItem = {
  component: 'Table',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
