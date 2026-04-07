import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'behavior', type: 'string', option: ['auto', 'instant', 'smooth'] },
  { name: 'block', type: 'string', option: ['center', 'end', 'nearest', 'start'] },
  { name: 'delayHide', type: 'number' },
  { name: 'hide', type: 'boolean' },
  { name: 'iconContentCopy', type: 'IconValue<Icon>' },
  { name: 'iconLink', type: 'IconValue<Icon>' },
  { name: 'iconTag', type: 'IconValue<Icon>' },
  { name: 'inline', type: 'string', option: ['center', 'end', 'nearest', 'start'] },
  { name: 'isCopy', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'name', type: 'string' },
  { name: 'shift', type: 'NumberOrString' },
  { name: 'textCopiedClipboard', type: 'TextValue' },
  { name: 'tooltipAttrs', type: 'ConstrBind<Tooltip>' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию` }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const AnchorWikiData: WikiDataItem = {
  component: 'Anchor',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
