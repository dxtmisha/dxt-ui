import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { NavigationListWikiData } from './wikiData'

export const NavigationListWikiStorybook = new WikiStorybook(
  NavigationListWikiData.component,
  NavigationListWikiData.props,
  NavigationListWikiData.defaults,
  NavigationListWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
