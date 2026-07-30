import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { HeadroomWikiData } from './wikiData'

export const HeadroomWikiStorybook = new WikiStorybook(
  HeadroomWikiData.component,
  HeadroomWikiData.props,
  HeadroomWikiData.defaults,
  HeadroomWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
