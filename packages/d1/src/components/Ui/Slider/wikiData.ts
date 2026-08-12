import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'disabled', type: 'boolean' },
  { name: 'inputAttrs', type: 'Partial<HTMLInputElement>' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'magnet', type: 'boolean' },
  { name: 'marks', type: 'ListRecord<SliderMarkItem> | number[]' },
  { name: 'max', type: 'NumberOrString' },
  { name: 'min', type: 'NumberOrString' },
  { name: 'minimumDistance', type: 'NumberOrString' },
  { name: 'modelValue', type: 'string' },
  { name: 'multiple', type: 'boolean' },
  { name: 'name', type: 'string' },
  { name: 'onUpdate:modelValue', type: '((value: string) => void)' },
  { name: 'onUpdate:value', type: '((value: string) => void)' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'showThumbLabel', type: 'boolean' },
  { name: 'step', type: 'NumberOrString' },
  { name: 'value', type: 'SliderValueProp' },
  { name: 'vertical', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'mark', description: `Slot for mark custom rendering / Слот для пользовательского рендеринга метки`, properties: [{ name: 'props', type: '(SliderMarkSlot) | undefined' }] },
  { name: 'maxLabel', description: `Slot for max thumb label / Слот для метки максимального ползунка`, properties: [{ name: 'props', type: '(SliderThumbSlot) | undefined' }] },
  { name: 'minLabel', description: `Slot for min thumb label / Слот для метки минимального ползунка`, properties: [{ name: 'props', type: '(SliderThumbSlot) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'change', description: `Emitted on slider value commit / Срабатывает при подтверждении значения слайдера`, properties: [{ name: 'detail', type: 'SliderEventDetail' }] },
  { name: 'changeLite', description: `Emitted on slider value commit (lite version) / Срабатывает при подтверждении значения слайдера (упрощенная версия)`, properties: [{ name: 'value', type: 'SliderValueType' }] },
  { name: 'input', description: `Emitted on slider value input / Срабатывает при вводе значения слайдера`, properties: [{ name: 'detail', type: 'SliderEventDetail' }] },
  { name: 'inputLite', description: `Emitted on slider value input (lite version) / Срабатывает при вводе значения слайдера (упрощенная версия)`, properties: [{ name: 'value', type: 'SliderValueType' }] },
  { name: 'update:modelValue', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'SliderValueType' }] },
  { name: 'update:value', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'SliderValueType' }] }
  // :eventsList [!] System label / Системная метка
]

export const SliderWikiData: WikiDataItem = {
  component: 'Slider',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
