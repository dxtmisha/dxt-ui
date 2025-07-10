import { type StorybookProps, WikiStorybook } from '@dxt-ui/wiki'
import { wiki, wikiDescriptions } from '@dxt-ui/wiki/media'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
  // :propsList [!] System label / Системная метка
  { name: 'active', type: 'boolean' }
  // :propsList [!] System label / Системная метка
]

export const SkeletonWikiStorybook = new WikiStorybook(
  'Skeleton',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
