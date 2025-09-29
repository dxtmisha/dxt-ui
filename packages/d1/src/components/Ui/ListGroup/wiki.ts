import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'divider', type: 'boolean' },
  { name: 'open', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const ListGroupWikiStorybook = new WikiStorybook(
  'ListGroup',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
