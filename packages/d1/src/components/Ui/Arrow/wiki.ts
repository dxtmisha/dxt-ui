import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ArrowWikiData } from './wikiData'

export const ArrowWikiStorybook = new WikiStorybook(
  ArrowWikiData.component,
  ArrowWikiData.props,
  ArrowWikiData.defaults,
  ArrowWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
