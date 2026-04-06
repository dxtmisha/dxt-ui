import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ListMenuWikiData } from './wikiData'

export const ListMenuWikiStorybook = new WikiStorybook(
  ListMenuWikiData.component,
  ListMenuWikiData.props,
  ListMenuWikiData.defaults,
  ListMenuWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
