import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TableFlexItemWikiData } from './wikiData'

export const TableFlexItemWikiStorybook = new WikiStorybook(
  TableFlexItemWikiData.component,
  TableFlexItemWikiData.props,
  TableFlexItemWikiData.defaults,
  TableFlexItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
