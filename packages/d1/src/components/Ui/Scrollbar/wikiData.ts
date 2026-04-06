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
  { name: 'default', description: `Slot for default scrollbar content/ Слот для основного содержимого скроллбара` }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'bottom', description: `Event triggered when reaching the bottom/ Событие при достижении низа`, properties: [{ name: 'isBottom', type: 'boolean' }] },
  { name: 'edge', description: `Event triggered when reaching any edge/ Событие при достижении любого края`, properties: [{ name: 'isTop', type: 'boolean' }, { name: 'isBottom', type: 'boolean' }, { name: 'edge', type: 'ScrollbarEdgeType' }] },
  { name: 'leaveBottom', description: `Event triggered when leaving the bottom position/ Событие при уходе с нижней позиции` },
  { name: 'leaveTop', description: `Event triggered when leaving the top position/ Событие при уходе с верхней позиции` },
  { name: 'reachBottom', description: `Event triggered when precisely reaching the bottom position/ Событие при точном достижении нижней позиции` },
  { name: 'reachTop', description: `Event triggered when precisely reaching the top position/ Событие при точном достижении верхней позиции` },
  { name: 'top', description: `Event triggered when reaching the top/ Событие при достижении верха`, properties: [{ name: 'isTop', type: 'boolean' }] }
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
