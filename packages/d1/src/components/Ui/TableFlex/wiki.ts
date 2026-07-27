import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TableFlexWikiData } from './wikiData'

export const TableFlexWikiStorybook = new WikiStorybook(
  TableFlexWikiData.component,
  TableFlexWikiData.props,
  TableFlexWikiData.defaults,
  TableFlexWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
