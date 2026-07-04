import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'align', type: 'string', option: ['center', 'right', 'left'] },
  { name: 'autocomplete', type: 'string' },
  { name: 'autofocus', type: 'boolean' },
  { name: 'cancel', type: 'string', option: ['auto', 'always', 'none'] },
  { name: 'caption', type: 'string | number' },
  { name: 'captionDecorative', type: 'boolean' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'currency', type: 'string' },
  { name: 'currencyHide', type: 'boolean' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'fieldAttrs', type: 'ConstrBind<FieldProps>' },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterProps>' },
  { name: 'fieldLabelAttrs', type: 'ConstrBind<FieldLabelProps>' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessageProps>' },
  { name: 'focus', type: 'boolean' },
  { name: 'forceShowMessage', type: 'boolean' },
  { name: 'form', type: 'string' },
  { name: 'fraction', type: 'MaskFractionItem' },
  { name: 'hasHtmlCode', type: 'boolean' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'href', type: 'string' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconDir', type: 'boolean' },
  { name: 'iconHide', type: 'boolean' },
  { name: 'iconPalette', type: 'boolean' },
  { name: 'iconTrailing', type: 'IconValue<IconProps>' },
  { name: 'iconTrailingDirOnly', type: 'boolean' },
  { name: 'iconTrailingPalette', type: 'boolean' },
  { name: 'iconTrailingTurnOnly', type: 'boolean' },
  { name: 'iconTurn', type: 'boolean' },
  { name: 'id', type: 'string | number' },
  { name: 'inputAttrs', type: 'Record<string, any>' },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressProps>' },
  { name: 'mask', type: 'string | ConstrBind<MaskProps>' },
  { name: 'maskAttrs', type: 'ConstrBind<MaskProps>' },
  { name: 'maskNone', type: 'boolean' },
  { name: 'maskVisible', type: 'boolean' },
  { name: 'modelValue', type: 'string' },
  { name: 'name', type: 'string' },
  { name: 'onUpdate:modelValue', type: '((value: string) => void)' },
  { name: 'onUpdate:value', type: '((value: string) => void)' },
  { name: 'placeholder', type: 'string' },
  { name: 'prefix', type: 'string | number' },
  { name: 'prefixId', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'selected', type: 'boolean' },
  { name: 'socialIcons', type: 'Record<InputSocialTypeValue, string>' },
  { name: 'socialType', type: 'string', option: ['alipay', 'baidu', 'dingtalk', 'discord', 'douyin', 'dzen', 'facebook', 'github', 'gitlab', 'habr', 'instagram', 'line', 'linkedin', 'medium', 'messenger', 'ok', 'pinterest', 'qq', 'reddit', 'skype', 'snapchat', 'telegram', 'tiktok', 'tumblr', 'twitter', 'viber', 'vk', 'wechat', 'weibo', 'whatsapp', 'x', 'xiaohongshu', 'youtube', 'zalo', 'zhihu', 'alipay', 'baidu', 'dingtalk', 'discord', 'douyin', 'dzen', 'facebook', 'github', 'gitlab', 'habr', 'instagram', 'line', 'linkedin', 'medium', 'messenger', 'ok', 'pinterest', 'qq', 'reddit', 'skype', 'snapchat', 'telegram', 'tiktok', 'tumblr', 'twitter', 'viber', 'vk', 'wechat', 'weibo', 'whatsapp', 'x', 'xiaohongshu', 'youtube', 'zalo', 'zhihu'] },
  { name: 'suffix', type: 'string | number' },
  { name: 'suffixId', type: 'string' },
  { name: 'tabindex', type: 'number' },
  { name: 'textCancel', type: 'TextValue' },
  { name: 'type', type: 'string', option: ['number', 'text', 'search', 'number-format', 'currency', 'email', 'password', 'datetime', 'date', 'year-month', 'time', 'hour-minute', 'tel', 'url', 'checkbox', 'radio'] },
  { name: 'validationCode', type: 'FieldValidityCode' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' },
  { name: 'value', type: 'string' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  { name: 'caption', description: `Caption slot/ Слот заголовка`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'label', description: `Label slot content/ Содержимое слота метки`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'leading', description: `Slot for displaying content before the input area/ Слот для отображения контента перед областью ввода`, properties: [{ name: 'props', type: '(FieldControl) | undefined' }] },
  { name: 'prefix', description: `Prefix slot/ Слот префикса`, properties: [{ name: 'props', type: '(any) | undefined' }] },
  { name: 'suffix', description: `Suffix slot/ Слот суффикса`, properties: [{ name: 'props', type: '(any) | undefined' }] },
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

export const InputSocialWikiData: WikiDataItem = {
  component: 'InputSocial',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
