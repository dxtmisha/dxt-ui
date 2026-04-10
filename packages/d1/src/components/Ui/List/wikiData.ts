import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ariaMultiselectable', type: 'boolean' },
  { name: 'axis', type: 'string', option: ['x', 'y'] },
  { name: 'control', type: 'boolean' },
  { name: 'disabled', type: 'boolean' },
  { name: 'divider', type: 'boolean' },
  { name: 'filterMode', type: 'boolean' },
  { name: 'focus', type: 'NumberOrStringOrBoolean' },
  { name: 'highlight', type: 'string' },
  { name: 'highlightLengthStart', type: 'number' },
  { name: 'iconArrowDown', type: 'IconValue<Icon>' },
  { name: 'iconArrowRight', type: 'IconValue<Icon>' },
  { name: 'itemAttrs', type: 'ConstrBind<ListItem>' },
  { name: 'itemGroupAttrs', type: 'ConstrBind<ListItem>' },
  { name: 'itemManagementAttrs', type: 'ConstrBind<ListItem>' },
  { name: 'itemMenuAttrs', type: 'ConstrBind<ListItem>' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ListRecord<any>' },
  { name: 'lite', type: 'boolean' },
  { name: 'liteThreshold', type: 'number' },
  { name: 'max', type: 'string | number' },
  { name: 'role', type: 'string' },
  { name: 'roleItem', type: 'string' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'tabindex', type: 'string | number' },
  { name: 'tag', type: 'string', option: ['div', 'button', 'a', 'span'] }
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
  { name: 'close', description: `Event for closing the list/ Событие закрытия списка` }
  // :eventsList [!] System label / Системная метка
]

export const ListWikiData: WikiDataItem = {
  component: 'List',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
