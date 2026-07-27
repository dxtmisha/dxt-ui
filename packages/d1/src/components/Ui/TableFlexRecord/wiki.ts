import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TableFlexRecordWikiData } from './wikiData'

export const TableFlexRecordWikiStorybook = new WikiStorybook(
  TableFlexRecordWikiData.component,
  TableFlexRecordWikiData.props,
  TableFlexRecordWikiData.defaults,
  TableFlexRecordWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
