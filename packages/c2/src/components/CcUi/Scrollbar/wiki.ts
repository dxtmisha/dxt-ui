import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiC2 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'divider', type: 'boolean' },
  { name: 'dividerBottom', type: 'boolean' },
  { name: 'dividerTop', type: 'boolean' },
  { name: 'inverse', type: 'boolean' },
  { name: 'tag', type: 'string' },
  { name: 'visible', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const ScrollbarWikiStorybook = new WikiStorybook(
  'Scrollbar',
  propsNames,
  defaults,
  wikiC2,
  wiki,
  wikiDescriptions
)
