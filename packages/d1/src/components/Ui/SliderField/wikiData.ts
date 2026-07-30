import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'appearance', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'helperMessage', type: 'string' },
  { name: 'icon', type: 'string' },
  { name: 'iconActive', type: 'string' },
  { name: 'iconTrailing', type: 'string' },
  { name: 'magnet', type: 'boolean' },
  { name: 'marks', type: 'unknown' },
  { name: 'max', type: 'number' },
  { name: 'min', type: 'number' },
  { name: 'minimumDistance', type: 'number' },
  { name: 'modelValue', type: 'SliderValue' },
  { name: 'multiple', type: 'boolean' },
  { name: 'name', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'ripple', type: 'boolean' },
  { name: 'showInput', type: 'boolean' },
  { name: 'showLabel', type: 'boolean' },
  { name: 'showValue', type: 'boolean' },
  { name: 'step', type: 'number' },
  { name: 'text', type: 'string' },
  { name: 'textLeading', type: 'string' },
  { name: 'textTrailing', type: 'string' },
  { name: 'validationMessage', type: 'string' },
  { name: 'value', type: 'SliderValue' },
  { name: 'vertical', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'on-change', properties: [{ name: 'payload', type: 'SliderEventPayload' }] },
  { name: 'on-input', properties: [{ name: 'payload', type: 'SliderEventPayload' }] },
  { name: 'update:modelValue', properties: [{ name: 'value', type: 'SliderValue' }] },
  { name: 'update:value', properties: [{ name: 'value', type: 'SliderValue' }] }
  // :eventsList [!] System label / Системная метка
]

export const SliderFieldWikiData: WikiDataItem = {
  component: 'SliderField',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
