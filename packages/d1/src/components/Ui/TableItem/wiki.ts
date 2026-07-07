import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TableItemWikiData } from './wikiData'

export const TableItemWikiStorybook = new WikiStorybook(
  TableItemWikiData.component,
  TableItemWikiData.props,
  TableItemWikiData.defaults,
  TableItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
