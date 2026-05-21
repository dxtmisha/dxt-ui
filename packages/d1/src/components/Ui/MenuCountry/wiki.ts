import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { MenuCountryWikiData } from './wikiData'

export const MenuCountryWikiStorybook = new WikiStorybook(
  MenuCountryWikiData.component,
  MenuCountryWikiData.props,
  MenuCountryWikiData.defaults,
  MenuCountryWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
