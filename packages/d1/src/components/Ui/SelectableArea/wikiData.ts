import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'active', type: 'boolean' },
  { name: 'disabled', type: 'boolean' },
  { name: 'modelSelected', type: 'string' },
  { name: 'onUpdate:modelSelected', type: '((value: string) => void)' },
  { name: 'onUpdate:selected', type: '((value: string) => void)' },
  { name: 'selected', type: 'string | string[]' },
  { name: 'tag', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot containing the selectable children / Дефолтный слот, содержащий выделяемые дочерние элементы`, properties: [{ name: 'props', type: '(SelectableAreaControl) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'selected', description: `Event triggered when items are selected / Событие, вызываемое при выборе элементов`, properties: [{ name: 'parameters', type: 'SelectableAreaEventParameters' }] },
  { name: 'update:modelSelected', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'string' }] },
  { name: 'update:selected', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'string' }] }
  // :eventsList [!] System label / Системная метка
]

export const SelectableAreaWikiData: WikiDataItem = {
  component: 'SelectableArea',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
