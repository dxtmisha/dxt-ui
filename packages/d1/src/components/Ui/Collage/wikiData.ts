import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'cellSize', type: 'string | number' },
  { name: 'collageItemAttrs', type: 'ConstrBind<CollageItemProps>' },
  { name: 'columns', type: 'string', option: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] },
  { name: 'images', type: 'ListRecord<CollageItemProps>' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'modelSelected', type: 'ListSelectedList' },
  { name: 'onUpdate:modelSelected', type: '((value: ListSelectedList) => void)' },
  { name: 'onUpdate:selected', type: '((value: ListSelectedList) => void)' },
  { name: 'selected', type: 'ListSelectedList' },
  { name: 'variant', type: 'string', option: ['standard', 'quilted', 'woven', 'masonryHorizontal', 'masonryVertical'] }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot for custom content / Слот по умолчанию для пользовательского содержимого`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'click', description: `Full click event with MouseEvent/ Полное событие клика с MouseEvent`, properties: [{ name: 'event', type: 'MouseEvent' }, { name: 'value', type: 'EventClickValue' }] },
  { name: 'clickLite', description: `Lightweight click event/ Упрощённое событие клика`, properties: [{ name: 'value', type: 'EventClickValue' }] },
  { name: 'update:modelSelected', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'ListSelectedList' }] },
  { name: 'update:selected', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'ListSelectedList' }] }
  // :eventsList [!] System label / Системная метка
]

export const CollageWikiData: WikiDataItem = {
  component: 'Collage',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
