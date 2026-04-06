import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { MenuWikiData } from './wikiData'

export const MenuWikiStorybook = new WikiStorybook(
  MenuWikiData.component,
  MenuWikiData.props,
  MenuWikiData.defaults,
  MenuWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
