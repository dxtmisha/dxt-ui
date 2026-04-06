import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { ScrollbarWikiData } from './wikiData'

export const ScrollbarWikiStorybook = new WikiStorybook(
  ScrollbarWikiData.component,
  ScrollbarWikiData.props,
  ScrollbarWikiData.defaults,
  ScrollbarWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
