import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'clock', type: 'boolean' },
  { name: 'disabled', type: 'boolean' },
  { name: 'hour', type: 'number' },
  { name: 'max', type: 'NumberOrString' },
  { name: 'min', type: 'NumberOrString' },
  { name: 'minute', type: 'number' },
  { name: 'modelValue', type: 'number' },
  { name: 'onUpdate:modelValue', type: '((value: number) => void)' },
  { name: 'onUpdate:value', type: '((value: number) => void)' },
  { name: 'palette', type: 'string', option: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white'] },
  { name: 'readonly', type: 'boolean' },
  { name: 'second', type: 'number' },
  { name: 'showTime', type: 'boolean' },
  { name: 'step', type: 'NumberOrString' },
  { name: 'type', type: 'string', option: ['12', '24', 'minute', 'second'] },
  { name: 'value', type: 'number' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default center dial slot / Слот по умолчанию для центрального циферблата`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'item', description: `Custom clock item slot / Слот для пользовательского элемента часов`, properties: [{ name: 'props', type: '(ClockDialMarkSlot) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'change', description: `Change event triggered on interaction end / Событие изменения, вызываемое при завершении взаимодействия`, properties: [{ name: 'event', type: 'ClockDialEventItem' }, { name: 'value', type: 'number' }] },
  { name: 'changeLite', description: `Change event lite version / Упрощенная версия события изменения`, properties: [{ name: 'value', type: 'number' }] },
  { name: 'input', description: `Input event triggered on selection change / Событие ввода, вызываемое при изменении выбора`, properties: [{ name: 'event', type: 'ClockDialEventItem' }, { name: 'value', type: 'number' }] },
  { name: 'inputLite', description: `Input event lite version / Упрощенная версия события ввода`, properties: [{ name: 'value', type: 'number' }] },
  { name: 'update:modelValue', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'number' }] },
  { name: 'update:value', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'number' }] }
  // :eventsList [!] System label / Системная метка
]

export const ClockDialWikiData: WikiDataItem = {
  component: 'ClockDial',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
