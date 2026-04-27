import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { AreaWikiData } from './wikiData'

export const AreaWikiStorybook = new WikiStorybook(
  AreaWikiData.component,
  AreaWikiData.props,
  AreaWikiData.defaults,
  AreaWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
