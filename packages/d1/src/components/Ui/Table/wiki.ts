import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TableWikiData } from './wikiData'

export const TableWikiStorybook = new WikiStorybook(
  TableWikiData.component,
  TableWikiData.props,
  TableWikiData.defaults,
  TableWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
