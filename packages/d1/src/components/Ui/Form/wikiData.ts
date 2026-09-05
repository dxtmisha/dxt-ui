import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'action', type: 'string' },
  { name: 'autocomplete', type: 'string' },
  { name: 'enctype', type: 'string' },
  { name: 'method', type: 'string' },
  { name: 'modelValue', type: 'FormElementsValues' },
  { name: 'native', type: 'boolean' },
  { name: 'onUpdate:modelValue', type: '((value: FormElementsValues) => void)' },
  { name: 'onUpdate:value', type: '((value: FormElementsValues) => void)' },
  { name: 'target', type: 'string' },
  { name: 'value', type: 'FormElementsValues' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot for form content and input elements /
Основной слот для содержимого формы и элементов ввода`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'footer', description: `Footer slot for form actions and buttons /
Слот подвала для действий и кнопок формы`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'header', description: `Header slot for form title or top controls /
Слот заголовка для названия формы или верхних элементов управления`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'change', description: `Form change event / Событие изменения формы`, properties: [{ name: 'event', type: 'InputEvent' }, { name: 'data', type: 'FormElementsData' }, { name: 'values', type: 'FormElementsValues' }] },
  { name: 'changeLite', description: `Form change event (lite version) / Событие изменения формы (упрощенная версия)`, properties: [{ name: 'data', type: 'FormElementsData' }, { name: 'values', type: 'FormElementsValues' }] },
  { name: 'changeValues', description: `Form change values event / Событие значений изменения формы`, properties: [{ name: 'values', type: 'FormElementsValues' }] },
  { name: 'input', description: `Form input event / Событие ввода формы`, properties: [{ name: 'event', type: 'InputEvent' }, { name: 'data', type: 'FormElementsData' }, { name: 'values', type: 'FormElementsValues' }] },
  { name: 'inputLite', description: `Form input event (lite version) / Событие ввода формы (упрощенная версия)`, properties: [{ name: 'data', type: 'FormElementsData' }, { name: 'values', type: 'FormElementsValues' }] },
  { name: 'inputValues', description: `Form input values event / Событие значений ввода формы`, properties: [{ name: 'values', type: 'FormElementsValues' }] },
  { name: 'reset', description: `Form reset event / Событие сброса формы`, properties: [{ name: 'event', type: 'Event' }] },
  { name: 'submit', description: `Form submission event / Событие отправки формы`, properties: [{ name: 'event', type: 'SubmitEvent' }] },
  { name: 'update:modelValue', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'string' }] },
  { name: 'update:value', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'string' }] }
  // :eventsList [!] System label / Системная метка
]

export const FormWikiData: WikiDataItem = {
  component: 'Form',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
