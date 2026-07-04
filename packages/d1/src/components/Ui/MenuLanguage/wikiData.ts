import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'disabled', type: 'boolean' },
  { name: 'isSelectedByValue', type: 'boolean' },
  { name: 'language', type: 'string' },
  { name: 'list', type: 'string[]' },
  { name: 'menuAttrs', type: 'ConstrBind<MenuProps>' },
  { name: 'modelSelected', type: 'ListSelectedList' },
  { name: 'onUpdate:modelSelected', type: '((value: ListSelectedList) => void)' },
  { name: 'onUpdate:selected', type: '((value: ListSelectedList) => void)' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'showPhoneCode', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'contextBottom', description: `Context slot for bottom area / Слот контекстной области снизу`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'contextTop', description: `Context slot for top area / Слот контекстной области сверху`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'control', description: `Control slot for window management / Слот управления для управления окном`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'footer', description: `Footer slot for window bottom/ Слот подвала для низа окна`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'title', description: `Title slot for window title/ Слот заголовка для заголовка окна`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] }
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

export const MenuLanguageWikiData: WikiDataItem = {
  component: 'MenuLanguage',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
