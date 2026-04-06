import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['center', 'right', 'left'] },
  { name: 'autocapitalize', type: 'string', option: ['off', 'none', 'sentences', 'words', 'characters'] },
  { name: 'autocomplete', type: 'string' },
  { name: 'autocorrect', type: 'string', option: ['on', 'off'] },
  { name: 'autofocus', type: 'boolean' },
  { name: 'autosize', type: 'boolean' },
  { name: 'cancel', type: 'string', option: ['auto', 'always', 'none'] },
  { name: 'caption', type: 'string | number' },
  { name: 'captionDecorative', type: 'boolean' },
  { name: 'cols', type: 'NumberOrString' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'enterKeyHint', type: 'string', option: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'] },
  { name: 'fieldAttrs', type: 'ConstrBind<FieldPropsBasic>' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterPropsBasic>' },
  { name: 'fieldLabelAttrs', type: 'ConstrBind<FieldLabelPropsBasic>' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessagePropsBasic>' },
  { name: 'fieldSizing', type: 'string', option: ['content', 'fixed'] },
  { name: 'focus', type: 'boolean' },
  { name: 'forceShowMessage', type: 'boolean' },
  { name: 'form', type: 'string' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'href', type: 'string' },
  { name: 'icon', type: 'IconValue<IconPropsBasic>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconPropsBasic>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTrailing', type: 'IconValue<IconPropsBasic>' },
  { name: 'iconTrailingDirOnly', type: 'boolean' },
  { name: 'iconTrailingPalette', type: 'boolean' },
  { name: 'iconTrailingTurnOnly', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'id', type: 'string | number' },
  { name: 'inputAttrs', type: 'Record<string, any>' },
  { name: 'inputMode', type: 'string', option: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'] },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressPropsBasic>' },
  { name: 'match', type: 'FieldMatch' },
  { name: 'maxlength', type: 'NumberOrString' },
  { name: 'minlength', type: 'NumberOrString' },
  { name: 'modelValue', type: 'string' },
  { name: 'name', type: 'string' },
  { name: 'onUpdate:modelValue', type: '(value: string) => void' },
  { name: 'onUpdate:value', type: '(value: string) => void' },
  { name: 'placeholder', type: 'string' },
  { name: 'prefix', type: 'string | number' },
  { name: 'prefixId', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'rows', type: 'NumberOrString' },
  { name: 'selected', type: 'boolean' },
  { name: 'spellcheck', type: 'string', option: ['true', 'false'] },
  { name: 'suffix', type: 'string | number' },
  { name: 'suffixId', type: 'string' },
  { name: 'tabindex', type: 'number' },
  { name: 'textareaAttrs', type: 'ConstrBind<TextareaAutosizePropsBasic>' },
  { name: 'textCancel', type: 'TextValue' },
  { name: 'validationCode', type: 'FieldValidityCode' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' },
  { name: 'value', type: 'string' },
  { name: 'wrap', type: 'string', option: ['soft', 'hard', 'off'] }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'caption', description: `Caption slot/ Слот заголовка` },
  { name: 'label', description: `Label slot content/ Содержимое слота метки` },
  { name: 'leading', description: `Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`, properties: [{ name: 'props', type: 'FieldControl' }] },
  { name: 'prefix', description: `Prefix slot/ Слот префикса` },
  { name: 'suffix', description: `Suffix slot/ Слот суффикса` },
  { name: 'trailing', description: `Slot for displaying content after the input area/ Слот для отображения контента после области ввода`, properties: [{ name: 'props', type: 'FieldControl' }] }
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  { name: 'change', description: `Emitted when value is committed (blur/confirm)/
Эмит при подтверждении значения (blur/confirm): [event, value]`, properties: [{ name: 'event', type: 'InputEvent | Event' }, { name: 'value', type: 'FieldValidationItem<any>' }] },
  { name: 'changeLite', description: `Lightweight change emit without DOM event/
Лёгкий эмит подтверждения без события: [value]`, properties: [{ name: 'value', type: 'FieldValidationItem<any>' }] },
  { name: 'input', description: `Emitted on input events (every change while typing)/
Эмит при вводе (каждое изменение): [event, value]`, properties: [{ name: 'event', type: 'InputEvent | Event' }, { name: 'value', type: 'FieldValidationItem<any>' }] },
  { name: 'inputLite', description: `Lightweight input emit without DOM event/
Лёгкий эмит ввода без DOM-события: [value]`, properties: [{ name: 'value', type: 'FieldValidationItem<any>' }] },
  { name: 'update:modelValue', description: `Update model value event/ Событие обновления значения модели`, properties: [{ name: 'value', type: 'any' }] },
  { name: 'update:value', description: `Update value event/ Событие обновления значения`, properties: [{ name: 'value', type: 'any' }] }
  // :eventsList [!] System label / Системная метка
]

export const TextareaWikiData: WikiDataItem = {
  component: 'Textarea',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
