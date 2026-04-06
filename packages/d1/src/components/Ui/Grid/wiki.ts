import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { GridWikiData } from './wikiData'

export const GridWikiStorybook = new WikiStorybook(
  GridWikiData.component,
  GridWikiData.props,
  GridWikiData.defaults,
  GridWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
