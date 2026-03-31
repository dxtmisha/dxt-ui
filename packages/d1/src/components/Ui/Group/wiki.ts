import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { GroupWikiData } from './wikiData'

export const GroupWikiStorybook = new WikiStorybook(
  GroupWikiData.component,
  GroupWikiData.props,
  GroupWikiData.defaults,
  GroupWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
