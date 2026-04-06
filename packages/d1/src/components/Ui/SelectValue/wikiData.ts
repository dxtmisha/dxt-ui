import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'chipAttrs', type: 'ConstrBind<ChipPropsBasic>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'iconAttrs', type: 'ConstrBind<IconPropsBasic>' },
  { name: 'iconCancel', type: 'IconValue<IconPropsBasic>' },
  { name: 'iconShow', type: 'boolean' },
  { name: 'multiple', type: 'boolean' },
  { name: 'placeholder', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'value', type: 'ListList' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] }
  // :eventsList [!] System label / Системная метка
]

export const SelectValueWikiData: WikiDataItem = {
  component: 'SelectValue',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
