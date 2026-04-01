import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'delay', type: 'number' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default' }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'hide', properties: [{ name: 'value', type: 'string' }, { name: 'item', type: 'SnackbarValue' }] },
  { name: 'show', properties: [{ name: 'value', type: 'string' }, { name: 'item', type: 'SnackbarValue' }] }
  // :eventsList [!] System label / Системная метка
]

export const SnackbarWikiData: WikiDataItem = {
  component: 'Snackbar',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
