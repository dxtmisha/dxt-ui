import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'arrowAttrs', type: 'ConstrBind<Arrow>' },
  { name: 'arrowPosition', type: 'string', option: ['auto', 'top', 'bottom', 'left', 'right'] },
  { name: 'arrowShow', type: 'boolean' },
  { name: 'delay', type: 'number' },
  { name: 'delayHide', type: 'number' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'embedded', type: 'boolean' },
  { name: 'indent', type: 'number' },
  { name: 'inDom', type: 'boolean' },
  { name: 'interactive', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'maxWidth', type: 'string', option: ['sm', 'md', 'lg'] },
  { name: 'open', type: 'boolean' },
  { name: 'top', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'body', description: `Slot for the tooltip body content/ Слот для основного содержимого тултипа`, properties: [{ name: 'props', type: '() => any' }] },
  { name: 'control', description: `Slot for the control element that triggers the tooltip/ Слот для управляющего элемента, вызывающего тултип`, properties: [{ name: 'props', type: 'TooltipControl' }] },
  { name: 'default', description: `Default slot content/ Содержимое слота по умолчанию` },
  { name: 'description', description: `Description slot/ Слот описания` }
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
