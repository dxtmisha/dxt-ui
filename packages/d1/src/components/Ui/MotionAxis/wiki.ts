import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { MotionAxisWikiData } from './wikiData'

export const MotionAxisWikiStorybook = new WikiStorybook(
  MotionAxisWikiData.component,
  MotionAxisWikiData.props,
  MotionAxisWikiData.defaults,
  MotionAxisWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
