import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autosize', type: 'boolean' },
  { name: 'height', type: 'string', option: ['xs', 'sm', 'md', 'lg', 'xl'] },
  { name: 'inputAttrs', type: 'Record<string, any>' },
  { name: 'value', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'input', properties: [{ name: 'event', type: 'InputEvent' }] }
  // :eventsList [!] System label / Системная метка
]

export const TextareaAutosizeWikiData: WikiDataItem = {
  component: 'TextareaAutosize',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
