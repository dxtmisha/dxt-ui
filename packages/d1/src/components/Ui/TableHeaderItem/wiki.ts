import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TableHeaderItemWikiData } from './wikiData'

export const TableHeaderItemWikiStorybook = new WikiStorybook(
  TableHeaderItemWikiData.component,
  TableHeaderItemWikiData.props,
  TableHeaderItemWikiData.defaults,
  TableHeaderItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
