import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { RippleWikiData } from './wikiData'

export const RippleWikiStorybook = new WikiStorybook(
  RippleWikiData.component,
  RippleWikiData.props,
  RippleWikiData.defaults,
  RippleWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
