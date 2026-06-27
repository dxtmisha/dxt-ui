import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { AvatarWikiData } from './wikiData'

export const AvatarWikiStorybook = new WikiStorybook(
  AvatarWikiData.component,
  AvatarWikiData.props,
  AvatarWikiData.defaults,
  AvatarWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
