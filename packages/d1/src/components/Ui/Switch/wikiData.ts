import { type StorybookProps, type StorybookSlots, type WikiDataItem } from '@dxtmisha/wiki'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'adaptive', type: 'string', option: ['rightAlways', 'rightSm', 'rightMd', 'rightLg', 'rightXl', 'right2xl'] },
  { name: 'autocapitalize', type: 'string | undefined', option: ['off', 'none', 'sentences', 'words', 'characters'] },
  { name: 'autocomplete', type: 'string | undefined' },
  { name: 'autocorrect', type: 'string | undefined', option: ['on', 'off'] },
  { name: 'autofocus', type: 'boolean | undefined' },
  { name: 'block', type: 'boolean | undefined' },
  { name: 'container', type: 'string', option: ['rightSm', 'rightMd', 'rightLg', 'rightXl', 'right2xl'] },
  { name: 'counter', type: 'string | number | undefined' },
  { name: 'counterId', type: 'string | undefined' },
  { name: 'counterShow', type: 'boolean | undefined' },
  { name: 'counterTemplate', type: 'string | undefined' },
  { name: 'description', type: 'string | number | undefined' },
  { name: 'descriptionId', type: 'string | undefined' },
  { name: 'detail', type: 'Record<string, any> | undefined' },
  { name: 'disabled', type: 'boolean | undefined' },
  { name: 'enterKeyHint', type: 'string | undefined', option: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'] },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounterPropsBasic> | undefined' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessagePropsBasic> | undefined' },
  { name: 'focus', type: 'boolean | undefined' },
  { name: 'forceShowMessage', type: 'boolean | undefined' },
  { name: 'form', type: 'string | undefined' },
  { name: 'helperId', type: 'string | undefined' },
  { name: 'helperMessage', type: 'string | undefined' },
  { name: 'iconCheckbox', type: 'string | ConstrBind<ImagePropsBasic> | null | undefined' },
  { name: 'iconIndeterminate', type: 'string | ConstrBind<ImagePropsBasic> | null | undefined' },
  { name: 'id', type: 'string | number | undefined' },
  { name: 'indeterminate', type: 'boolean | undefined' },
  { name: 'inputAttrs', type: 'Record<string, any> | undefined' },
  { name: 'inputMode', type: 'string | undefined', option: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'] },
  { name: 'isSkeleton', type: 'boolean | undefined' },
  { name: 'itemCenter', type: 'boolean | undefined' },
  { name: 'label', type: 'NumberOrString | undefined' },
  { name: 'labelId', type: 'string | undefined' },
  { name: 'loading', type: 'boolean | ConstrBind<ProgressPropsBasic> | undefined' },
  { name: 'match', type: 'FieldMatch | undefined' },
  { name: 'maxlength', type: 'string | number | undefined' },
  { name: 'modelSelected', type: 'string | undefined' },
  { name: 'modelValue', type: 'boolean | undefined' },
  { name: 'name', type: 'string | undefined' },
  { name: 'onUpdate:modelSelected', type: '((value: string) => void) | undefined' },
  { name: 'onUpdate:modelValue', type: '((value: boolean) => void) | undefined' },
  { name: 'onUpdate:selected', type: '((value: string) => void) | undefined' },
  { name: 'onUpdate:value', type: '((value: boolean) => void) | undefined' },
  { name: 'placeholder', type: 'string | undefined' },
  { name: 'readonly', type: 'boolean | undefined' },
  { name: 'required', type: 'boolean | undefined' },
  { name: 'selected', type: 'string | undefined' },
  { name: 'spellcheck', type: 'string', option: ['true', 'false'] },
  { name: 'tabindex', type: 'number | undefined' },
  { name: 'validationCode', type: 'FieldValidityCode | undefined' },
  { name: 'validationId', type: 'string | undefined' },
  { name: 'validationMessage', type: 'string | undefined' },
  { name: 'value', type: 'boolean | undefined' },
  { name: 'valueVariant', type: 'NumberOrStringOrBoolean | undefined' },
  { name: 'valueVariantHide', type: 'NumberOrStringOrBoolean | undefined' }
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

export const SwitchWikiData: WikiDataItem = {
  component: 'Switch',
  props: propsNames,
  slots: slotsNames,
  events: eventsNames,
  defaults,
  wikiDesign: wikiD1
}
