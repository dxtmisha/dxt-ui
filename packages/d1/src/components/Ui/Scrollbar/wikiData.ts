import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'divider', type: 'boolean' },
  { name: 'dividerBottom', type: 'boolean' },
  { name: 'dividerHide', type: 'boolean' },
  { name: 'dividerTop', type: 'boolean' },
  { name: 'inverse', type: 'boolean' },
  { name: 'standard', type: 'boolean' },
  { name: 'tag', type: 'string' },
  { name: 'visible', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default' }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'bottom', properties: [{ name: 'isBottom', type: 'boolean' }] },
  { name: 'edge', properties: [{ name: 'isTop', type: 'boolean' }, { name: ' isBottom', type: 'boolean' }, { name: ' edge', type: 'ScrollbarEdgeType' }] },
  { name: 'leaveBottom' },
  { name: 'leaveTop' },
  { name: 'reachBottom' },
  { name: 'reachTop' },
  { name: 'top', properties: [{ name: 'isTop', type: 'boolean' }] }
  // :eventsList [!] System label / Системная метка
]

export const ScrollbarWikiData: WikiDataItem = {
  component: 'Scrollbar',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
