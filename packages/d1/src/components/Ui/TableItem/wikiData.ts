import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['left', 'center', 'right'] },
  { name: 'alignVertical', type: 'string', option: ['center', 'top', 'bottom'] },
  { name: 'colspan', type: 'string | number' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'dividerX', type: 'boolean' },
  { name: 'dividerY', type: 'boolean' },
  { name: 'index', type: 'string' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'keyItem', type: 'string' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelClamp', type: 'boolean' },
  { name: 'labelId', type: 'string' },
  { name: 'rowspan', type: 'string | number' },
  { name: 'selected', type: 'boolean' },
  { name: 'stickyLeft', type: 'boolean' },
  { name: 'stickyTop', type: 'boolean' },
  { name: 'tag', type: 'string' },
  { name: 'value', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'context', description: `Slot for custom cell context / Слот для пользовательского контекста ячейки`, properties: [{ name: 'props', type: '(() => any) | undefined' }] },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const TableItemWikiData: WikiDataItem = {
  component: 'TableItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
