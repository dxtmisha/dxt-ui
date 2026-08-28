import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'alt', type: 'string' },
  { name: 'cropAreaAttrs', type: 'ConstrBind<CropAreaProps>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'image', type: 'string | ConstrBind<ImageProps>' },
  { name: 'imageAttrs', type: 'ConstrBind<ImageProps>' },
  { name: 'modelValue', type: 'Value' },
  { name: 'onUpdate:modelValue', type: '((value: any) => void)' },
  { name: 'onUpdate:value', type: '((value: any) => void)' },
  { name: 'readonly', type: 'boolean' },
  { name: 'value', type: 'CropAreaCoordinator' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot / Слот по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'load', description: `Event triggered when the image is loaded/ Событие, срабатывающее при загрузке изображения`, properties: [{ name: 'image', type: 'ImageEventData' }] },
  { name: 'resize', description: `Event emitted during resizing or moving / Событие, вызываемое при изменении размера или перемещении`, properties: [{ name: 'parameters', type: 'CropAreaEventParameters' }] },
  { name: 'update:modelValue', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'any' }] },
  { name: 'update:value', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'any' }] }
  // :eventsList [!] System label / Системная метка
]

export const ImageCropWikiData: WikiDataItem = {
  component: 'ImageCrop',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
