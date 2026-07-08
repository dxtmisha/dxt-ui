import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ScrollStickyWikiData } from './wikiData'

export const ScrollStickyWikiStorybook = new WikiStorybook(
  ScrollStickyWikiData.component,
  ScrollStickyWikiData.props,
  ScrollStickyWikiData.defaults,
  ScrollStickyWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
