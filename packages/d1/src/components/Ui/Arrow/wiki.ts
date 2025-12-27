import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'inverse', type: 'boolean' },
  { name: 'position', type: 'string', option: ['auto', 'top', 'bottom', 'left', 'right'] },
  { name: 'size', type: 'string', option: ['sm', 'md', 'lg'] }
  // :propsList [!] System label / Системная метка
]

export const ArrowWikiStorybook = new WikiStorybook(
  'Arrow',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
