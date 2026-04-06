import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { BarsWikiData } from './wikiData'

export const BarsWikiStorybook = new WikiStorybook(
  BarsWikiData.component,
  BarsWikiData.props,
  BarsWikiData.defaults,
  BarsWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
