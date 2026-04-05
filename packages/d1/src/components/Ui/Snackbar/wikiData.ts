import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'all', type: 'boolean' },
  { name: 'delay', type: 'number' },
  { name: 'full', type: 'boolean' },
  { name: 'horizontal', type: 'string', option: ['right', 'left', 'block'] },
  { name: 'limit', type: 'string', option: ['1', '2', '4', '6', '8'] },
  { name: 'origin', type: 'string', option: ['topToBottom', 'bottomToTop', 'rightToLeft', 'leftToRight'] },
  { name: 'vertical', type: 'string', option: ['top', 'bottom'] }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'hide', description: `Event triggered when notification is hidden/ Событие при скрытии уведомления`, properties: [{ name: 'value', type: 'string' }, { name: 'item', type: 'SnackbarValue' }] },
  { name: 'show', description: `Event triggered when notification is shown/ Событие при показе уведомления`, properties: [{ name: 'value', type: 'string' }, { name: 'item', type: 'SnackbarValue' }] }
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
