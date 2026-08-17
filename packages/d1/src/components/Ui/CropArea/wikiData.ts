import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'disabled', type: 'boolean' },
  { name: 'disabledBottom', type: 'boolean' },
  { name: 'disabledLeft', type: 'boolean' },
  { name: 'disabledRight', type: 'boolean' },
  { name: 'disabledTop', type: 'boolean' },
  { name: 'min', type: 'number' },
  { name: 'modelValue', type: 'CropAreaCoordinator' },
  { name: 'onUpdate:modelValue', type: '((value: CropAreaCoordinator) => void)' },
  { name: 'onUpdate:value', type: '((value: CropAreaCoordinator) => void)' },
  { name: 'tag', type: 'string' },
  { name: 'value', type: 'CropAreaCoordinator' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'resize', description: `Event emitted during resizing or moving / Событие, вызываемое при изменении размера или перемещении`, properties: [{ name: 'parameters', type: 'CropAreaEventParameters' }] },
  { name: 'update:modelValue', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'CropAreaCoordinator' }] },
  { name: 'update:value', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'CropAreaCoordinator' }] }
  // :eventsList [!] System label / Системная метка
]

export const CropAreaWikiData: WikiDataItem = {
  component: 'CropArea',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
