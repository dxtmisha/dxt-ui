import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { MaskWikiData } from './wikiData'

export const MaskWikiStorybook = new WikiStorybook(
  MaskWikiData.component,
  MaskWikiData.props,
  MaskWikiData.defaults,
  MaskWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
