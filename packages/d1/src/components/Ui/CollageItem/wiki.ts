import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { CollageItemWikiData } from './wikiData'

export const CollageItemWikiStorybook = new WikiStorybook(
  CollageItemWikiData.component,
  CollageItemWikiData.props,
  CollageItemWikiData.defaults,
  CollageItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
