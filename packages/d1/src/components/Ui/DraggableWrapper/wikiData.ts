import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'classesSquare', type: 'string | string[]' },
  { name: 'delay', type: 'string | number' },
  { name: 'disabled', type: 'boolean' },
  { name: 'tag', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot containing the draggable children / Дефолтный слот, содержащий перетаскиваемые дочерние элементы`, properties: [{ name: 'props', type: '(DraggableWrapperControl) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'drop', description: `Event triggered when dragging completes on a target drop element / Событие, вызываемое при завершении перетаскивания на целевой элемент сброса`, properties: [{ name: 'parameters', type: 'DraggableWrapperEventParameters' }] },
  { name: 'position', description: `Event triggered when dragging completes on a sorting position / Событие, вызываемое при завершении перетаскивания на позицию сортировки`, properties: [{ name: 'parameters', type: 'DraggableWrapperEventParameters' }] }
  // :eventsList [!] System label / Системная метка
]

export const DraggableWrapperWikiData: WikiDataItem = {
  component: 'DraggableWrapper',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
