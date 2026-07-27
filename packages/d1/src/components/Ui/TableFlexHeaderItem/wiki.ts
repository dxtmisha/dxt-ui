import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TableFlexHeaderItemWikiData } from './wikiData'

export const TableFlexHeaderItemWikiStorybook = new WikiStorybook(
  TableFlexHeaderItemWikiData.component,
  TableFlexHeaderItemWikiData.props,
  TableFlexHeaderItemWikiData.defaults,
  TableFlexHeaderItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
