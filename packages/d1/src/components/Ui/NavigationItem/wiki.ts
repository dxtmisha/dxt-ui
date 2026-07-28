import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { NavigationItemWikiData } from './wikiData'

export const NavigationItemWikiStorybook = new WikiStorybook(
  NavigationItemWikiData.component,
  NavigationItemWikiData.props,
  NavigationItemWikiData.defaults,
  NavigationItemWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
