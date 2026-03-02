import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { AnchorWikiData } from './wikiData'

export const AnchorWikiStorybook = new WikiStorybook(
  AnchorWikiData.component,
  AnchorWikiData.props,
  AnchorWikiData.defaults,
  AnchorWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
