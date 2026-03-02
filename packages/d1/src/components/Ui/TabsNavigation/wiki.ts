import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TabsNavigationWikiData } from './wikiData'

export const TabsNavigationWikiStorybook = new WikiStorybook(
  TabsNavigationWikiData.component,
  TabsNavigationWikiData.props,
  TabsNavigationWikiData.defaults,
  TabsNavigationWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
