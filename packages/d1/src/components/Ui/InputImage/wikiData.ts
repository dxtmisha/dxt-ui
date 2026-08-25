import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'accept', type: 'string' },
  { name: 'actionsAttrs', type: 'ConstrBind<ActionsProps>' },
  { name: 'actionsHide', type: 'boolean' },
  { name: 'autocapitalize', type: 'string', option: ['off', 'none', 'sentences', 'words', 'characters'] },
  { name: 'autocomplete', type: 'string' },
  { name: 'autocorrect', type: 'string', option: ['on', 'off'] },
  { name: 'autofocus', type: 'boolean' },
  { name: 'capture', type: 'string | boolean' },
  { name: 'counter', type: 'string | number' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'counterTemplate', type: 'string' },
  { name: 'crop', type: 'CropAreaCoordinator' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'dropzoneAttrs', type: 'ConstrBind<DropzoneProps>' },
  { name: 'dropzoneDescription', type: 'string | number' },
  { name: 'dropzoneIcon', type: 'IconValue<IconProps>' },
  { name: 'dropzoneLabel', type: 'NumberOrString' },
  { name: 'enterKeyHint', type: 'string', option: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'] },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterProps>' },
  { name: 'fieldLabelAttrs', type: 'ConstrBind<FieldLabelProps>' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessageProps>' },
  { name: 'forceShowMessage', type: 'boolean' },
  { name: 'form', type: 'string' },
  { name: 'hasHtmlCode', type: 'boolean' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'iconClose', type: 'string' },
  { name: 'iconUpload', type: 'string' },
  { name: 'id', type: 'string | number' },
  { name: 'imageCropAttrs', type: 'ConstrBind<ImageCropProps>' },
  { name: 'inputAttrs', type: 'Record<string, any>' },
  { name: 'inputMode', type: 'string', option: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'] },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'match', type: 'FieldMatch' },
  { name: 'maxFileSize', type: 'number' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'maxPixel', type: 'number' },
  { name: 'minlength', type: 'NumberOrString' },
  { name: 'modelValue', type: 'InputImageItem' },
  { name: 'multiple', type: 'boolean' },
  { name: 'name', type: 'string' },
  { name: 'onUpdate:modelValue', type: '((value: InputImageItem) => void)' },
  { name: 'onUpdate:value', type: '((value: InputImageItem) => void)' },
  { name: 'placeholder', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg'] },
  { name: 'spellcheck', type: 'string', option: ['true', 'false'] },
  { name: 'tabindex', type: 'number' },
  { name: 'textCancel', type: 'TextValue' },
  { name: 'textChange', type: 'TextValue' },
  { name: 'validationCode', type: 'FieldValidityCode' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' },
  { name: 'value', type: 'InputImageItem' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'label', description: `Label slot content/ Содержимое слота метки`, properties: [{ name: 'props', type: '(any) | undefined' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'change', description: `Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`, properties: [{ name: 'event', type: 'InputEvent | Event' }, { name: 'value', type: 'FieldValidationItem<InputImageValue>' }] },
  { name: 'changeLite', description: `Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`, properties: [{ name: 'value', type: 'FieldValidationItem<InputImageValue>' }] },
  { name: 'input', description: `Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`, properties: [{ name: 'event', type: 'InputEvent | Event' }, { name: 'value', type: 'FieldValidationItem<InputImageValue>' }] },
  { name: 'inputLite', description: `Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`, properties: [{ name: 'value', type: 'FieldValidationItem<InputImageValue>' }] },
  { name: 'update:modelValue', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'InputImageValue' }] },
  { name: 'update:value', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'InputImageValue' }] }
  // :eventsList [!] System label / Системная метка
]

export const InputImageWikiData: WikiDataItem = {
  component: 'InputImage',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
