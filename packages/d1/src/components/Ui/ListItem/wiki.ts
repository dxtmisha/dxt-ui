import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ListItemWikiData } from './wikiData'

export const ListItemWikiStorybook = new WikiStorybook(
  ListItemWikiData.component,
  ListItemWikiData.props,
  ListItemWikiData.defaults,
  ListItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
