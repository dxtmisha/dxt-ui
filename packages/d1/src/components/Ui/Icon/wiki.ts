import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { IconWikiData } from './wikiData'

export const IconWikiStorybook = new WikiStorybook(
  IconWikiData.component,
  IconWikiData.props,
  IconWikiData.defaults,
  IconWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
