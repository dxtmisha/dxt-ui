import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SegmentControlItemWikiData } from './wikiData'

export const SegmentControlItemWikiStorybook = new WikiStorybook(
  SegmentControlItemWikiData.component,
  SegmentControlItemWikiData.props,
  SegmentControlItemWikiData.defaults,
  SegmentControlItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
