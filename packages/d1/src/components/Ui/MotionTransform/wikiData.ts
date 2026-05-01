import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string | undefined', option: ['planeAlways', 'planeSm', 'planeMd', 'planeLg', 'planeXl', 'plane2xl'] },
  { name: 'animationHeadPosition', type: 'string | undefined', option: ['top', 'toBottom'] },
  { name: 'animationShow', type: 'boolean | undefined' },
  { name: 'ariaDescribedby', type: 'string | undefined' },
  { name: 'ariaLabelledby', type: 'string | undefined' },
  { name: 'autoClose', type: 'boolean | undefined' },
  { name: 'clickOpen', type: 'boolean | undefined' },
  { name: 'ignore', type: 'string | HTMLElement | undefined' },
  { name: 'ignoreSelector', type: 'string | undefined' },
  { name: 'inDom', type: 'boolean | undefined' },
  { name: 'modelOpen', type: 'boolean | undefined' },
  { name: 'onUpdate:modelOpen', type: '((value: boolean) => void) | undefined' },
  { name: 'onUpdate:open', type: '((value: boolean) => void) | undefined' },
  { name: 'open', type: 'boolean | undefined' },
  { name: 'section', type: 'boolean | undefined' },
  { name: 'tagBody', type: 'string | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', description: `Body slot for content/ Слот тела для содержимого`, properties: [{ name: 'props', type: '(MotionTransformControlItem) | undefined' }] },
  { name: 'head', description: `Head slot for controls/ Слот шапки для элементов управления`, properties: [{ name: 'props', type: '(MotionTransformControlItem) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'transform', description: `Event triggered on transformation completion/ Событие, вызываемое при завершении трансформации`, properties: [{ name: 'event', type: 'Event | undefined' }, { name: 'options', type: 'MotionTransformEmitOptions' }] },
  { name: 'transformLite', description: `Lightweight transformation event/ Облегченное событие трансформации`, properties: [{ name: 'options', type: 'MotionTransformEmitOptions' }] },
  { name: 'update:modelOpen', description: `Update model open event/ Событие обновления открытия модели`, properties: [{ name: 'value', type: 'boolean' }] },
  { name: 'update:open', description: `Update open event/ Событие обновления открытия`, properties: [{ name: 'value', type: 'boolean' }] }
  // :eventsList [!] System label / Системная метка
]

export const MotionTransformWikiData: WikiDataItem = {
  component: 'MotionTransform',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
