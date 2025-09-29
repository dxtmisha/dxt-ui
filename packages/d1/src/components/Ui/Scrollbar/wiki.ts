import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'divider', type: 'boolean' },
  { name: 'dividerBottom', type: 'boolean' },
  { name: 'dividerHide', type: 'boolean' },
  { name: 'dividerTop', type: 'boolean' },
  { name: 'inverse', type: 'boolean' },
  { name: 'standard', type: 'boolean' },
  { name: 'tag', type: 'string' },
  { name: 'visible', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const ScrollbarWikiStorybook = new WikiStorybook(
  'Scrollbar',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
