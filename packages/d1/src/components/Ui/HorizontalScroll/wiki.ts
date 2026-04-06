import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { HorizontalScrollWikiData } from './wikiData'

export const HorizontalScrollWikiStorybook = new WikiStorybook(
  HorizontalScrollWikiData.component,
  HorizontalScrollWikiData.props,
  HorizontalScrollWikiData.defaults,
  HorizontalScrollWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
