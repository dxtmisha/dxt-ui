import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { BulletWikiData } from './wikiData'

export const BulletWikiStorybook = new WikiStorybook(
  BulletWikiData.component,
  BulletWikiData.props,
  BulletWikiData.defaults,
  BulletWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
