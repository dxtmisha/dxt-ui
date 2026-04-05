import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'animationHeight', type: 'boolean' },
  { name: 'axis', type: 'string', option: ['x', 'y', 'z'] },
  { name: 'direction', type: 'string', option: ['next', 'back', 'auto'] },
  { name: 'inDom', type: 'boolean' },
  { name: 'inDomSlide', type: 'string[]' },
  { name: 'modelSelected', type: 'string' },
  { name: 'onUpdate:modelSelected', type: '(value: string) => void' },
  { name: 'onUpdate:selected', type: '(value: string) => void' },
  { name: 'selected', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'end', description: `Event triggered at the end of animation/ Событие завершения анимации`, properties: [{ name: 'selected', type: 'string' }] },
  { name: 'motionAxis', description: `Event for axis motion/ Событие движения оси`, properties: [{ name: 'options', type: 'MotionAxisEmitOptions' }] },
  { name: 'start', description: `Event triggered at the start of animation/ Событие начала анимации`, properties: [{ name: 'selected', type: 'string' }] },
  { name: 'update:modelSelected', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'string' }] },
  { name: 'update:selected', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'string' }] }
  // :eventsList [!] System label / Системная метка
]

export const MotionAxisWikiData: WikiDataItem = {
  component: 'MotionAxis',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
