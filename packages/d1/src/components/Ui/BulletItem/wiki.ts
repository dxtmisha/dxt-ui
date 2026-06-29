import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { BulletItemWikiData } from './wikiData'

export const BulletItemWikiStorybook = new WikiStorybook(
  BulletItemWikiData.component,
  BulletItemWikiData.props,
  BulletItemWikiData.defaults,
  BulletItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
