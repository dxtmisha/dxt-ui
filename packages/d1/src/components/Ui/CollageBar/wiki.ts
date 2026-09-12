import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { CollageBarWikiData } from './wikiData'

export const CollageBarWikiStorybook = new WikiStorybook(
  CollageBarWikiData.component,
  CollageBarWikiData.props,
  CollageBarWikiData.defaults,
  CollageBarWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
