import { type StorybookProps, WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  // :propsList [!] System label / Системная метка
]

export const AnchorWikiStorybook = new WikiStorybook(
  'Anchor',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
