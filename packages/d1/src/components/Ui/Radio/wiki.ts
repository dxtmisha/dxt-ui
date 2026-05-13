import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki, wikiDescriptions } from '@dxtmisha/wiki/media'

import { RadioWikiData } from './wikiData'

export const RadioWikiStorybook = new WikiStorybook(
  RadioWikiData.component,
  RadioWikiData.props,
  RadioWikiData.defaults,
  RadioWikiData.wikiDesign,
  wiki,
  wikiDescriptions
)
