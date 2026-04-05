import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'boolean' },
  { name: 'adaptiveAlways', type: 'boolean' },
  { name: 'adaptiveGroup', type: 'string' },
  { name: 'alt', type: 'string' },
  { name: 'coordinator', type: 'number[] | any' },
  { name: 'disabled', type: 'boolean' },
  { name: 'fetchPriority', type: 'string', option: ['auto', 'high', 'low'] },
  { name: 'hide', type: 'boolean' },
  { name: 'lazy', type: 'boolean' },
  { name: 'objectHeight', type: 'string | number' },
  { name: 'objectWidth', type: 'string | number' },
  { name: 'picture', type: 'ImagePicture' },
  { name: 'preloadOffset', type: 'string' },
  { name: 'size', type: 'string', option: ['auto', 'contain', 'cover'] },
  { name: 'srcset', type: 'string | Record<string, string>' },
  { name: 'tagImg', type: 'boolean' },
  { name: 'turn', type: 'boolean' },
  { name: 'url', type: 'string' },
  { name: 'value', type: 'string | any' },
  { name: 'x', type: 'string | number' },
  { name: 'y', type: 'string | number' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'load', properties: [{ name: 'image', type: 'ImageEventData' }] }
  // :eventsList [!] System label / Системная метка
]

export const ImageWikiData: WikiDataItem = {
  component: 'Image',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
