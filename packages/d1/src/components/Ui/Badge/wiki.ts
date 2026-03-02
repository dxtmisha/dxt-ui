import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { BadgeWikiData } from './wikiData'

export const BadgeWikiStorybook = new WikiStorybook(
  BadgeWikiData.component,
  BadgeWikiData.props,
  BadgeWikiData.defaults,
  BadgeWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
