import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'disappears', type: 'boolean' },
  { name: 'scrollElement', type: 'string | ElementOrWindow' },
  { name: 'tag', type: 'string' },
  { name: 'transformThreshold', type: 'number' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'headroomScroll', properties: [{ name: 'value', type: 'number' }, { name: 'isSticky', type: 'boolean' }] },
  { name: 'headroomSticky', properties: [{ name: 'isSticky', type: 'boolean' }] }
  // :eventsList [!] System label / Системная метка
]

export const HeadroomWikiData: WikiDataItem = {
  component: 'Headroom',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
