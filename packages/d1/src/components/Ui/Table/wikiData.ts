import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'caption', type: 'string | number' },
  { name: 'captionBottom', type: 'boolean' },
  { name: 'captionDecorative', type: 'boolean' },
  { name: 'columns', type: 'string[]' },
  { name: 'columnsWidth', type: 'Record<string, string | number>' },
  { name: 'defaultHeight', type: 'string | number' },
  { name: 'foot', type: 'TableHeader<TableRecordProps> | TableHeaders<TableRecordProps>' },
  { name: 'header', type: 'TableHeader<TableRecordProps> | TableHeaders<TableRecordProps>' },
  { name: 'headerTop', type: 'boolean' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'keyValue', type: 'string' },
  { name: 'lazy', type: 'boolean' },
  { name: 'list', type: '(TableItemProps[] & TableList<TableItemProps>)' },
  { name: 'page', type: 'string | number' },
  { name: 'rows', type: 'string | number' },
  { name: 'search', type: 'string' },
  { name: 'searchColumns', type: 'string[]' },
  { name: 'searchOptions', type: 'SearchOptions' },
  { name: 'selected', type: 'string | string[]' },
  { name: 'sort', type: 'SortColumn' },
  { name: 'sortDir', type: 'string', option: ['asc', 'desc'] },
  { name: 'sortFunction', type: 'SortFunction<TableItemProps>' },
  { name: 'stickyLeft', type: 'string[]' },
  { name: 'stickyScrollBottom', type: 'boolean' },
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
Слот для пользовательского содержимого тела таблицы`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'caption', description: `Caption slot/ Слот заголовка`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'foot', description: `Slot for custom table footer content /
Слот для пользовательского содержимого подвала таблицы`, properties: [{ name: 'props', type: '({ columns: string[]; }) | undefined' }] },
  { name: 'header', description: `Slot for custom table header content /
Слот для пользовательского содержимого шапки таблицы`, properties: [{ name: 'props', type: '({ columns: string[]; }) | undefined' }] },
  { name: 'items', description: `Slot for custom table items content /
Слот для пользовательского содержимого элементов таблицы`, properties: [{ name: 'props', type: '({ columns: string[]; }) | undefined' }] }
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
