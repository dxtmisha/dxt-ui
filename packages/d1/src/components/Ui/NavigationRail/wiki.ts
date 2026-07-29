import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { NavigationRailWikiData } from './wikiData'

export const NavigationRailWikiStorybook = new WikiStorybook(
  NavigationRailWikiData.component,
  NavigationRailWikiData.props,
  NavigationRailWikiData.defaults,
  NavigationRailWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
