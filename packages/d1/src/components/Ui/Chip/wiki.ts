import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ChipWikiData } from './wikiData'

export const ChipWikiStorybook = new WikiStorybook(
  ChipWikiData.component,
  ChipWikiData.props,
  ChipWikiData.defaults,
  ChipWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
