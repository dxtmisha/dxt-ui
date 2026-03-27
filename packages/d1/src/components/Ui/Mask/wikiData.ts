import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['center', 'left', 'right'] },
  { name: 'check', type: 'FieldPatternItemOrFunction' },
  { name: 'currency', type: 'string' },
  { name: 'currencyHide', type: 'boolean' },
  { name: 'dir', type: 'string', option: ['ltr', 'rtl'] },
  { name: 'fraction', type: 'MaskFractionItem' },
  { name: 'fullOnly', type: 'boolean' },
  { name: 'groupSave', type: 'boolean' },
  { name: 'inputAttrs', type: 'Partial<HTMLInputElement>' },
  { name: 'language', type: 'string' },
  { name: 'mask', type: 'MaskList' },
  { name: 'match', type: 'MaskMatchItem' },
  { name: 'name', type: 'string' },
  { name: 'pattern', type: 'FieldPatternItemOrFunction' },
  { name: 'special', type: 'MaskSpecialProp' },
  { name: 'type', type: 'string', option: ['number', 'full', 'datetime', 'date', 'year-month', 'year', 'month', 'day', 'day-month', 'time', 'hour-minute', 'hour', 'minute', 'second', 'text', 'number-format', 'currency'] },
  { name: 'value', type: 'string | number' },
  { name: 'valueDefault', type: 'string | number' },
  { name: 'view', type: 'string' },
  { name: 'visible', type: 'boolean' },
  { name: 'visiblePartly', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'beforeinput', properties: [{ name: 'event', type: 'InputEvent' }] },
  { name: 'blur', properties: [{ name: 'event', type: 'FocusEvent' }] },
  { name: 'change', properties: [{ name: 'event', type: 'InputEvent' }, { name: ' value', type: 'FieldValidationItem' }] },
  { name: 'changeLite', properties: [{ name: 'value', type: 'FieldValidationItem' }] },
  { name: 'focus', properties: [{ name: 'event', type: 'FocusEvent' }] },
  { name: 'input', properties: [{ name: 'event', type: 'InputEvent' }, { name: ' value', type: 'FieldValidationItem' }] },
  { name: 'inputLite', properties: [{ name: 'value', type: 'FieldValidationItem' }] },
  { name: 'keydown', properties: [{ name: 'event', type: 'KeyboardEvent' }] },
  { name: 'keyup', properties: [{ name: 'event', type: 'KeyboardEvent' }] },
  { name: 'paste', properties: [{ name: 'event', type: 'ClipboardEvent' }] },
  { name: 'reset', properties: [{ name: 'event', type: 'Event' }] }
  // :eventsList [!] System label / Системная метка
]

export const MaskWikiData: WikiDataItem = {
  component: 'Mask',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
