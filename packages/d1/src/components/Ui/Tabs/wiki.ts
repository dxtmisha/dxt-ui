import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TabsWikiData } from './wikiData'

export const TabsWikiStorybook = new WikiStorybook(
  TabsWikiData.component,
  TabsWikiData.props,
  TabsWikiData.defaults,
  TabsWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
