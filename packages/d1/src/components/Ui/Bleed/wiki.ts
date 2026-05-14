import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { BleedWikiData } from './wikiData'

export const BleedWikiStorybook = new WikiStorybook(
  BleedWikiData.component,
  BleedWikiData.props,
  BleedWikiData.defaults,
  BleedWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
