import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'chipAttrs', type: 'ConstrBind<ChipPropsBasic>' },
  { name: 'iconWhenSelected', type: 'boolean' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ChipGroupData' },
  { name: 'modelSelected', type: 'ListSelectedList' },
  { name: 'onUpdate:modelSelected', type: '(value: ListSelectedList) => void' },
  { name: 'onUpdate:selected', type: '(value: ListSelectedList) => void' },
  { name: 'readonly', type: 'boolean' },
  { name: 'selected', type: 'ListSelectedList' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Slot for displaying a custom list of chips/ Слот для отображения пользовательского списка чипов` }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'update:modelSelected', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'ListSelectedList' }] },
  { name: 'update:selected', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'ListSelectedList' }] }
  // :eventsList [!] System label / Системная метка
]

export const ChipGroupWikiData: WikiDataItem = {
  component: 'ChipGroup',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
