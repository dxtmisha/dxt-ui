import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { MotionTransformWikiData } from './wikiData'

export const MotionTransformWikiStorybook = new WikiStorybook(
  MotionTransformWikiData.component,
  MotionTransformWikiData.props,
  MotionTransformWikiData.defaults,
  MotionTransformWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
