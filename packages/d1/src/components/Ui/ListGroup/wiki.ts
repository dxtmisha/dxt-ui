import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ListGroupWikiData } from './wikiData'

export const ListGroupWikiStorybook = new WikiStorybook(
  ListGroupWikiData.component,
  ListGroupWikiData.props,
  ListGroupWikiData.defaults,
  ListGroupWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
