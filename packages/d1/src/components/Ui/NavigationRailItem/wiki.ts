import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { NavigationRailItemWikiData } from './wikiData'

export const NavigationRailItemWikiStorybook = new WikiStorybook(
  NavigationRailItemWikiData.component,
  NavigationRailItemWikiData.props,
  NavigationRailItemWikiData.defaults,
  NavigationRailItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
