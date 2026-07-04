import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'disabled', type: 'boolean' },
  { name: 'error', type: 'boolean' },
  { name: 'hide', type: 'boolean' },
  { name: 'index', type: 'NumberOrString' },
  { name: 'inputMode', type: 'string', option: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'] },
  { name: 'match', type: 'RegExp' },
  { name: 'move', type: 'boolean' },
  { name: 'placeholder', type: 'string' },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg', 'display'] },
  { name: 'success', type: 'boolean' },
  { name: 'textSymbol', type: 'TextValue' }
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

export const InputCodeItemWikiData: WikiDataItem = {
  component: 'InputCodeItem',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
