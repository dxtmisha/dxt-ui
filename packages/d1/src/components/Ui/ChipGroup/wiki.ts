import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'chipAttrs', type: 'ConstrBind<Chip>' },
  { name: 'iconWhenSelected', type: 'boolean' },
  { name: 'keyLabel', type: 'string' },
  { name: 'keyValue', type: 'string' },
  { name: 'list', type: 'ChipGroupData' },
  { name: 'modelSelected', type: 'ListSelectedList' },
  { name: 'onUpdate:modelSelected', type: '(value: ListSelectedList) => void' },
  { name: 'onUpdate:selected', type: '(value: ListSelectedList) => void' },
  { name: 'readonly', type: 'boolean' },
  { name: 'selected', type: 'ListSelectedList' }
  // :propsList [!] System label / Системная метка
]

export const ChipGroupWikiStorybook = new WikiStorybook(
  'ChipGroup',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
