import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ProgressBarWikiData } from './wikiData'

export const ProgressBarWikiStorybook = new WikiStorybook(
  ProgressBarWikiData.component,
  ProgressBarWikiData.props,
  ProgressBarWikiData.defaults,
  ProgressBarWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
