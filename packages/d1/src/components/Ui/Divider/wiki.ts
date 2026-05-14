import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { DividerWikiData } from './wikiData'

export const DividerWikiStorybook = new WikiStorybook(
  DividerWikiData.component,
  DividerWikiData.props,
  DividerWikiData.defaults,
  DividerWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
