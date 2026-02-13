import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'flush', type: 'boolean' },
  { name: 'tag', type: 'string' }
  // :propsList [!] System label / Системная метка
]

export const HorizontalScrollWikiStorybook = new WikiStorybook(
  'HorizontalScroll',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
