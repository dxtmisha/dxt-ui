import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'autocapitalize', type: 'string', option: ['off', 'none', 'sentences', 'words', 'characters'] },
  { name: 'autocomplete', type: 'string' },
  { name: 'autocorrect', type: 'string', option: ['on', 'off'] },
  { name: 'autofocus', type: 'boolean' },
  { name: 'block', type: 'boolean' },
  { name: 'counter', type: 'string | number' },
  { name: 'counterId', type: 'string' },
  { name: 'counterShow', type: 'boolean' },
  { name: 'counterTemplate', type: 'string' },
  { name: 'description', type: 'string | number' },
  { name: 'descriptionId', type: 'string' },
  { name: 'detail', type: 'Record<string, any>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'enterKeyHint', type: 'string', option: ['enter', 'done', 'go', 'next', 'previous', 'search', 'send'] },
  { name: 'fieldCounterAttrs', type: 'ConstrBind<FieldCounter>' },
  { name: 'fieldMessageAttrs', type: 'ConstrBind<FieldMessage>' },
  { name: 'focus', type: 'boolean' },
  { name: 'forceShowMessage', type: 'boolean' },
  { name: 'form', type: 'string' },
  { name: 'helperId', type: 'string' },
  { name: 'helperMessage', type: 'string' },
  { name: 'iconCheckbox', type: 'IconValue<Icon>' },
  { name: 'iconIndeterminate', type: 'IconValue<Icon>' },
  { name: 'id', type: 'string | number' },
  { name: 'indeterminate', type: 'boolean' },
  { name: 'inputAttrs', type: 'Record<string, any>' },
  { name: 'inputMode', type: 'string', option: ['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'] },
  { name: 'isSkeleton', type: 'boolean' },
  { name: 'itemCenter', type: 'boolean' },
  { name: 'label', type: 'NumberOrString' },
  { name: 'labelId', type: 'string' },
  { name: 'loading', type: 'boolean | ConstrBind<Progress>' },
  { name: 'match', type: 'FieldMatch' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'modelValue', type: 'never' },
  { name: 'name', type: 'string' },
  { name: 'onUpdate:modelValue', type: '((value: boolean) => void) & ((value: string) => void)' },
  { name: 'onUpdate:value', type: '((value: boolean) => void) & ((value: string) => void)' },
  { name: 'placeholder', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'required', type: 'boolean' },
  { name: 'right', type: 'boolean' },
  { name: 'spellcheck', type: 'string', option: ['true', 'false'] },
  { name: 'tabindex', type: 'number' },
  { name: 'validationCode', type: 'FieldValidityCode' },
  { name: 'validationId', type: 'string' },
  { name: 'validationMessage', type: 'string' },
  { name: 'value', type: 'boolean' },
  { name: 'valueVariant', type: 'NumberOrStringOrBoolean' },
  { name: 'valueVariantHide', type: 'NumberOrStringOrBoolean' }
  // :propsList [!] System label / Системная метка
]

export const CheckboxWikiStorybook = new WikiStorybook(
  'Checkbox',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
