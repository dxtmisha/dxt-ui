import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autoClose', type: 'boolean | undefined' },
  { name: 'cellAttrs', type: 'ConstrBind<CellProps> | undefined' },
  { name: 'clickOpen', type: 'boolean | undefined' },
  { name: 'description', type: 'string | number | undefined' },
  { name: 'descriptionId', type: 'string | undefined' },
  { name: 'divider', type: 'boolean | undefined' },
  { name: 'icon', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconArrowDown', type: 'IconValue<IconProps> | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'modelOpen', type: 'boolean | undefined' },
  { name: 'motionTransformAttrs', type: 'ConstrBind<MotionTransformProps> | undefined' },
  { name: 'onUpdate:modelOpen', type: '((value: boolean) => void) | undefined' },
  { name: 'onUpdate:open', type: '((value: boolean) => void) | undefined' },
  { name: 'open', type: 'boolean | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', description: `Slot for the main body content/ Слот для основного контента тела`, properties: [{ name: 'props', type: '(CellClassesSub) | undefined' }] },
  { name: 'caption', description: `Caption slot/ Слот заголовка`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'default', description: `Main expandable content of the accordion/ Основное раскрывающееся содержимое аккордеона`, properties: [{ name: 'props', type: '(MotionTransformControlItem) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'label', description: `Label slot content/ Содержимое слота метки`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'trailing', description: `Slot for elements on the right/ Слот для элементов справа`, properties: [{ name: 'props', type: '(CellClassesSub) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'transform', description: `Transform event with native event and options/ Событие трансформации с нативным событием и опциями`, properties: [{ name: 'event', type: 'Event | undefined' }, { name: 'options', type: 'MotionTransformEmitOptions' }] },
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
