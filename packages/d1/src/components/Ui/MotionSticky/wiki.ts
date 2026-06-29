import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { MotionStickyWikiData } from './wikiData'

export const MotionStickyWikiStorybook = new WikiStorybook(
  MotionStickyWikiData.component,
  MotionStickyWikiData.props,
  MotionStickyWikiData.defaults,
  MotionStickyWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
