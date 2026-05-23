import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { MenuButtonWikiData } from './wikiData'

export const MenuButtonWikiStorybook = new WikiStorybook(
  MenuButtonWikiData.component,
  MenuButtonWikiData.props,
  MenuButtonWikiData.defaults,
  MenuButtonWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
