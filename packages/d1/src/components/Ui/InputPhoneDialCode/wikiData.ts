import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonProps>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'iconArrowDown', type: 'IconValue<IconProps>' },
  { name: 'labelType', type: 'string', option: ['name', 'none', 'code'] },
  { name: 'menuCountryAttrs', type: 'ConstrBind<MenuCountryProps>' },
  { name: 'modelSelected', type: 'ListSelectedList' },
  { name: 'onUpdate:modelSelected', type: '((value: ListSelectedList) => void)' },
  { name: 'onUpdate:selected', type: '((value: ListSelectedList) => void)' },
  { name: 'value', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'update:modelSelected', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'string' }] },
  { name: 'update:selected', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'string' }] },
  { name: 'updateValue', description: `Event for updating the value/ Событие обновления значения`, properties: [{ name: 'value?', type: 'NumberOrStringOrBoolean | undefined' }] }
  // :eventsList [!] System label / Системная метка
]

export const InputPhoneDialCodeWikiData: WikiDataItem = {
  component: 'InputPhoneDialCode',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
