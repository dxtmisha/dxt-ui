import { WikiStorybook } from '@dxt-ui/functional'
import { wiki } from '@dxt-ui/media/wiki'

import { wikiD1 } from '../../../wiki/wiki.ts'

const propsNames: string[] = [
// :propsNames [!] System label / Системная метка
// :propsNames [!] System label / Системная метка
]

export const IconWikiStorybook = new WikiStorybook(
  'Icon',
  propsNames,
  wikiD1,
  wiki
)
