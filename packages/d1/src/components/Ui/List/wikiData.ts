import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'ariaMultiselectable', type: 'boolean | undefined' },
  { name: 'axis', type: 'string', option: ['x', 'y'] },
  { name: 'control', type: 'boolean | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'divider', type: 'boolean | undefined' },
  { name: 'filterMode', type: 'boolean | undefined' },
  { name: 'focus', type: 'NumberOrStringOrBoolean | undefined' },
  { name: 'highlight', type: 'string | undefined' },
  { name: 'highlightLengthStart', type: 'number | undefined' },
  { name: 'iconArrowDown', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconArrowRight', type: 'IconValue<IconProps> | undefined' },
  { name: 'itemAttrs', type: 'ConstrBind<ListItemProps> | undefined' },
  { name: 'itemGroupAttrs', type: 'ConstrBind<ListItemProps> | undefined' },
  { name: 'itemManagementAttrs', type: 'ConstrBind<ListItemProps> | undefined' },
  { name: 'itemMenuAttrs', type: 'ConstrBind<ListItemProps> | undefined' },
  { name: 'keyLabel', type: 'string | undefined' },
  { name: 'keyValue', type: 'string | undefined' },
  { name: 'list', type: 'ListRecord<ListItemProps> | undefined' },
  { name: 'lite', type: 'boolean | undefined' },
  { name: 'liteThreshold', type: 'number | undefined' },
  { name: 'max', type: 'string | number | undefined' },
  { name: 'role', type: 'string | undefined' },
  { name: 'roleItem', type: 'string | undefined' },
  { name: 'selected', type: 'ListSelectedList | undefined' },
  { name: 'tabindex', type: 'string | number | undefined' },
  { name: 'tag', type: 'string | undefined', option: ['div', 'button', 'a', 'span'] }
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
