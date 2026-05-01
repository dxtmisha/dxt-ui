import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'arrowAttrs', type: 'ConstrBind<ArrowProps> | undefined' },
  { name: 'arrowPosition', type: 'string | undefined' },
  { name: 'arrowShow', type: 'boolean | undefined' },
  { name: 'delay', type: 'number | undefined' },
  { name: 'delayHide', type: 'number | undefined' },
  { name: 'description', type: 'string | number | undefined' },
  { name: 'descriptionId', type: 'string | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'embedded', type: 'boolean | undefined' },
  { name: 'indent', type: 'number | undefined' },
  { name: 'inDom', type: 'boolean | undefined' },
  { name: 'interactive', type: 'boolean | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'maxWidth', type: 'string | undefined', option: ['sm', 'md', 'lg'] },
  { name: 'open', type: 'boolean | undefined' },
  { name: 'top', type: 'boolean | undefined' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', description: `Slot for the tooltip body content/ Слот для основного содержимого тултипа`, properties: [{ name: 'props', type: '(() => any) | undefined' }] },
  { name: 'control', description: `Slot for the control element that triggers the tooltip/ Слот для управляющего элемента, вызывающего тултип`, properties: [{ name: 'props', type: '(TooltipControl) | undefined' }] },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'tooltip', description: `Event triggered when the tooltip open state changes/ Событие при изменении состояния открытости тултипа`, properties: [{ name: 'open', type: 'boolean' }] }
  // :eventsList [!] System label / Системная метка
]

export const TooltipWikiData: WikiDataItem = {
  component: 'Tooltip',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
