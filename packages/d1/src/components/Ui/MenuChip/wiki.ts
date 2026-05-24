import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { MenuChipWikiData } from './wikiData'

export const MenuChipWikiStorybook = new WikiStorybook(
  MenuChipWikiData.component,
  MenuChipWikiData.props,
  MenuChipWikiData.defaults,
  MenuChipWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
