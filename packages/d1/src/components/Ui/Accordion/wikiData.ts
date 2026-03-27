import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autoClose', type: 'boolean' },
  { name: 'cellAttrs', type: 'ConstrBind<Cell>' },
  { name: 'clickOpen', type: 'boolean' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'divider', type: 'boolean' },
  { name: 'icon', type: 'IconValue<Icon>' },
  { name: 'iconArrowDown', type: 'IconValue<Icon>' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'modelOpen', type: 'boolean' },
  { name: 'motionTransformAttrs', type: 'ConstrBind<MotionTransform>' },
  { name: 'onUpdate:modelOpen', type: '(value: boolean) => void' },
  { name: 'onUpdate:open', type: '(value: boolean) => void' },
  { name: 'open', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', properties: [{ name: 'props', type: 'CellClassesSub' }] },
  { name: 'caption', description: `Caption slot/ Слот заголовка` },
  { name: 'default', properties: [{ name: 'props', type: 'MotionTransformControlItem' }] },
  { name: 'description', description: `Description slot/ Слот описания` },
  { name: 'label', description: `Label slot content/ Содержимое слота метки` },
  { name: 'trailing', properties: [{ name: 'props', type: 'CellClassesSub' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: ' value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'transform', description: `Transform event with native event and options/ Событие трансформации с нативным событием и опциями`, properties: [{ name: 'event', type: 'Event' }, { name: ' options', type: 'MotionTransformEmitOptions' }] },
  { name: 'transformLite', description: `Lightweight transform event with options only/ Облегчённое событие трансформации только с опциями`, properties: [{ name: 'options', type: 'MotionTransformEmitOptions' }] },
  { name: 'update:modelOpen', description: `Update model open event/ Событие обновления открытия модели`, properties: [{ name: 'value', type: 'boolean' }] },
  { name: 'update:open', description: `Update open event/ Событие обновления открытия`, properties: [{ name: 'value', type: 'boolean' }] }
  // :eventsList [!] System label / Системная метка
]

export const AccordionWikiData: WikiDataItem = {
  component: 'Accordion',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
