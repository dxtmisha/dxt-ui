import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SegmentControlWikiData } from './wikiData'

export const SegmentControlWikiStorybook = new WikiStorybook(
  SegmentControlWikiData.component,
  SegmentControlWikiData.props,
  SegmentControlWikiData.defaults,
  SegmentControlWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
