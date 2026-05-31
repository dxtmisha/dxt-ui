import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autocapitalize', type: 'string', option: ['off', 'none', 'sentences', 'words', 'characters'] },
  { name: 'autocomplete', type: 'string' },
  { name: 'autocorrect', type: 'string', option: ['on', 'off'] },
  { name: 'autofocus', type: 'boolean' },
  { name: 'chipAttrs', type: 'ConstrBind<ChipProps>' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'enterKeyHint', type: 'string', option: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'] },
  { name: 'filterMode', type: 'boolean' },
  { name: 'form', type: 'string' },
  { name: 'hideLabelValue', type: 'boolean' },
  { name: 'hideList', type: 'boolean' },
  { name: 'hideValueIcon', type: 'boolean' },
  { name: 'icon', type: 'IconValue<IconProps>' },
  { name: 'iconArrowDown', type: 'IconValue<IconProps>' },
  { name: 'id', type: 'string | number' },
  { name: 'inputAttrs', type: 'Record<string, any>' },
  { name: 'inputMode', type: 'string', option: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'] },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'labelSeparator', type: 'string' },
  { name: 'match', type: 'FieldMatch' },
  { name: 'max', type: 'NumberOrString' },
  { name: 'menuAttrs', type: 'ConstrBind<MenuProps>' },
  { name: 'modelValue', type: 'Value' },
  { name: 'multiple', type: 'boolean' },
  { name: 'name', type: 'string' },
  { name: 'onUpdate:modelValue', type: '((value: any) => void)' },
  { name: 'onUpdate:value', type: '((value: any) => void)' },
  { name: 'option', type: 'ListRecord' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'selectionStyle', type: 'string', option: ['checkbox', 'none', 'radio', 'checkmark', 'auto'] },
  { name: 'showSearch', type: 'boolean' },
  { name: 'spellcheck', type: 'string', option: ['true', 'false'] },
  { name: 'tabindex', type: 'number' },
  { name: 'value', type: 'Value' }
  // :propsList [!] System label / Системная метка
]

const slotsNames: StorybookSlots = [
  // :slotsList [!] System label / Системная метка
  // :slotsList [!] System label / Системная метка
]

const eventsNames: StorybookSlots = [
  // :eventsList [!] System label / Системная метка
  // :eventsList [!] System label / Системная метка
]

export const MenuChipWikiData: WikiDataItem = {
  component: 'MenuChip',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
