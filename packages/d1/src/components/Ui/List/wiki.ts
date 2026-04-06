import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ListWikiData } from './wikiData'

export const ListWikiStorybook = new WikiStorybook(
  ListWikiData.component,
  ListWikiData.props,
  ListWikiData.defaults,
  ListWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
