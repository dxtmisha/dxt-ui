import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { BlockWikiData } from './wikiData'

export const BlockWikiStorybook = new WikiStorybook(
  BlockWikiData.component,
  BlockWikiData.props,
  BlockWikiData.defaults,
  BlockWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
