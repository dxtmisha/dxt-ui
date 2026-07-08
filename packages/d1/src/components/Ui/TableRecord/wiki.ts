import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TableRecordWikiData } from './wikiData'

export const TableRecordWikiStorybook = new WikiStorybook(
  TableRecordWikiData.component,
  TableRecordWikiData.props,
  TableRecordWikiData.defaults,
  TableRecordWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
