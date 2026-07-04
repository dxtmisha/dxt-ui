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
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'match', type: 'RegExp' },
  { name: 'move', type: 'boolean' },
  { name: 'name', type: 'string' },
  { name: 'placeholder', type: 'string' },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg', 'display'] },
  { name: 'success', type: 'boolean' },
  { name: 'tabindex', type: 'string | number' },
  { name: 'textSymbol', type: 'TextValue' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'backspace', description: `Event triggered on backspace / Событие, вызываемое при нажатии Backspace`, properties: [{ name: 'index', type: 'NumberOrString | undefined' }] },
  { name: 'focus', description: `Event triggered on focus / Событие, вызываемое при фокусе`, properties: [{ name: 'index', type: 'NumberOrString | undefined' }] },
  { name: 'input', description: `Event triggered on input / Событие, вызываемое при вводе`, properties: [{ name: 'index', type: 'NumberOrString | undefined' }, { name: 'value', type: 'string' }] },
  { name: 'paste', description: `Event triggered on paste / Событие, вызываемое при вставке`, properties: [{ name: 'index', type: 'NumberOrString | undefined' }, { name: 'value', type: 'string' }] }
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
