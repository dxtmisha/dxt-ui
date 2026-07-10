import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'columns', type: 'string[]' },
  { name: 'disabled', type: 'boolean' },
  { name: 'index', type: 'string' },
  { name: 'isHeader', type: 'boolean' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'item', type: 'Record<string, any>' },
  { name: 'selected', type: 'boolean' },
  { name: 'tableItemAttrs', type: 'ConstrBind<TableItemProps>' },
  { name: 'tableItemColumnAttrs', type: 'Record<string, ConstrBind<TableItemProps>>' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const TableRecordWikiData: WikiDataItem = {
  component: 'TableRecord',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
