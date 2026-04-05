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
  { name: 'beforeinput', description: `Event triggered before input/ Событие перед вводом`, properties: [{ name: 'event', type: 'InputEvent' }] },
  { name: 'blur', description: `Event triggered on blur/ Событие при потере фокуса`, properties: [{ name: 'event', type: 'FocusEvent' }] },
  { name: 'change', description: `Event triggered on change/ Событие при изменении`, properties: [{ name: 'event', type: 'InputEvent' }, { name: 'value', type: 'FieldValidationItem' }] },
  { name: 'changeLite', description: `Event triggered on simplified change/ Событие при упрощенном изменении`, properties: [{ name: 'value', type: 'FieldValidationItem' }] },
  { name: 'focus', description: `Event triggered on focus/ Событие при фокусе`, properties: [{ name: 'event', type: 'FocusEvent' }] },
  { name: 'input', description: `Event triggered on input/ Событие при вводе`, properties: [{ name: 'event', type: 'InputEvent' }, { name: 'value', type: 'FieldValidationItem' }] },
  { name: 'inputLite', description: `Event triggered on simplified input/ Событие при упрощенном вводе`, properties: [{ name: 'value', type: 'FieldValidationItem' }] },
  { name: 'keydown', description: `Event triggered on key down/ Событие при нажатии клавиши`, properties: [{ name: 'event', type: 'KeyboardEvent' }] },
  { name: 'keyup', description: `Event triggered on key up/ Событие при отпускании клавиши`, properties: [{ name: 'event', type: 'KeyboardEvent' }] },
  { name: 'paste', description: `Event triggered on paste/ Событие при вставке`, properties: [{ name: 'event', type: 'ClipboardEvent' }] },
  { name: 'reset', description: `Event triggered on reset/ Событие при сбросе`, properties: [{ name: 'event', type: 'Event' }] }
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
