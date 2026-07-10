import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'color', type: 'string' },
  { name: 'focus', type: 'string' },
  { name: 'max', type: 'string | number' },
  { name: 'overlay', type: 'boolean' },
  { name: 'palette', type: 'string' },
  { name: 'showLabel', type: 'boolean' },
  { name: 'value', type: 'string | number | ProgressBarItem | ProgressBarList' }
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

export const ProgressBarWikiData: WikiDataItem = {
  component: 'ProgressBar',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
