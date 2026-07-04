import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'disabled', type: 'boolean' },
  { name: 'fieldLabelAttrs', type: 'ConstrBind<FieldLabelPropsBasic>' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessagePropsBasic>' },
  { name: 'forceShowMessage', type: 'boolean' },
  { name: 'hasHtmlCode', type: 'boolean' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'inputMode', type: 'string' },
  { name: 'itemAttrs', type: 'ConstrBind<InputCodeItemPropsBasic>' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'length', type: 'number' },
  { name: 'loading', type: 'boolean' },
  { name: 'match', type: 'RegExp' },
  { name: 'modelValue', type: 'string' },
  { name: 'onUpdate:modelValue', type: '((value: string) => void)' },
  { name: 'onUpdate:value', type: '((value: string) => void)' },
  { name: 'placeholder', type: 'string' },
  { name: 'success', type: 'boolean' },
  { name: 'validation', type: 'boolean' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' },
  { name: 'value', type: 'string' }
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

export const InputCodeWikiData: WikiDataItem = {
  component: 'InputCode',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
