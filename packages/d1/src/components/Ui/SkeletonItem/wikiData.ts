import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'background', type: 'boolean' },
  { name: 'backgroundVariant', type: 'boolean' },
  { name: 'border', type: 'boolean' },
  { name: 'borderVariant', type: 'boolean' },
  { name: 'label', type: 'string | number' },
  { name: 'length', type: 'string | number | [number, number]' },
  { name: 'props', type: 'Record<string, any>' },
  { name: 'tag', type: 'string | any' },
  { name: 'text', type: 'boolean' },
  { name: 'textVariant', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const SkeletonItemWikiData: WikiDataItem = {
  component: 'SkeletonItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
