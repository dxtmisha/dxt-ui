import { type StorybookProps, WikiStorybook } from '@dxt-ui/functional'
import { wiki } from '@dxt-ui/media/wiki'
import { wikiDescriptions } from '@dxt-ui/media/wiki-descriptions'

import { wikiD1 } from '../../../wiki/wiki'
import { defaults } from './props'

const propsNames: StorybookProps = [
// :propsList [!] System label / Системная метка
// :propsList [!] System label / Системная метка
]

export const IconWikiStorybook = new WikiStorybook(
  'Icon',
  propsNames,
  defaults,
  wikiD1,
  wiki,
  wikiDescriptions
)
