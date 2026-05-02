import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { PageAreaWikiData } from './wikiData'

export const PageAreaWikiStorybook = new WikiStorybook(
  PageAreaWikiData.component,
  PageAreaWikiData.props,
  PageAreaWikiData.defaults,
  PageAreaWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
