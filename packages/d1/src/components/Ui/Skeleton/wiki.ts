import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SkeletonWikiData } from './wikiData'

export const SkeletonWikiStorybook = new WikiStorybook(
  SkeletonWikiData.component,
  SkeletonWikiData.props,
  SkeletonWikiData.defaults,
  SkeletonWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
