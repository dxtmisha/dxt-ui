import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'chipAttrs', type: 'ConstrBind<ChipProps>' },
  { name: 'disabled', type: 'boolean' },
  { name: 'iconAttrs', type: 'ConstrBind<IconProps>' },
  { name: 'iconCancel', type: 'IconValue<IconProps>' },
  { name: 'iconShow', type: 'boolean' },
  { name: 'multiple', type: 'boolean' },
  { name: 'placeholder', type: 'string' },
  { name: 'readonly', type: 'boolean' },
  { name: 'value', type: 'ListList' }
  // :propsList [!] System label / Системная метка
]

export const SelectValueWikiStorybook = new WikiStorybook(
  'SelectValue',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
