import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { CollageWikiData } from './wikiData'

export const CollageWikiStorybook = new WikiStorybook(
  CollageWikiData.component,
  CollageWikiData.props,
  CollageWikiData.defaults,
  CollageWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
