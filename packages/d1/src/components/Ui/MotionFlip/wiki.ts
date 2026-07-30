import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { MotionFlipWikiData } from './wikiData'

export const MotionFlipWikiStorybook = new WikiStorybook(
  MotionFlipWikiData.component,
  MotionFlipWikiData.props,
  MotionFlipWikiData.defaults,
  MotionFlipWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
