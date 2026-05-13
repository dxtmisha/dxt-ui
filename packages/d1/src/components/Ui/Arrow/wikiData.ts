import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'elementTarget', type: 'string | HTMLElement | undefined' },
  { name: 'inverse', type: 'boolean | undefined' },
  { name: 'position', type: 'string', option: ['auto', 'top', 'bottom', 'left', 'right'] },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg'] }
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

export const ArrowWikiData: WikiDataItem = {
  component: 'Arrow',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
