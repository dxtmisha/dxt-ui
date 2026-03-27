import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string', option: ['planeAlways', 'planeSm', 'planeMd', 'planeLg', 'planeXl', 'plane2xl'] },
  { name: 'animationHeadPosition', type: 'string', option: ['top', 'toBottom'] },
  { name: 'animationShow', type: 'boolean' },
  { name: 'ariaDescribedby', type: 'string' },
  { name: 'ariaLabelledby', type: 'string' },
  { name: 'autoClose', type: 'boolean' },
  { name: 'clickOpen', type: 'boolean' },
  { name: 'ignore', type: 'string | HTMLElement' },
  { name: 'ignoreSelector', type: 'string' },
  { name: 'inDom', type: 'boolean' },
  { name: 'modelOpen', type: 'boolean' },
  { name: 'onUpdate:modelOpen', type: '(value: boolean) => void' },
  { name: 'onUpdate:open', type: '(value: boolean) => void' },
  { name: 'open', type: 'boolean' },
  { name: 'section', type: 'boolean' },
  { name: 'tagBody', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', description: `Body slot for content/ Слот тела для содержимого`, properties: [{ name: 'props', type: 'MotionTransformControlItem' }] },
  { name: 'head', description: `Head slot for controls/ Слот шапки для элементов управления`, properties: [{ name: 'props', type: 'MotionTransformControlItem' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'transform', properties: [{ name: 'event', type: 'Event' }, { name: ' options', type: 'MotionTransformEmitOptions' }] },
  { name: 'transformLite', properties: [{ name: 'options', type: 'MotionTransformEmitOptions' }] },
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
