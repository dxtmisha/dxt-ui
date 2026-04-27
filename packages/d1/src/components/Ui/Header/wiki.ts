import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { HeaderWikiData } from './wikiData'

export const HeaderWikiStorybook = new WikiStorybook(
  HeaderWikiData.component,
  HeaderWikiData.props,
  HeaderWikiData.defaults,
  HeaderWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
