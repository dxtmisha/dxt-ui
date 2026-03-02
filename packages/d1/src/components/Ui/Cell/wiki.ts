import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { CellWikiData } from './wikiData'

export const CellWikiStorybook = new WikiStorybook(
  CellWikiData.component,
  CellWikiData.props,
  CellWikiData.defaults,
  CellWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
