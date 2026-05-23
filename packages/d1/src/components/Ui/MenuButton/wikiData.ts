import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'arrow', type: 'string', option: ['none', 'auto', 'carousel', 'stepper'] },
  { name: 'arrowAlign', type: 'string', option: ['center', 'right', 'left'] },
  { name: 'arrowStep', type: 'NumberOrString | undefined' },
  { name: 'autocapitalize', type: 'string | undefined', option: ['off', 'none', 'sentences', 'words', 'characters'] },
  { name: 'autocomplete', type: 'string | undefined' },
  { name: 'autocorrect', type: 'string | undefined', option: ['on', 'off'] },
  { name: 'autofocus', type: 'boolean | undefined' },
  { name: 'buttonAttrs', type: 'ConstrBind<ButtonPropsBasic> | undefined' },
  { name: 'detail', type: 'Record<string, any> | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'enterKeyHint', type: 'string | undefined', option: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'] },
  { name: 'filterMode', type: 'boolean | undefined' },
  { name: 'form', type: 'string | undefined' },
  { name: 'hideLabelValue', type: 'boolean | undefined' },
  { name: 'hideList', type: 'boolean | undefined' },
  { name: 'iconArrowDown', type: 'IconValue<IconPropsBasic> | undefined' },
  { name: 'iconSearch', type: 'IconValue<IconPropsBasic> | undefined' },
  { name: 'id', type: 'string | number | undefined' },
  { name: 'inputAttrs', type: 'Record<string, any> | undefined' },
  { name: 'inputMode', type: 'string | undefined', option: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'] },
  { name: 'inputSearchAttrs', type: 'ConstrBind<InputPropsBasic> | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'labelSeparator', type: 'string | undefined' },
  { name: 'match', type: 'FieldMatch | undefined' },
  { name: 'max', type: 'NumberOrString | undefined' },
  { name: 'menuAttrs', type: 'ConstrBind<MenuPropsBasic> | undefined' },
  { name: 'modelValue', type: 'Value' },
  { name: 'multiple', type: 'boolean | undefined' },
  { name: 'name', type: 'string | undefined' },
  { name: 'onUpdate:modelValue', type: '((value: any) => void) | undefined' },
  { name: 'onUpdate:value', type: '((value: any) => void) | undefined' },
  { name: 'option', type: 'ListRecord | undefined' },
  { name: 'readonly', type: 'boolean | undefined' },
  { name: 'required', type: 'boolean | undefined' },
  { name: 'selectionStyle', type: 'string', option: ['checkbox', 'none', 'radio', 'auto', 'checkmark'] },
  { name: 'showSearch', type: 'boolean | undefined' },
  { name: 'spellcheck', type: 'string', option: ['true', 'false'] },
  { name: 'tabindex', type: 'number | undefined' },
  { name: 'validationCode', type: 'FieldValidityCode | undefined' },
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

export const MenuButtonWikiData: WikiDataItem = {
  component: 'MenuButton',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
