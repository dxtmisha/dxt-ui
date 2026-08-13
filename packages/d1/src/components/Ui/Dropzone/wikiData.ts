import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'accept', type: 'string' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'files', type: 'FileList' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'modelFiles', type: 'FileList' },
  { name: 'multiple', type: 'boolean' },
  { name: 'onUpdate:files', type: '((value: FileList ) => void) | undefined' },
  { name: 'onUpdate:modelFiles', type: '((value: FileList ) => void) | undefined' },
  { name: 'selected', type: 'boolean' },
  { name: 'textDropzone', type: 'TextValue' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot / Слот по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'description', description: `Description slot/ Слот описания`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'drop', description: `Triggered when files are dropped or selected / Срабатывает при сбросе или выборе файлов`, properties: [{ name: 'event', type: 'DropzoneEventParameters' }] },
  { name: 'update:files', description: `Update files event/ Событие обновления файлов`, properties: [{ name: 'value', type: 'FileList | undefined' }] },
  { name: 'update:modelFiles', description: `Update model files event/ Событие обновления файлов модели`, properties: [{ name: 'value', type: 'FileList | undefined' }] }
  // :eventsList [!] System label / Системная метка
]

export const DropzoneWikiData: WikiDataItem = {
  component: 'Dropzone',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
