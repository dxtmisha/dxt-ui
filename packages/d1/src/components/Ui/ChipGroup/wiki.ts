import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ChipGroupWikiData } from './wikiData'

export const ChipGroupWikiStorybook = new WikiStorybook(
  ChipGroupWikiData.component,
  ChipGroupWikiData.props,
  ChipGroupWikiData.defaults,
  ChipGroupWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
