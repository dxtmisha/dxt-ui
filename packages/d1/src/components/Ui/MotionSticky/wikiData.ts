import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'classActivity', type: 'string' },
  { name: 'elementScroll', type: 'string | HTMLElement | Window' },
  { name: 'tag', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Slot for default content / Слот для основного содержимого`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'sticky', description: `Event triggered when sticky status changes / Событие при изменении статуса прикрепления`, properties: [{ name: 'status', type: 'boolean' }] }
  // :eventsList [!] System label / Системная метка
]

export const MotionStickyWikiData: WikiDataItem = {
  component: 'MotionSticky',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
