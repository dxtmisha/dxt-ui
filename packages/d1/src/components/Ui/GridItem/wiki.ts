import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { GridItemWikiData } from './wikiData'

export const GridItemWikiStorybook = new WikiStorybook(
  GridItemWikiData.component,
  GridItemWikiData.props,
  GridItemWikiData.defaults,
  GridItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
