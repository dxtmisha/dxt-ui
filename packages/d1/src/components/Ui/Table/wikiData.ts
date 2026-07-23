import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'columns', type: 'string[]' },
  { name: 'disabled', type: 'boolean' },
  { name: 'header', type: 'TableHeader<TableRecordProps> | TableHeaders<TableRecordProps>' },
  { name: 'headerTop', type: 'boolean' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'TableList<TableItemProps>' },
  { name: 'scrollBottomSticky', type: 'boolean' },
  { name: 'selected', type: 'string | string[]' },
  { name: 'stickyLeft', type: 'string[]' },
  { name: 'stickyTop', type: 'string[]' },
  { name: 'tableItemAttrs', type: 'ConstrBind<TableItemProps>' },
  { name: 'tableItemColumnAttrs', type: 'Record<string, ConstrBind<TableItemProps>>' },
  { name: 'tableRecordAttrs', type: 'ConstrBind<TableRecordPropsBasic<TableItemProps, TableRecordProps>>' },
  { name: 'tableRowAttrs', type: 'Record<string, ConstrBind<TableRecordPropsBasic<TableItemProps, TableRecordProps>>>' }
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
