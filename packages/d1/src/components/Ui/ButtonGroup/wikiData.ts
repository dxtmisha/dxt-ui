import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'area', type: 'string' },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'list', type: 'ConstrBind<ButtonProps>[]' },
  { name: 'orientation', type: 'string', option: ['horizontal', 'vertical'] },
  { name: 'wrap', type: 'boolean' }
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

export const ButtonGroupWikiData: WikiDataItem = {
  component: 'ButtonGroup',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
