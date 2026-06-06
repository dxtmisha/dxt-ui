import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { PaginationWikiData } from './wikiData'

export const PaginationWikiStorybook = new WikiStorybook(
  PaginationWikiData.component,
  PaginationWikiData.props,
  PaginationWikiData.defaults,
  PaginationWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
