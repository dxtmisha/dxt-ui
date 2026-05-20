import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { TextDescriptionWikiData } from './wikiData'

export const TextDescriptionWikiStorybook = new WikiStorybook(
  TextDescriptionWikiData.component,
  TextDescriptionWikiData.props,
  TextDescriptionWikiData.defaults,
  TextDescriptionWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
