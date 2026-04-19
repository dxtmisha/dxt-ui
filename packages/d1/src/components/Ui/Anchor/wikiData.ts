import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'behavior', type: 'string', option: ['auto', 'instant', 'smooth'] },
  { name: 'block', type: 'string', option: ['center', 'end', 'nearest', 'start'] },
  { name: 'delayHide', type: 'number | undefined' },
  { name: 'hide', type: 'boolean | undefined' },
  { name: 'iconContentCopy', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconLink', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconTag', type: 'IconValue<IconProps> | undefined' },
  { name: 'inline', type: 'string', option: ['center', 'end', 'nearest', 'start'] },
  { name: 'isCopy', type: 'boolean | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'name', type: 'string | undefined' },
  { name: 'shift', type: 'NumberOrString | undefined' },
  { name: 'textCopiedClipboard', type: 'TextValue' },
  { name: 'tooltipAttrs', type: 'ConstrBind<TooltipProps> | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] }
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
