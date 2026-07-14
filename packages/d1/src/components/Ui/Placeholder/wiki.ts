import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { PlaceholderWikiData } from './wikiData'

export const PlaceholderWikiStorybook = new WikiStorybook(
  PlaceholderWikiData.component,
  PlaceholderWikiData.props,
  PlaceholderWikiData.defaults,
  PlaceholderWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
