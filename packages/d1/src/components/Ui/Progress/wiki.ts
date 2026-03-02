import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ProgressWikiData } from './wikiData'

export const ProgressWikiStorybook = new WikiStorybook(
  ProgressWikiData.component,
  ProgressWikiData.props,
  ProgressWikiData.defaults,
  ProgressWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
