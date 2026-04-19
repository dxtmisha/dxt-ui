import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['center', 'right', 'left'] },
  { name: 'arrow', type: 'string', option: ['none', 'auto', 'carousel', 'stepper'] },
  { name: 'arrowAlign', type: 'string', option: ['center', 'right', 'left'] },
  { name: 'arrowStep', type: 'NumberOrString | undefined' },
  { name: 'autocapitalize', type: 'string | undefined', option: ['off', 'none', 'sentences', 'words', 'characters'] },
  { name: 'autocomplete', type: 'string | undefined' },
  { name: 'autocorrect', type: 'string | undefined', option: ['on', 'off'] },
  { name: 'autofocus', type: 'boolean | undefined' },
  { name: 'cancel', type: 'string', option: ['none', 'auto', 'always'] },
  { name: 'caption', type: 'string | number | undefined' },
  { name: 'captionDecorative', type: 'boolean | undefined' },
  { name: 'counterId', type: 'string | undefined' },
  { name: 'counterShow', type: 'boolean | undefined' },
  { name: 'detail', type: 'Record<string, any> | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'editValue', type: 'boolean | undefined' },
  { name: 'enterKeyHint', type: 'string | undefined', option: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'] },
  { name: 'fieldAttrs', type: 'ConstrBind<FieldProps> | undefined' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterProps> | undefined' },
  { name: 'fieldLabelAttrs', type: 'ConstrBind<FieldLabelProps> | undefined' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessageProps> | undefined' },
  { name: 'filterMode', type: 'boolean | undefined' },
  { name: 'focus', type: 'boolean | undefined' },
  { name: 'forceShowMessage', type: 'boolean | undefined' },
  { name: 'form', type: 'string | undefined' },
  { name: 'helperId', type: 'string | undefined' },
  { name: 'helperMessage', type: 'string | undefined' },
  { name: 'hideList', type: 'boolean | undefined' },
  { name: 'href', type: 'string | undefined' },
  { name: 'icon', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconArrowDown', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps> | undefined' },
  { name: 'iconDir', type: 'boolean | undefined' },
  { name: 'iconHide', type: 'boolean | undefined' },
  { name: 'iconPalette', type: 'boolean | undefined' },
  { name: 'iconSearch', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconTrailing', type: 'IconValue<IconProps> | undefined' },
  { name: 'iconTrailingDirOnly', type: 'boolean | undefined' },
  { name: 'iconTrailingPalette', type: 'boolean | undefined' },
  { name: 'iconTrailingTurnOnly', type: 'boolean | undefined' },
  { name: 'iconTurn', type: 'boolean | undefined' },
  { name: 'id', type: 'string | number | undefined' },
  { name: 'inputAttrs', type: 'Record<string, any> | undefined' },
  { name: 'inputMode', type: 'string | undefined', option: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'] },
  { name: 'inputSearchAttrs', type: 'ConstrBind<InputProps> | undefined' },
  { name: 'isSkeleton', type: 'boolean | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressProps> | undefined' },
  { name: 'match', type: 'FieldMatch | undefined' },
  { name: 'max', type: 'NumberOrString | undefined' },
  { name: 'menuAttrs', type: 'ConstrBind<MenuProps> | undefined' },
  { name: 'modelValue', type: 'Value' },
  { name: 'multiple', type: 'boolean | undefined' },
  { name: 'name', type: 'string | undefined' },
  { name: 'onUpdate:modelValue', type: '((value: any) => void) | undefined' },
  { name: 'onUpdate:value', type: '((value: any) => void) | undefined' },
  { name: 'option', type: 'ListRecord | undefined' },
  { name: 'placeholder', type: 'string | undefined' },
  { name: 'prefix', type: 'string | number | undefined' },
  { name: 'prefixId', type: 'string | undefined' },
  { name: 'readonly', type: 'boolean | undefined' },
  { name: 'required', type: 'boolean | undefined' },
  { name: 'selected', type: 'boolean | undefined' },
  { name: 'showSearch', type: 'boolean | undefined' },
  { name: 'spellcheck', type: 'string', option: ['true', 'false'] },
  { name: 'suffix', type: 'string | number | undefined' },
  { name: 'suffixId', type: 'string | undefined' },
  { name: 'tabindex', type: 'number | undefined' },
  { name: 'textCancel', type: 'TextValue' },
  { name: 'validationCode', type: 'FieldValidityCode | undefined' },
  { name: 'validationId', type: 'string | undefined' },
  { name: 'validationMessage', type: 'string | undefined' },
  { name: 'value', type: 'Value' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'caption', description: `Caption slot/ Слот заголовка`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'contextBottom', description: `Context slot for bottom area / Слот контекстной области снизу`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'contextTop', description: `Context slot for top area / Слот контекстной области сверху`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'footer', description: `Footer slot for window bottom/ Слот подвала для низа окна`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'label', description: `Label slot content/ Содержимое слота метки`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'leading', description: `Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`, properties: [{ name: 'props', type: '(FieldControl) | undefined' }] },
  { name: 'prefix', description: `Prefix slot/ Слот префикса`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'suffix', description: `Suffix slot/ Слот суффикса`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'title', description: `Title slot for window title/ Слот заголовка для заголовка окна`, properties: [{ name: 'props', type: '(MenuControlItem) | undefined' }] },
  { name: 'trailing', description: `Slot for displaying content after the input area/ Слот для отображения контента после области ввода`, properties: [{ name: 'props', type: '(FieldControl) | undefined' }] }
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

export const SelectWikiData: WikiDataItem = {
  component: 'Select',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
