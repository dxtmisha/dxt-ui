import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { SkeletonItemWikiData } from './wikiData'

export const SkeletonItemWikiStorybook = new WikiStorybook(
  SkeletonItemWikiData.component,
  SkeletonItemWikiData.props,
  SkeletonItemWikiData.defaults,
  SkeletonItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
