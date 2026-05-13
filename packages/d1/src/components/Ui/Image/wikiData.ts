import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'boolean | undefined' },
  { name: 'adaptiveAlways', type: 'boolean | undefined' },
  { name: 'adaptiveGroup', type: 'string | undefined' },
  { name: 'alt', type: 'string | undefined' },
  { name: 'coordinator', type: 'number[] | any' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'fetchPriority', type: 'string', option: ['auto', 'high', 'low'] },
  { name: 'hide', type: 'boolean | undefined' },
  { name: 'lazy', type: 'boolean | undefined' },
  { name: 'objectHeight', type: 'string | number | undefined' },
  { name: 'objectWidth', type: 'string | number | undefined' },
  { name: 'picture', type: 'ImagePicture | undefined' },
  { name: 'preloadOffset', type: 'string | undefined' },
  { name: 'size', type: 'string', option: ['auto', 'contain', 'cover'] },
  { name: 'srcset', type: 'string | Record<string, string> | undefined' },
  { name: 'tagImg', type: 'boolean | undefined' },
  { name: 'turn', type: 'boolean | undefined' },
  { name: 'url', type: 'string | undefined' },
  { name: 'value', type: 'string | any' },
  { name: 'x', type: 'string | number | undefined' },
  { name: 'y', type: 'string | number | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'load', description: `Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`, properties: [{ name: 'image', type: 'ImageEventData' }] }
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
