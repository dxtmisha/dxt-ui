import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { MenuLanguageWikiData } from './wikiData'

export const MenuLanguageWikiStorybook = new WikiStorybook(
  MenuLanguageWikiData.component,
  MenuLanguageWikiData.props,
  MenuLanguageWikiData.defaults,
  MenuLanguageWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
