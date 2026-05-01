import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string | undefined', option: ['center', 'left', 'right'] },
  { name: 'check', type: 'FieldPatternItemOrFunction | undefined' },
  { name: 'currency', type: 'string | undefined' },
  { name: 'currencyHide', type: 'boolean | undefined' },
  { name: 'dir', type: 'string | undefined', option: ['ltr', 'rtl'] },
  { name: 'fraction', type: 'MaskFractionItem | undefined' },
  { name: 'fullOnly', type: 'boolean | undefined' },
  { name: 'groupSave', type: 'boolean | undefined' },
  { name: 'inputAttrs', type: 'Partial<HTMLInputElement> | undefined' },
  { name: 'language', type: 'string | undefined' },
  { name: 'mask', type: 'MaskList | undefined' },
  { name: 'match', type: 'MaskMatchItem | undefined' },
  { name: 'name', type: 'string | undefined' },
  { name: 'pattern', type: 'FieldPatternItemOrFunction | undefined' },
  { name: 'special', type: 'MaskSpecialProp | undefined' },
  { name: 'type', type: 'string', option: ['number', 'full', 'datetime', 'date', 'year-month', 'year', 'month', 'day', 'day-month', 'time', 'hour-minute', 'hour', 'minute', 'second', 'text', 'number-format', 'currency'] },
  { name: 'value', type: 'string | number | undefined' },
  { name: 'valueDefault', type: 'string | number | undefined' },
  { name: 'view', type: 'string | undefined' },
  { name: 'visible', type: 'boolean | undefined' },
  { name: 'visiblePartly', type: 'boolean | undefined' }
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
