import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'counter', type: 'string | number | undefined' },
  { name: 'id', type: 'string | undefined' },
  { name: 'maxlength', type: 'string | number | undefined' },
  { name: 'maxlengthOnce', type: 'string | number | undefined' },
  { name: 'template', type: 'string | undefined' },
  { name: 'textCharacterLimit', type: 'TextValue' },
  { name: 'textCharacterRemaining', type: 'TextValue' }
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

export const FieldCounterWikiData: WikiDataItem = {
  component: 'FieldCounter',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
