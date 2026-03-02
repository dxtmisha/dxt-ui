import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { PageWikiData } from './wikiData'

export const PageWikiStorybook = new WikiStorybook(
  PageWikiData.component,
  PageWikiData.props,
  PageWikiData.defaults,
  PageWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
