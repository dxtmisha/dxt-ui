import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'counter', type: 'string | number' },
  { name: 'id', type: 'string' },
  { name: 'maxlength', type: 'string | number' },
  { name: 'template', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const FieldCounterWikiStorybook = new WikiStorybook(
  'FieldCounter',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
