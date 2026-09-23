import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'accept', type: 'string' },
  { name: 'counter', type: 'string | number' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'counterTemplate', type: 'string' },
  { name: 'disabled', type: 'boolean' },
  { name: 'dropzoneAttrs', type: 'ConstrBind<DropzoneProps>' },
  { name: 'dropzoneDescription', type: 'string | number' },
  { name: 'dropzoneIcon', type: 'IconValue<IconProps>' },
  { name: 'dropzoneLabel', type: 'NumberOrString' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterProps>' },
  { name: 'fieldLabelAttrs', type: 'ConstrBind<FieldLabelProps>' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessageProps>' },
  { name: 'forceShowMessage', type: 'boolean' },
  { name: 'hasHtmlCode', type: 'boolean' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'maxFileSize', type: 'number' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'multiple', type: 'boolean' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'textDropzone', type: 'TextValue' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'default', description: `Default slot / Слот по умолчанию`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'label', description: `Label slot content/ Содержимое слота метки`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'add', description: `Event triggered when files are added / Событие при добавлении файлов`, properties: [{ name: 'files', type: 'File[]' }] }
  // :eventsList [!] System label / Системная метка
]

export const InputFileDropzoneWikiData: WikiDataItem = {
  component: 'InputFileDropzone',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
